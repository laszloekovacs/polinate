import { z } from "zod"


export default function FileSelector({ ref }: { ref: React.Ref<HTMLInputElement> }) {
    // state when file is selected
    /*
        const fileSelectSchema = z.object({
            current: z.instanceof(HTMLInputElement)
        })
    
        const fileSelectRef = fileSelectSchema.parse(ref)
    
        console.log(fileSelectRef.current.files)
    */

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