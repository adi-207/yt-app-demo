import axios from 'axios'

const KEY = 'AIzaSyAm-YLMHxeWGnSeYRAzsT_fpyWboE2vLgM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})