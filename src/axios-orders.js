import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-a61da.firebaseio.com/'
})

export default instance