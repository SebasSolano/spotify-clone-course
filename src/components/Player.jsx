import PlayIcon from '@/icons/Play.astro'
import PauseIcon from '@/icons/Pause.astro'

export function Player(){
    return(
        <div className="flex flex-row justify-between w-full px-4 z-50">
            <div className=''>
                CurrentSong ...
            </div>
            
            <div className=''>
                Reproductor
            </div>

            <div className=''>
                Volumen
            </div>
        </div>
    )
}
