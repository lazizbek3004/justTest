import React, { useState } from "react";

function MyComponent(){
    const [isOver, setIsOver] = useState(false)

    function MouseOver(){
        setIsOver(i => i = true)
    }

    function MouseOut(){
        setIsOver(i => i = false)
    }

    return(<>
        <div className="bigBox">
            <div className="box">
                <p>hello world</p>
            </div>
        </div>
    </>);
}

export default MyComponent