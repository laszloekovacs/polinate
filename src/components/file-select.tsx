

export default function FileSelector() {


    return (
        <label className="file-selector-label">
            <input className="file-selector" name="fileinput" type="file"></input>

            <div className="file-selector-content">
                <div>
                    <p>húzz ide egy videófile-t vagy kattints és válassz eggyet</p>
                </div>
            </div>
        </label>
    )
}