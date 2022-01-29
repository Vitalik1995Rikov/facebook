import React from "react";
import Stories from "./Stories";
import Post from "./Post";
import AddPost from "./AddPost";

const CenterSide = () => {
    return (
        <div className="m-2 shadow-lg h-screen">
            <Stories/>
            <AddPost/>
            <Post/>
        </div>
    )
}

export default CenterSide