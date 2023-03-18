import './video.css';
function Video({ title,channel,views,time}) {
    return (
        <>
      <div className="container">
        <div>
          <img src="https://source.unsplash.com/random/400x300" alt="Random images" />
        </div>
        <div>
         <h1>{title}</h1>
        </div>
        <div className="channel">{channel}</div>
        <div className="views">{views} <span>views.</span>{time}</div>
      </div>
      </>
    );
  }
  
  export default Video;


  

// function video(props) we can use props to take a dynamic value from app.js just like pass by value in c++.
//but now we usually not use props we can directley write title in object form as({title}) ans use title where it requires