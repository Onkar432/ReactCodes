import './App.css'; //To App.css which contains style for this app we have to include it first
import Video from './components/video';
import videos from './Data/data'
import PlayButton from './components/PlayButton';
function App() {
  return (
    <>
       <div className='videoClass'>
        {
        videos.map(video=>
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
           
        ><PlayButton /></Video>)
       
        }
      </div>
 
  
  

 </>
 
  );
}
export default App