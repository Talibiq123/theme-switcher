import React, { useContext } from "react";
import ColorContext from "../Context/ColorContext";

function Hello() {
    const {style, blackMode, blueMode, whiteMode} = useContext(ColorContext)

    return (
        <div>
        <div style={{
            color: style.color,
            backgroundColor: style.backgroundColor,
            border: style.border,
            textAlign: style.textAlign
        }}>
            <h1>Hey, Theme Switcher is developing...Have Patience.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, nisl ac aliquet euismod, eros erat varius orci, nec vestibulum odio diam
               in justo. Integer auctor urna in velit vestibulum, nec tristique leo dapibus. Aliquam erat volutpat. Suspendisse potenti. Fusce 
               ullamcorper sem in odio varius, vitae bibendum elit feugiat. Maecenas ut mauris at tortor cursus gravida. Quisque vel tristique 
               purus. Vivamus aliquet purus ac metus tincidunt, nec tincidunt mauris convallis. Integer ullamcorper, velit a tincidunt vehicula,
               metus metus tincidunt eros, id bibendum exvelit sit amet mauris. Sed dapibus scelerisque felis, eget consequat metus tempus eget. Suspendisse potenti.
            </p>
        </div>
        <div>
                <button onClick={whiteMode}>White Mode</button>
                <button onClick={blackMode}>Dark Mode</button>
                <button onClick={blueMode}>Blue Mode</button>
            </div>
            </div>
    )
}

export default Hello;