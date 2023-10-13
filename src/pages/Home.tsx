import { useState } from "react";
import Homepage from "../components/Home";

export default function Home() {
  const [showHomepage, setShowHomepage] = useState(false);

  return (
    <div className="landing">
      {showHomepage ? <Homepage /> :
        <img src="/img/seal.png" alt="LESCSS Seal" className={`seal ${showHomepage ? 'fade' : ''}`} onClick={() => { setShowHomepage(true) }} />
      }

      <video src="/video/loop.mp4" autoPlay={true} loop={true} controls={false} muted={true} className='fullscreen'></video>
    </div>
  )
}


