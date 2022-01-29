import React from "react";
import Header from "./components/Header/Header";
import LeftSide from "./components/LeftSide/LeftSide";
import CenterSide from "./components/CenterSide/CenterSide";
import RightSide from "./components/RightSide/RightSide";

const App = () => {
    return (
        <div className="flex">
            <div className="w-1/3">
                <LeftSide/>
            </div>
            <div className="w-1/3">
                <CenterSide/>
            </div>
            <div className="w-1/3">
                <RightSide/>
            </div>
        </div>
    )
}

export default App