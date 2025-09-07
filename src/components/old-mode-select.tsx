import React, { useState } from "react";

const OldModeSelect: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        } else {
            setSelectedFile(null);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedFile) {
            // Handle file upload logic here
            alert(`Selected file: ${selectedFile.name}`);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto" }}>
            <h2>Upload a Video File</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="video-upload">
                    Select a video file:
                    <input
                        id="video-upload"
                        type="file"
                        accept="video/*"
                        onChange={handleFileChange}
                        required
                        style={{ display: "block", marginTop: 8 }}
                    />
                </label>
                <button type="submit" style={{ marginTop: 16 }}>
                    Upload
                </button>
            </form>
            {selectedFile && (
                <div style={{ marginTop: 16 }}>
                    <strong>Selected file:</strong> {selectedFile.name}
                </div>
            )}
        </div>
    );
};

export default OldModeSelect;