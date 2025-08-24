import { useRef, useState } from "react"
import OpenPlaybackWindowButton from "./components/display-button"
import FileSelector from "./components/file-selector"

function App() {
  // store video object on the root of the app
  const [videoFile, setVideoFile] = useState<null | string>()

  const inputRef = useRef<HTMLInputElement | null>(null)


  if (window.location.hash == "#playback") {
    return (
      <div className="container">
        <p>playback window</p>
      </div>
    )
  } else {



    return (
      <div className="container">
        <OpenPlaybackWindowButton />
        <FileSelector ref={inputRef} />
      </div>
    )
  }
}

export default App
