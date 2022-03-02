import React from 'react';
import './App.css';
import Video from './components/Video';
import VideoFooter from './components/VideoFooter';
import VideoSidebar from './components/VideoSidebar';

function App() {
  return (
    <div className="container">
      <div className="l2">
        <h1>TikTok Clone App</h1>
      </div>
      <div className="cellphone">
        <Video />
      </div>
      <VideoSidebar />
      <VideoFooter  />
    </div>
  );
}
export default App;