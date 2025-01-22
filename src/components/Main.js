import React from 'react'

function Main() {
  return (
    <div className="main">
      <div className="main-info">
        <div className="main-info-text">
          <div className="main-info-text-one">
            <p>Привет, меня зовут Никита и я профессиональный видеооператор.</p>
            <p>
              За годы работы реализовал более 60 проектов в различных областях,
              включая рекламу, музыкальные клипы и корпоративные фильмы.
            </p>
          </div>
          <div className="main-info-text-two">
            <p>
              Моя цель — предоставить клиентам качественные видеоматериалы,
              соответствующие их требованиям и стандартам.
            </p>
            <p>
              В своей работе я уделяю внимание всем этапам создания видео, от
              разработки концепции до финальной обработки материала.
            </p>
          </div>
        </div>
        <div className="main-info-stats">
          <div className="main-info-stat-one">
            <div className="stat-num">14</div>
            <div className="stat-text">лет опыта</div>
          </div>
          <div className="main-info-stat-two">
            <div className="stat-num">&gt;60</div>
            <div className="stat-text">выполненных работ</div>
          </div>
          <div className="main-info-stat-three">
            <div className="stat-num">42</div>
            <div className="stat-text">довольных клиента</div>
          </div>
          <div className="main-info-stat-btn">
            <button className="stat-btn">Посмотреть мои работы</button>
          </div>
        </div>
      </div>
      <div className="main-stages"></div>
      <div className="main-feedback"></div>
    </div>
  )
}

export default Main
