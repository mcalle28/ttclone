import React,{useState,useRef} from 'react'
import '../css/video.css';
//import VideoFooter from "./VideoFooter"
//import VideoSidebar from './VideoSidebar';

const Video = () => {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }


  return (
    <div className="video">
            <video className="video__player" ref={videoRef} onClick={onVideoPress}  src="https://v16-webapp.tiktok.com/c9a91f3418e4648164426f14173d9bf8/621e25ef/video/tos/useast2a/tos-useast2a-ve-0068c002/7ff34158b58e4a05bbd8091a2403cd90/?a=1988&br=5722&bt=2861&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7Th49hcDXq&l=2022030107545501022307116121188E46&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anM6Zjs6Zmd2OjMzNzczM0ApO2g5Z2g7O2Q7NzUzMzg4N2dtNGdqcjRnZjBgLS1kMTZzczItNV8uYi0xMDZhNV5eMWA6Yw%3D%3D&vl=&vr="></video>
            {/* <VideoFooter */}
            {/* <VideoSidebar/> */}
    </div>
  )
}

export default Video
