import React from "react";

class PostcardDisplay extends React.Component {
  displayEntry(item) {
    return <p key={item + 1}>{item}</p>;
  }

  render() {
    let senderName = (
      <p key={this.props.senderName + 1}>{this.props.senderName}</p>
    );
    let senderLocation = (
      <p key={this.props.senderLocation + 2}>{this.props.senderLocation}</p>
    );
    let recipientName = (
      <p key={this.props.recipientName + 3}>{this.props.recipientName}</p>
    );
    let recipientEmail = (
      <p key={this.props.recipientEmail + 4}>{this.props.recipientEmail}</p>
    );
    let message = <p key={this.props.message + 5}>{this.props.message}</p>;
    let date = <p key={this.props.date + 6}>{this.props.date}</p>;

    return (
      <div className="postcardDisplayed">
        {senderName}
        {senderLocation}
        {recipientName}
        {recipientEmail}
        {message}
        {date}
      </div>
    );
  }
}

export default PostcardDisplay;
