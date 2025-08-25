import { useEffect, useRef } from "react"

const Player = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const channel = new BroadcastChannel("video_control")

    useEffect(() => {
        channel.onmessage = (event) => {

            if (videoRef.current) {
                const command = event.data
                switch (command) {
                    case "play":
                        videoRef.current.play()
                        break
                    case "pause":
                        videoRef.current.pause()
                        break

                    default:
                        console.log("unknown command")
                }
            }
        }
    }, [])


    return (
        <div>
            <video ref={videoRef} className="screen">
                <source src="hero-1.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Player