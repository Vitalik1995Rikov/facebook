import React from "react";
import Contacts from "./Contacts";
import Suggested from "./Suggested";

const RightSide = () => {
    return (
        <div className="m-2 shadow-lg h-screen">
            <Suggested/>
            <Contacts/>
        </div>
    )
}

export default RightSide