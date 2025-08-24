import { useEffect, useRef, type ChangeEvent } from "react"


export default function FileSelector() {
    const ref = useRef<HTMLInputElement>(null)


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = ref.current?.files?.[0];
        console.log(file);

        if (file) {
            console.log(URL.createObjectURL(file));
        }
    }


    return (
        <label className="file-selector-label">
            <input accept="video/*" ref={ref} className="file-selector" name="fileinput" type="file" onChange={handleChange} />
            <div className="file-selector-content">
                <div>
                    <p>Drag and drop a video file or click and select</p>
                </div>
            </div>
        </label>
    )
}


