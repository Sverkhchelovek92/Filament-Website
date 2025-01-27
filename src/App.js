import './App.css'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
