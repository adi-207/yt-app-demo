import React, { useEffect, useState } from 'react'
import youtube from './apis/youtube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'

import Videolist from './Videolist'

const App = () => {

    const [videos , setVideos] = useState([])
    const [selectedVideo , setSelectedVideo] = useState(null)

    
    const onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
        
    }

    useEffect(() => {
        onSearchSubmit('youtube')
    }, [])

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    }

    
        console.log(videos)
        return (
            <div className="ui container">
                <SearchBar onSubmit={onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail   video={selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <Videolist  onVideoSelect={onVideoSelect} videos={videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    
} 

export default App
