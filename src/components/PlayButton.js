import React from 'react'
import { IoPlayOutline } from 'react-icons/io5'

function PlayButton() {
  return (
    <div class="circle-button">
      <svg viewBox="0 0 120 120" class="text-circle">
        <path
          id="textPath"
          d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
          fill="none"
        />
        <text fill="white">
          <textPath href="#textPath" startOffset="0%" className="button-text">
            ПОСМОТРЕТЬ ШОУРИЛ ПОСМОТРЕТЬ ШОУРИЛ ПОСМОТРЕТЬ ШОУРИЛ
          </textPath>
        </text>
      </svg>
      <div class="play-icon">
        <IoPlayOutline />
      </div>
    </div>
  )
}

export default PlayButton
