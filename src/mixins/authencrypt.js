import AES from 'aes-js';
import SHA from 'js-sha256';

export default{
    methods: {
        hashEquals(a, b){
            if(a == b) return true;
            if(a == null || b == null) return false;
            if(a.length != b.length) return false;
            
            for(var i=0;i < a.length;i++){
                if(a[i] != b[i]) return false;
            }
            
            return true;
        },
        bytesToBinary(buffer){
            var binary  = '';
            var bytes   = new Uint8Array(buffer);
            
            for(var i=0;i < bytes.byteLength;i++){
                binary += String.fromCharCode(bytes[i]);
            }
            return binary;
        },
        binaryToBytes(binary){
            var bytes = new Uint8Array(binary.length);
            
            for(var i=0;i < binary.length;i++){
                bytes[i] = binary.charCodeAt(i);
            }
            
            return bytes.buffer;
        },
        generateIv(){
            var iv = [];
            for(var i=0;i < 16;i++){
                iv.push(Math.floor(Math.random() * 127)); // Limit to 127 instead of 256 for more compatibility.
            }
            
            return iv;
        },
        signedToUnsigned(bytes){
            var result = [];
            var unsigned;
            for(var i=0;i < bytes.length;i++){
                unsigned = bytes[i] < 0? bytes[i] + 256 : bytes[i];
                result.push(unsigned);
            }
            
            return result;
        },
        unsignedToSigned(bytes){
            var result = [];
            var signed;
            for(var i=0;i < bytes.length;i++){
                signed = bytes[i] > 127? bytes[i] - 256 : bytes[i];
                result.push(signed);
            }
            
            return result;
        },
        encrypt(string, eKey, aKey){
            var key = AES.utils.utf8.toBytes(eKey);
            var iv  = this.generateIv();
            
            var bytes       = AES.utils.utf8.toBytes(string);
            var aesCbc      = new AES.ModeOfOperation.cbc(key, iv);
            var encrypted   = aesCbc.encrypt(AES.padding.pkcs7.pad(bytes));
            
            encrypted = this.unsignedToSigned(encrypted);
            
            // Pack iv and ciphertext into the doc and generate a signature for it.
            var document  = iv.concat(encrypted);
            var signature = SHA.hmac.array(aKey, this.signedToUnsigned(document));
            
            signature = this.unsignedToSigned(signature);
            
            // Envelop the doc and plaster the signature on it.
            var msg = signature.concat(document);
            
            return btoa(this.bytesToBinary(msg));
        },
        decrypt(string, eKey, aKey){
            string = atob(string);
            
            var bytes = this.binaryToBytes(string);
	        
	        var signature = bytes.slice(0, 32);
	        var document  = bytes.slice(32);
	        
	        var uSignature = new Uint8Array(signature);
	        var uDocument  = new Uint8Array(document);

            var calculatedSig = SHA.hmac.array(aKey, uDocument);
            
            if(this.hashEquals(uSignature, calculatedSig)){
                var key       = AES.utils.utf8.toBytes(eKey);
                var iv        = document.slice(0, 16);
                var encrypted = document.slice(16);
                
    	        var uIv = new Uint8Array(iv);
    	        var uEncrypted = new Uint8Array(encrypted);
                
                var aesCbc      = new AES.ModeOfOperation.cbc(key, uIv);
                var decrypted   = aesCbc.decrypt(uEncrypted);
    	        
    	        decrypted = AES.utils.utf8.fromBytes(AES.padding.pkcs7.strip(decrypted));
    	        
    	        return JSON.parse(decrypted);
            }
            
            return false;
        }
    }
}
