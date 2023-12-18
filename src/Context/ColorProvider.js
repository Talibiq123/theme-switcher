import React, { useState } from "react";
import ColorContext from "./ColorContext";


let defaultStyle = {
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
    fontFamily: "Helvetica"
}
function ColorProvider(props) {
    let [style, setStyle] = useState(defaultStyle);

    return (
            <ColorContext.Provider value={
                {
                    style: style,
                    blackMode: () => setStyle({...style,
                        color: "white",
                        backgroundColor: "black",
                        border: "1px solid white",
                        textAlign: "center"
                    }),
                    blueMode: () => setStyle({...style,
                        color: "green",
                        backgroundColor: "#F5F5DC",
                        border: "1px solid green",
                        textAlign: "right"
                    }),
                    whiteMode: () => setStyle(defaultStyle
                    ),
                }
            }>
                {props.children}
            </ColorContext.Provider>
    );
}

export default ColorProvider;