import './video.css';
function Video({ title,channel,views,time,verified,children}) {
    return (
        <>
      <div className="container">
        <div>
          <img src="https://source.unsplash.com/random/400x300" alt="Random images" />
        </div>
        <div>
         <h1 className='title'>{title}</h1>
        </div>
       {/* We are applying conditions here, if verified is true the tich is present else not.
       verified is a props taking from app.js video object NOTE:The tick mark is takem by emogi site and just copied*/}
        {/* {verified ?<div className="channel">{channel}✅</div>:<div className="channel">{channel}</div>} */}

        {/* Now in above code we are using checking condition twice.But react is DoNotRepeatYourself to stop repetation we can just apply condition on emogi as follows */}
        <div className="channel">{channel}{verified ?'✅':null}</div>

        <div className="views">{views} <span>views.</span>{time}</div>
        <div>
     { children}
      </div>
      </div>
     
      </>
    );
  }
  
  export default Video;


  

// function video(props) we can use props to take a dynamic value from app.js just like pass by value in c++.
//but now we usually not use props we can directley write title in object form as({title}) ans use title where it requires