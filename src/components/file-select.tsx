

export default function FileSelector() {


    return (
        <label className="file-selector-label">
            <input className="file-selector" name="fileinput" type="file"></input>

            <div className="file-selector-content">
                <div>
                    <p>Drag and drop a video file or click and select</p>
                </div>
            </div>
        </label>
    )
}