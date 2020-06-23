import React from "react";

const PostcardCreator = (props) => (
    <div className="postcardCreator">
        <div style={{ fontWeight: "bold" }} id="create-text">Create New Postcard:</div>
        <div>
            <form id="form">
                <p>
                    <span>Your Name:</span>
                    <input id="yourNameField" placeholder="Your Name Here" type="text" name="yourName" value={props.input} onChange={props.handleInput}></input>
                </p>
                <p>
                    <span>Your Location:</span>
                    <input id="locationField" placeholder="City Name Here" type="text" name="cityName" value={props.input} onChange={props.handleInput}></input>
                </p>
                <p>
                    <span>Recipient's Name:</span>
                    <input id="recipientNameField" placeholder="Recipient's Name Here" type="text" name="recipientName" value={props.input} onChange={props.handleInput}></input>
                </p>
                <p>
                    <span>Your Message:</span>
                    <input id="messageField" placeholder="Your Message Here" type="text" name="message" value={props.input} onChange={props.handleInput}></input>
                </p>
                <p>
                    <button type="submit" value="Create Postcard" onClick={props.handleCreatePostcard}>Create Postcard</button>
                </p>
                <hr />
            </form>
        </div>
    </div>
);

export default PostcardCreator;