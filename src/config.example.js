import axios from 'axios'


if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://localhost:3000'
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
}else{
    axios.defaults.baseURL = 'http://localhost/gtsdm/sdmNG'
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
}

