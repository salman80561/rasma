import React from "react";
import WelCome from "./Welcome";


const Root = (props) => {
    return (<>
        <WelCome />
        <main>
            {props.children}
        </main>
    </>
    )
}
export default Root;