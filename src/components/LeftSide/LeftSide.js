import React from "react";
import CopyRights from "./CopyRights";
import LeftButtons from "./LeftButtons";

const LeftSide = () => {
    return (
        <div className="m-2 shadow-lg h-screen">
            <LeftButtons/>
            <CopyRights/>
        </div>
    )
}

export default LeftSide