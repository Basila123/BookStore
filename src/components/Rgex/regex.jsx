import React from "react";
const Regex=(WrappedComponent)=>{

function Regex(props){

    const [count,setCount]=React.useState(0)
    const increment=()=>{
        setCount(count+1)
    }

    return (
        <div>
            <WrappedComponent count={count} increment={increment}/>
        </div>
    )
}
return Counter
}
export default Counter