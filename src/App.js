import React from "react";
import Header from "./components/Header/Header";
import LeftSide from "./components/LeftSide/LeftSide";
import CenterSide from "./components/CenterSide/CenterSide";
import RightSide from "./components/RightSide/RightSide";

const App = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="flex">
                <div className="w-1/4">
                    <LeftSide/>
                </div>
                <div className="w-1/2">
                    <CenterSide/>
                </div>
                <div className="w-1/4">
                    <RightSide/>
                </div>
            </div>
        </div>
    )
}

export default App