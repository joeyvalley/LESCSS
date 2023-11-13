import { useState } from "react";
import Homepage from "../components/Home";

export default function Home() {
  const [showHomepage, setShowHomepage] = useState(false);

  return (
    <div className="landing">
      {showHomepage ? <Homepage /> :
        <video onClick={() => { setShowHomepage(true) }} src="/video/loop.mp4" autoPlay={true} loop={true} controls={false} muted={true} className='fullscreen'></video>
      }
    </div>
  )
}


