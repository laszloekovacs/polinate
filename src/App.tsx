import OpenPlaybackWindowButton from "./components/display-button"
import FileSelector from "./components/file-selector"

function App() {

  if (window.location.hash == "#playback") {
    return (
      <div>
        <p>playback window</p>
      </div>
    )
  } else {



    return (
      <div className="container">
        <OpenPlaybackWindowButton />
        <FileSelector />
      </div>
    )
  }
}

export default App
