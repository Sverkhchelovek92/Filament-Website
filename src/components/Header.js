import React from 'react'
import PlayButton from './PlayButton'

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
          <div className="header-text">
            Создаю визуальные истории, которые раскроют уникальность вашего
            бизнеса
          </div>
          <div className="header-button">
            <PlayButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
