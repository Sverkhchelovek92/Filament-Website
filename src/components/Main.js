import React from 'react'

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="main-info">
          <div className="main-info-text">
            <div className="main-info-text-one">
              <p>
                Привет, меня зовут Никита и я профессиональный видеооператор.
              </p>
              <p>
                За годы работы реализовал более 60 проектов в различных
                областях, включая рекламу, музыкальные клипы и корпоративные
                фильмы.
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
        <div className="main-stages">
          <div className="main-stages-title">
            <h2 className="main-stages-title-h">
              Ключевые этапы видеопродакшена
            </h2>
          </div>
          <div className="main-stages-cards">
            <div className="main-stages-card">
              <div className="main-stages-card-top">
                <div className="main-stages-card-graphic">
                  <div className="small-circle-1">
                    <div className="big-circle-1"></div>
                  </div>
                </div>
                <div className="main-stages-card-stat">
                  +20% от общего объема работ
                </div>
              </div>
              <div className="main-stages-card-bottom">
                <div className="main-stages-card-title">
                  Разработка концепции
                </div>
                <div className="main-stages-card-text">
                  Обдумывание целей, разработка сценария и создание общей идеи,
                  которая задает тон будущему видео
                </div>
              </div>
            </div>
            <div className="main-stages-card">
              <div className="main-stages-card-top">
                <div className="main-stages-card-graphic">
                  <div className="small-circle-2">
                    <div className="big-circle-2"></div>
                  </div>
                </div>
                <div className="main-stages-card-stat">
                  +15% от общего объема работ
                </div>
              </div>
              <div className="main-stages-card-bottom">
                <div className="main-stages-card-title">
                  Подготовка и менеджмент
                </div>
                <div className="main-stages-card-text">
                  Выбор локаций, кастинг, планирование съемок и подготовка всего
                  необходимого оборудования
                </div>
              </div>
            </div>
            <div className="main-stages-card">
              <div className="main-stages-card-top">
                <div className="main-stages-card-graphic">
                  <div className="small-circle-3">
                    <div className="big-circle-3"></div>
                  </div>
                </div>
                <div className="main-stages-card-stat">
                  +30% от общего объема работ
                </div>
              </div>
              <div className="main-stages-card-bottom">
                <div className="main-stages-card-title">Съемка</div>
                <div className="main-stages-card-text">
                  Реализация концепции на съемочной площадке: съемка сцен,
                  работа с освещением, звуком и всеми участниками
                </div>
              </div>
            </div>
            <div className="main-stages-card">
              <div className="main-stages-card-top">
                <div className="main-stages-card-graphic">
                  <div className="small-circle-4">
                    <div className="big-circle-4"></div>
                  </div>
                </div>
                <div className="main-stages-card-stat">
                  +35% от общего объема работ
                </div>
              </div>
              <div className="main-stages-card-bottom">
                <div className="main-stages-card-title">
                  Монтаж и пост-продакшн
                </div>
                <div className="main-stages-card-text">
                  Обработка и сборка отснятого материала, монтаж,
                  цветокоррекция, добавление звуков и финальная доработка
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-feedback">
          <div className="main-feedback-container">
            <div className="main-feedback-title">
              <h1>Хотите крутое видео?</h1>
              <h1>Напишите мне</h1>
            </div>
            <div className="main-feedback-form">
              <form>
                <div className="main-feedback-form-top">
                  <input
                    type="text"
                    className="feedback-input-name"
                    name="name"
                    placeholder="Ваше имя"
                    autoComplete="off"
                    required
                  ></input>
                  <input
                    type="text"
                    className="feedback-input-email"
                    name="email"
                    placeholder="Ваш e-mail"
                    autoComplete="off"
                    required
                  ></input>
                </div>

                <textarea
                  className="feedback-input-text"
                  name="text"
                  placeholder="Вкратце опишите задачу"
                  autoComplete="off"
                ></textarea>
                <div className="feedback-input-bottom">
                  <div className="feedback-input-bottom-left">
                    <div className="feedback-checkbox-div">
                      <input
                        type="checkbox"
                        id="personalData"
                        name="personal"
                        value="check"
                        className="feedback-checkbox"
                      />
                    </div>

                    <div className="personal-data">
                      Даю согласие на обработку персональных данных
                    </div>
                  </div>
                  <div className="feedback-input-bottom-right">
                    <button type="submit" className="feedback-submit-btn">
                      Отправить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
