import React from "react";

const PostcardDisplay = (props) => {
    return (
        <div className="postcard">
            <div id="yourName">
                From: {props.yourName}, in {props.cityName}
            </div>
            <div id="recipientName">
                To: {props.recipientName}
            </div>
            <div id="message">
                To: {props.message}
            </div>
        </div>
    )
}

export default PostcardDisplay;