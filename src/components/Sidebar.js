import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-title">
          <h2 className="sidebar-title-name">
            <Link to="/">Никита Парфенов</Link>
          </h2>
        </div>
        <ul className="sidebare-list-top">
          <li>Все работы</li>
          <li>Промышленность</li>
          <li>Корпоративные</li>
          <li>Бизнес</li>
          <li>Рестораны</li>
          <li>Мода</li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <ul className="sidebare-list-bottom">
          <li>Курсы / обучение</li>
          <li>Контакты</li>
        </ul>
        <button className="sidebar-btn">Рассчитать проект</button>
      </div>
    </div>
  )
}

export default Sidebar
