import './App.css'
import Sidebar from './components/Sidebar'
import Contacts from './pages/Contacts'
import Courses from './pages/Courses'

import Home from './pages/Home'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App
