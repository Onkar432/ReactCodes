import './App.css'; //To App.css which contains style for this app we have to include it first
import Video from './components/video';
import videos from './Data/data'
function App() {
  return (
    <>
      <h1>Hello</h1>

      <div className='videoClass'>
        {/* By this way we are repeating the code let suppose there are 100 components
        then we need to write the component 100 time. */}
        {/* <Video verified={true} title="React js codes " channel="LearnCodes" views="125k" time="2 months ago"></Video>

        <Video verified={false} title="Node js codes " channel="LearnCodes" views="545k" time="6 months ago"></Video>

        <Video verified={false} title="Mongo DB codes " channel="LearnCodes" views="55k" time="1 months ago"></Video>

        <Video verified={true} title="Express Js codes " channel="LearnCodes" views="525k" time="7 months ago"></Video> */}

        {/* To overcome from this problem of repetation we are us array of objects and just refer the values from it and use it.as follow */}
        {
        videos.map(video=><Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>)
        }
      </div>

    </>
  );
}
export default App