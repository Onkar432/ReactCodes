import './App.css'; //To App.css which contains style for this app we have to include it first
import Video from './components/video';
function App() {
  return (
    <>
   <h1>Hello</h1>

   <div className='videoClass'>

   <Video  title="React js codes " channel="LearnCodes" views="125k" time="2 months ago"></Video>
   <Video  title="Node js codes " channel="LearnCodes" views="545k" time="6 months ago"></Video>

   </div>

   </>
  );
  }
export default App