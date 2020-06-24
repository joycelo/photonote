import React from "react";
import PostcardDisplay from "./PostcardDisplay.jsx";

class MainContain extends React.Component {
  constructor() {
    super();
    this.state = {
      senderName: null,
      senderEmail: null,
      senderLocation: null,
      recipientName: null,
      recipientEmail: null,
      message: null,
      date: null,
      currentTemperature: null,
      image: null,
    };

    this.createPostcard = this.createPostcard.bind(this);
    this.loadFile = this.loadFile.bind(this);
  }

  //Accuweather keys:
  //Bangkok, Thailand: 318849
  //London, England: 328328
  //Paris, France: 623
  //New York City, New York: 349727
  //Dubai, UAD: 323091
  //Hong Kong: 1123655
  // Macau: 60090
  // Singapore:300597

  componentDidMount() {
    fetch(
      "http://dataservice.accuweather.com/currentconditions/v1/349727?apikey=ndkujYDJO1SNUaoHApzNT1O2Hjq22LRv"
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          temperature:
            data[0].Temperature.Imperial.Value +
            data[0].Temperature.Imperial.Unit,
        });
        console.log("THIS STATE URLS*****", data[0].Temperature.Imperial);
        console.log(
          "THIS STATE URLS*****",
          data[0].Temperature.Imperial.Value + data[0].Temperature.Imperial.Unit
        );
      })
      // JML: add .catch to cover errors, for best practice
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  createPostcard(e) {
    console.log("SENDER NAME INPUT VALUE*****", this.senderNameInput.value);
    if (
      this.senderNameInput.value !== "" &&
      this.senderEmailInput.value !== "" &&
      this.senderLocationInput.value !== "" &&
      this.recipientNameInput.value !== "" &&
      this.recipientEmailInput.value !== "" &&
      this.messageInput.value !== ""
    ) {
      //   let cityKey;
      //   console.log(
      //     "THIS SENDERLOCATION INPUT VALUE*****",
      //     this.senderLocation.Input.value
      //   );
      //   if (this.senderLocation.Input.value === "Hong Kong") {
      //     cityKey = 1123655;
      //   } else if (this.senderLocation.Input.value === "Bangkok") {
      //     cityKey = 318849;
      //   } else if (this.senderLocation.Input.value === "London") {
      //     cityKey = 328328;
      //   } else if (this.senderLocation.Input.value === "Macau") {
      //     cityKey = 60090;
      //   } else if (this.senderLocation.Input.value === "Singapore") {
      //     cityKey = 300597;
      //   } else if (this.senderLocation.Input.value === "Paris") {
      //     cityKey = 623;
      //   } else if (this.senderLocation.Input.value === "Dubai") {
      //     cityKey = 323091;
      //   } else if (this.senderLocation.Input.value === "New York City") {
      //     cityKey = 349727;
      //   }

      //   fetch(
      //     `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=ndkujYDJO1SNUaoHApzNT1O2Hjq22LRv`
      //   )
      //     .then((data) => data.json())
      //     .then((data) => {
      this.setState({
        // currentTemperature: data[0].Temperature.Imperial.Value,
        senderName: this.senderNameInput.value,
        senderEmail: this.senderEmailInput.value,
        senderLocation: this.senderLocationInput.value,
        recipientName: this.recipientNameInput.value,
        recipientEmail: this.recipientEmailInput.value,
        message: this.messageInput.value,
        date: new Date(Date.now()).toString(),
      });
      //   console.log("THIS STATE URLS*****", data[0].Temperature.Imperial);
      //   console.log(
      //     "THIS STATE URLS*****",
      //     data[0].Temperature.Imperial.Value + data[0].Temperature.Imperial.Unit
      //   );

      //   this.setState({
      //     senderName: this.senderNameInput.value,
      //     senderLocation: this.senderLocationInput.value,
      //     recipientName: this.recipientNameInput.value,
      //     recipientEmail: this.recipientEmailInput.value,
      //     message: this.messageInput.value,
      //     date: new Date(Date.now()).toString(),
      //   });
      // })
      // // JML: add .catch to cover errors, for best practice
      // .catch((err) => {
      //   console.log("Error:", err);
      // });

      this.senderNameInput.value = "";
      this.senderEmailInput.value = "";
      this.senderLocationInput.value = "";
      this.recipientNameInput.value = "";
      this.recipientEmailInput.value = "";
      this.messageInput.value = "";
    }
    e.preventDefault();
  }

  loadFile(e) {
    let image = document.getElementById("output");
    image.src = URL.createObjectURL(e.target.files[0]);
    this.setState({
      image: image.src,
    });
    console.log("THIS STATE******", this.state);
  }

  render() {
    return (
      <div className="mainContainer">
        <PostcardDisplay
          senderName={this.state.senderName}
          senderEmail={this.state.senderEmail}
          senderLocation={this.state.senderLocation}
          recipientName={this.state.recipientName}
          recipientEmail={this.state.recipientEmail}
          message={this.state.message}
          date={this.state.date}
          currentTemperature={this.state.temperature}
          image={this.state.image}
        />
        <div className="postcardCreator">
          <form onSubmit={this.createPostcard}>
            <input
              placeholder="YOUR NAME"
              ref={(a) => (this.senderNameInput = a)}
            ></input>
            <br />
            <input
              placeholder="YOUR E-MAIL"
              ref={(b) => (this.senderEmailInput = b)}
            ></input>
            <br />
            <input
              placeholder="YOUR LOCATION (CITY)"
              ref={(c) => (this.senderLocationInput = c)}
            ></input>
            <br />
            <input
              placeholder="RECIPIENT'S NAME"
              ref={(d) => (this.recipientNameInput = d)}
            ></input>
            <br />
            <input
              placeholder="RECIPIENT'S E-MAIL"
              ref={(e) => (this.recipientEmailInput = e)}
            ></input>
            <br />
            <textarea
              name="message"
              rows="10"
              cols="30"
              placeholder="MESSAGE"
              ref={(f) => (this.messageInput = f)}
            ></textarea>
            <br />
            <input
              type="file"
              accept="image/*"
              name="image"
              id="file"
              onChange={(g) => (this.imageFile = g)}
              style={{ display: "none" }}
            ></input>
            <p>
              <label
                for="file"
                style={{ cursor: "pointer" }}
                id="upload-image-button"
              >
                Upload Image (Optional)
              </label>
            </p>
            <br />
            <button type="submit" id="send-postcard-button">
              Send Postcard
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default MainContain;
