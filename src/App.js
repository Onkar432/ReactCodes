import { useState } from 'react';
import './App.css'; //To App.css which contains style for this app we have to include it first
import Video from './components/video';
import videoDB from './Data/data';
import PlayButton from './components/PlayButton';
import Counter from './components/Counter';
function App() {
  const [videos,setVideos] = useState(videoDB);
  return (
    <>

      <div>
        <button onClick={() => {
          setVideos([...videos, {
            id: videos.length + 1,
            title: 'Demo JS tutorial',
            views: '1M',
            time: '1 month ago',
            channel: 'Coder Dost',
            verified: true
          }]);
        }} style={{color: 'navy', backgroundColor: 'gold', height: '40px', width: '120px'}}>Add Video</button> >Add Video</button>
      </div>
      <div className='videoClass'>
        {
          videos.map(video =>
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
            >
              <PlayButton></PlayButton>
              <Counter></Counter>

            </Video>)

        }

      </div>
    </>

  );
}
export default App
