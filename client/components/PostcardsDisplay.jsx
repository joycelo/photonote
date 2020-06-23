import React from "react";
import PostcardDisplay from "./PostcardDisplay.jsx";

const PostcardsDisplay = (props) => {
    let postcards = [];
    for (let i = 0; i < props.postcardList.length; i++) {
        postcards.push(
            <PostcardDisplay />
        );
    }
    return (
        <div className="displayCard">
            <h4>Created Postcard</h4>
            {postcards}
        </div >
    )
};

export default PostcardsDisplay.jsx;