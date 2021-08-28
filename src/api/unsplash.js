import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID DdWqWIBvxAVube8m-utuvo83XCREGKry65O79agYhl0'
    }
})