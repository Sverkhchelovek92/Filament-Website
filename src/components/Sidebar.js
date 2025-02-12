import React from 'react'
import { NavLink, Link } from 'react-router-dom'

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
          <li>
            <NavLink to="all-videos">Все работы</NavLink>
          </li>
          <li>Промышленность</li>
          <li>Корпоративные</li>
          <li>Бизнес</li>
          <li>Рестораны</li>
          <li>Мода</li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <ul className="sidebare-list-bottom">
          <li>
            <NavLink to="courses">Курсы / обучение</NavLink>
          </li>
          <li>
            <NavLink to="contacts">Контакты</NavLink>
          </li>
        </ul>
        <button className="sidebar-btn">Рассчитать проект</button>
      </div>
    </div>
  )
}

export default Sidebar
