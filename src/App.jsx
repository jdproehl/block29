import { useState } from 'react'
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import { AllPlayers } from './components/AllPlayers'
import { SinglePlayerView } from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'

function App() {

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Players">All Players</NavLink>
        <NavLink to="/NewPlayerForm">Add a Player</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path="/players" element={<AllPlayers  />} />
        <Route path="/players/:playerId" element={<SinglePlayerView />} />
        <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
      </Routes>
    </>
  )
}

export default App
