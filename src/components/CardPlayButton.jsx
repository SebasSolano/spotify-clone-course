import { Play, Pause } from "./Player"
import { usePlayerStore } from "@/store/PlayerStore"

export function CardPlayButton({id}){
    
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

    const handleClick = async () => {
        await setCurrentMusic({
            playlist: {
                id
            }
        })

        setIsPlaying(!isPlaying)               
        
    }

    const isPlayingPlayList = isPlaying && currentMusic?.playlist.id === id

    return(
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4">
            { isPlayingPlayList ? <Pause /> : <Play />}
        </button>
    )
}