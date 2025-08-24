

export default function FileSelector({ ref }: { ref: React.Ref<HTMLInputElement> }) {

    return (
        <label className="file-selector-label">
            <input accept="video/*" ref={ref} className="file-selector" name="fileinput" type="file" />
            <div className="file-selector-content">
                <div>
                    <p>Drag and drop a video file or click and select</p>
                </div>
            </div>
        </label>
    )
}