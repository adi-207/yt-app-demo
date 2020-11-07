import React from 'react'
import Videoitem from './Videoitem'

const Videolist = (props) => {

    const videos = props.videos.map( (video) => {
        return <Videoitem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video={video}/>
    } )

     return (
            <div className="ui relaxed divided list">{videos}</div>
        
     )
}

export default Videolist