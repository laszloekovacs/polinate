
export default function Controller() {
    const channel = new BroadcastChannel("video_control")


    return (
        <div>
            <p>video controlls</p>
            <button onClick={() => channel.postMessage("play")}>play</button>
            <button onClick={() => channel.postMessage("pause")}>pause</button>
        </div>
    )
}