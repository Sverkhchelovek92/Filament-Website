import React from 'react'

import VideoData from '../data/VideoData'
import VideoCard from '../components/VideoCard'

function AllVideos() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="videos-catalogue-title">Все работы</h1>
        <div className="video-catalogue">
          {VideoData.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              title={video.title}
              year={video.year}
              thumbnail={video.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllVideos
