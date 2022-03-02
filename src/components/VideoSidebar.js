import React,{useState} from 'react'
import { Icon } from '@iconify/react';
import '../css/sidebar.css';

const VideoSidebar = ({comments, shares, likes}) => {
  const [liked, setLiked ] = useState(false);

  return (
    <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? 
                  (<Icon icon="bi:heart-fill" color="#ff0050" onClick={e => setLiked(false)}/>) : (<Icon icon="bi:heart-fill" color="white" onClick={e => setLiked(true)}/>)

                }
                <p className="videoSidebar__text">{liked ? 200 + 1 : 200}</p>
            </div>

            <div className="videoSidebar__button">
              <Icon icon="fa6-solid:comment-dots" color="white" hFlip={true} />
              <p className="videoSidebar__text">100</p>
            </div>

            <div className="videoSidebar__button">
              <Icon icon="fa-solid:share" color="white" />
              <p className="videoSidebar__text">20</p>
            </div>

    </div>
  )
}

export default VideoSidebar
