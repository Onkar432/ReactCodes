import './PlayButton.css';
function PlayButton(){
   
    return(
        <>
            {/* Event Handler function-->As we clicked on button it will show msg in console */} 
             <button className="btn" onClick={()=>console.log("Play is clicked")}>Play</button>

        </>
    )
}
export default PlayButton
