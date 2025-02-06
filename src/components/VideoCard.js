import React from 'react'

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img
        className="video-thumbnail"
        alt=""
        src={require(`../../public/img/thumbnails/${video.thumbnail}`)}
      ></img>
      <div className="video-gradient"></div>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <h3 className="video-year">{video.year}</h3>
      </div>
    </div>
  )
}

export default VideoCard
