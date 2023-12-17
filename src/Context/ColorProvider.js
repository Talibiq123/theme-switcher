import React, { useState } from "react";
import ColorContext from "./ColorContext";

function ColorProvider(props) {
    let [style, setStyle] = useState({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black"
    });

    return (
        <div>
            <ColorContext.Provider value={{style: style}}>
                {props.children}
            </ColorContext.Provider>
        </div>
    );
}

export default ColorProvider;