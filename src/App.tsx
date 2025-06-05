import { useState } from 'react'
import ModeSelectScreen from './ModeSelectScreen'
import Controller from './Controller'
import Player from './Player'
import "./App.css"

export type Modes = "player" | "controller"

function App() {
  const [role, setRole] = useState<Modes | null>(null)

  if (role == "player") {
    return <Player />
  }

  if (role == "controller") {
    return <Controller />
  }

  return (
    <div>
      <ModeSelectScreen onSelect={setRole} />
      <div className="scrolling-text">
        <span>🐝 Buzzing with creativity! 🐝 Buzzing with creativity! 🐝</span>
      </div>
      <div className="wrapper">
        <div className="marquee">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut suscipit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut suscipit.
          </p>
        </div>
      </div>
    </div>
  )


}

export default App
