import React from "react";
import PostcardDisplay from "./PostcardDisplay.jsx";

class MainContain extends React.Component {
  constructor() {
    super();
    this.state = {
      postcard: [],
      senderName: null,
      senderLocation: null,
      recipientName: null,
      recipientEmail: null,
      message: null,
      date: null,
    };

    this.createPostcard = this.createPostcard.bind(this);
  }

  createPostcard(e) {
    console.log("SENDER NAME INPUT VALUE*****", this.senderNameInput.value);
    if (
      this.senderNameInput.value !== "" &&
      this.senderLocationInput.value !== "" &&
      this.recipientNameInput.value !== "" &&
      this.recipientEmailInput.value !== "" &&
      this.messageInput.value !== ""
    ) {
      this.setState({
        senderName: this.senderNameInput.value,
        senderLocation: this.senderLocationInput.value,
        recipientName: this.recipientNameInput.value,
        recipientEmail: this.recipientEmailInput.value,
        message: this.messageInput.value,
        date: Date.now(),
      });
      this.senderNameInput.value = "";
      this.senderLocationInput.value = "";
      this.recipientNameInput.value = "";
      this.recipientEmailInput.value = "";
      this.messageInput.value = "";
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="postcardCreator">
          <form onSubmit={this.createPostcard}>
            <input
              placeholder="Your Name"
              ref={(a) => (this.senderNameInput = a)}
            ></input>
            <br />
            <input
              placeholder="Your Location"
              ref={(b) => (this.senderLocationInput = b)}
            ></input>
            <br />
            <input
              placeholder="Recipient's Name"
              ref={(c) => (this.recipientNameInput = c)}
            ></input>
            <br />
            <input
              placeholder="Recipient's e-mail"
              ref={(d) => (this.recipientEmailInput = d)}
            ></input>
            <br />
            <input
              id="input-message"
              placeholder="Message"
              ref={(e) => (this.messageInput = e)}
            ></input>
            <br />
            <button type="submit">Create Postcard</button>
          </form>
        </div>
        <PostcardDisplay
          senderName={this.state.senderName}
          senderLocation={this.state.senderLocation}
          recipientName={this.state.recipientName}
          recipientEmail={this.state.recipientEmail}
          message={this.state.message}
          date={this.state.date}
        />
      </div>
    );
  }
}

export default MainContain;
