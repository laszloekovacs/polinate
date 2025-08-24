import { useRef } from "react"


export default function FileSelector() {
    const fileSelectRef = useRef<HTMLInputElement>(null)



    return (
        <label className="file-selector-label">
            <input ref={fileSelectRef} className="file-selector" name="fileinput" type="file"></input>

            <div className="file-selector-content">
                <div>
                    <p>Drag and drop a video file or click and select</p>
                </div>
            </div>
        </label>
    )
}