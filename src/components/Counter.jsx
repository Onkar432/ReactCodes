import { useState } from "react";
function Counter() {
    const [number, setNumber] = useState(0);
    function handleClick() {
        //number=number+1;-->this will not render any ui just add and prints in console
        //to show the UI we use state 
        // setNumber(number+1)
        // setNumber(number+1)
        // setNumber(number+1)---->No effect overall 
        // setNumber(number+1)
        setNumber(number => number + 1)
        console.log(number)
    }
    return (
        <>
            <h1 style={{ color: 'White' }}>{number}</h1>
            <button onClick={handleClick} style={{ color: 'red', backgroundColor: 'pink', height: '40px', width: '120px' }}>Like Me</button >
                           
        </>
    )
}
export default Counter
