import React, { useContext } from "react";
import ColorContext from "../Context/ColorContext";

function Hello() {
    const {style} = useContext(ColorContext)

    return (
        <div>
            <h1>Hey, Theme Switcher is developing...Have Patience.</h1>
            <p>
                lorem ipsum dolor sit amet, consectetur adip lorem conv aptur et lorem conv lorem
                conv lorem lorem ipsum dolor sit amet, consectetur adip lorem conv aptur et lorem conv lorem
                conv lorem lorem ipsum dolor sit amet, consectetur adip lorem conv aptur et lorem conv
                lorem conv lorem lorem ipsum dolor sit amet, consectetur adip lorem conv aptur et lorem conv lorem conv lorem
            </p>
        </div>
    )
}

export default Hello;