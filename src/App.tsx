import { useState } from 'react'
import ModeSelectScreen from './ModeSelectScreen'
import Controller from './Controller'
import Player from './Player'

export type Modes = "player" | "controller"

function App() {
  const [role, setRole] = useState<Modes | null>(null)

  if (role == "player") {
    return <Player />
  }

  if (role == "controller") {
    return <Controller />
  }

  return <ModeSelectScreen onSelect={setRole} />
}

export default App
