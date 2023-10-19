import React from 'react'
import { useState, useEffect } from 'react'
import music from "../assets/music.mp3"
const MusicIcon = () => {
  const [vibe,setVibe]=useState(false)
  const musicRef= React.createRef()
  const handleClick=()=>{
        setVibe(!vibe)
        console.log(musicRef.current)
  }
 useEffect(()=>{
    if(musicRef.current){
    
      if(vibe){
          musicRef.current.play()
        }
        else{
            musicRef.current.pause()
        }
}
 })
  


    return (
    <div onClick={handleClick} className='text-white flex gap-[2px]  items-center [&>*]:w-[2px]'>
      <audio ref={musicRef} type='audio/mp3' src={music}></audio>
      <div className={vibe?"music bg-white ":"bg-white h-2"}></div>
      <div className={vibe?"music1 bg-white":"bg-white h-2"}></div>
      <div className={vibe?"music2 bg-white":"bg-white h-2"}></div>
      <div className={vibe?"music3 bg-white":"bg-white h-2"}></div>
      <div className={vibe?"music4 bg-white ":"bg-white h-2"}></div>
    </div>
  )
}

export default MusicIcon
