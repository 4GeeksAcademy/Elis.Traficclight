import React, { useState } from "react"


const TrafficLight = () => {

   
    const [selected, setSelected] = useState("red")
    const cambioColor = (color) => {
        setSelected(color);
    
    }

    return (
        <div className="contenedor">
            <div className="p-box"></div>
            <div className="box-light">
                
                <div 
                className={`red ${selected == "red" ? "light-on" : "" }`}
                onClick={()=>cambioColor("red")}
                ></div>

                <div className={`yellow ${selected == "yellow" ? "light-on" : "" }`}
                onClick={()=>cambioColor("yellow")}
                ></div>

                <div className={`green ${selected == "green" ? "light-on" : "" }`}
                onClick={()=>cambioColor("green")}
                ></div>
            </div>
            <button className="btn btn-success">Encender</button>
        
        </div>
    )
}

export default TrafficLight;