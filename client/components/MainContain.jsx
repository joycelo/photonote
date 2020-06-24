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
      weather: null,
      image: null,
    };

    this.createPostcard = this.createPostcard.bind(this);
    // this.loadFile = this.loadFile.bind(this);
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

  //   componentDidMount() {
  //     fetch(
  //       "http://dataservice.accuweather.com/currentconditions/v1/349727?apikey=ndkujYDJO1SNUaoHApzNT1O2Hjq22LRv"
  //     )
  //       .then((data) => data.json())
  //       .then((data) => {
  //         this.setState({
  //           weather:
  //             data[0].WeatherText +
  //             " @ " +
  //             data[0].Temperature.Imperial.Value +
  //             data[0].Temperature.Imperial.Unit,
  //         });
  //         console.log("Weather Text*****", data[0].WeatherText);
  //         console.log(
  //           "THIS STATE URLS*****",
  //           data[0].Temperature.Imperial.Value + data[0].Temperature.Imperial.Unit
  //         );
  //       })
  //       // JML: add .catch to cover errors, for best practice
  //       .catch((err) => {
  //         console.log("Error:", err);
  //       });
  //   }

  //   //adding new one:
  createPostcard(e) {
    console.log("SENDER NAME INPUT VALUE*****", this.senderNameInput.value);
    e.preventDefault();
    if (
      this.senderNameInput.value !== "" &&
      this.senderEmailInput.value !== "" &&
      this.senderLocationInput.value !== "" &&
      this.recipientNameInput.value !== "" &&
      this.recipientEmailInput.value !== "" &&
      this.messageInput.value !== ""
    ) {
      let cityKey;
      if (this.senderLocationInput.value === "Hong Kong") {
        cityKey = 1123655;
      } else if (this.senderLocationInput.value === "Bangkok") {
        cityKey = 318849;
      } else if (this.senderLocationInput.value === "London") {
        cityKey = 328328;
      } else if (this.senderLocationInput.value === "Macau") {
        cityKey = 60090;
      } else if (this.senderLocationInput.value === "Singapore") {
        cityKey = 300597;
      } else if (this.senderLocationInput.value === "Paris") {
        cityKey = 623;
      } else if (this.senderLocationInput.value === "Dubai") {
        cityKey = 323091;
      } else if (this.senderLocationInput.value === "New York City") {
        cityKey = 349727;
      }
      //Note: May need to refresh accuweather key (if exceeded use or duration allowed for use).
      fetch(
        "http://dataservice.accuweather.com/currentconditions/v1/" +
          cityKey +
          "?apikey=a98UvM75zIKzhs60giSdtvHaiGLA7AhN"
      )
        .then((data) => data.json())
        .then((data) => {
          this.setState({
            weather:
              "where it's " +
              data[0].WeatherText.toLowerCase() +
              " @ " +
              data[0].Temperature.Imperial.Value +
              data[0].Temperature.Imperial.Unit,
            senderName: this.senderNameInput.value,
            senderEmail: this.senderEmailInput.value,
            senderLocation: this.senderLocationInput.value,
            recipientName: this.recipientNameInput.value,
            recipientEmail: this.recipientEmailInput.value,
            message: this.messageInput.value,
            date: new Date(Date.now()).toString(),
          });
          console.log("Weather Text*****", data[0].WeatherText);
          console.log(
            "THIS STATE URLS*****",
            data[0].Temperature.Imperial.Value +
              data[0].Temperature.Imperial.Unit
          );
        })
        .then((data) => {
          window.open(
            "mailto:" +
              this.state.recipientEmail +
              "?subject=Postcard%20Created%20Just%20For%20" +
              this.state.recipientName +
              "!%20(From:%20" +
              this.state.senderName +
              ")&body=[Note%20to%20sender:%20screenshot%20and%20paste%20postcard%20here]"
          );
        })
        .then((data) => {
          // if (
          //   this.senderNameInput.value !== "" &&
          //   this.senderEmailInput.value !== "" &&
          //   this.senderLocationInput.value !== "" &&
          //   this.recipientNameInput.value !== "" &&
          //   this.recipientEmailInput.value !== "" &&
          //   this.messageInput.value !== ""
          // ) {
          //   let cityKey;
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
          //     `http://dataservice.accuweather.com/currentconditions/v1/349727?apikey=ndkujYDJO1SNUaoHApzNT1O2Hjq22LRv`
          //   )
          //     .then((data) => data.json())
          //     .then((data) => {
          //       console.log("DATA*****", data);
          //   this.setState({
          //     senderName: this.senderNameInput.value,
          //     senderEmail: this.senderEmailInput.value,
          //     senderLocation: this.senderLocationInput.value,
          //     recipientName: this.recipientNameInput.value,
          //     recipientEmail: this.recipientEmailInput.value,
          //     message: this.messageInput.value,
          //     date: new Date(Date.now()).toString(),
          //   });
          //     })
          //     .then(() => {
          this.senderNameInput.value = "";
          this.senderEmailInput.value = "";
          this.senderLocationInput.value = "";
          this.recipientNameInput.value = "";
          this.recipientEmailInput.value = "";
          this.messageInput.value = "";
        })
        .then((data) => {
          let image = document.getElementById("output");
          console.log("IMAGE*****", image);
          image.src = URL.createObjectURL(event.target.files[0]);
          console.log("IMAGE SRC", image.src);
        });

      //     })
      //     // JML: add .catch to cover errors, for best practice
      //     .catch((err) => {
      //       console.log("Error:", err);
      //     });
      // }
    }
  }

  //COMMENTING OUT*****
  //   createPostcard(e) {
  //     console.log("SENDER NAME INPUT VALUE*****", this.senderNameInput.value);
  //     if (
  //       this.senderNameInput.value !== "" &&
  //       this.senderEmailInput.value !== "" &&
  //       this.senderLocationInput.value !== "" &&
  //       this.recipientNameInput.value !== "" &&
  //       this.recipientEmailInput.value !== "" &&
  //       this.messageInput.value !== ""
  //     ) {
  //       //   let cityKey;
  //       //   console.log(
  //       //     "THIS SENDERLOCATION INPUT VALUE*****",
  //       //     this.senderLocation.Input.value
  //       //   );
  //       //   if (this.senderLocation.Input.value === "Hong Kong") {
  //       //     cityKey = 1123655;
  //       //   } else if (this.senderLocation.Input.value === "Bangkok") {
  //       //     cityKey = 318849;
  //       //   } else if (this.senderLocation.Input.value === "London") {
  //       //     cityKey = 328328;
  //       //   } else if (this.senderLocation.Input.value === "Macau") {
  //       //     cityKey = 60090;
  //       //   } else if (this.senderLocation.Input.value === "Singapore") {
  //       //     cityKey = 300597;
  //       //   } else if (this.senderLocation.Input.value === "Paris") {
  //       //     cityKey = 623;
  //       //   } else if (this.senderLocation.Input.value === "Dubai") {
  //       //     cityKey = 323091;
  //       //   } else if (this.senderLocation.Input.value === "New York City") {
  //       //     cityKey = 349727;
  //       //   }

  //       //   fetch(
  //       //     `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=ndkujYDJO1SNUaoHApzNT1O2Hjq22LRv`
  //       //   )
  //       //     .then((data) => data.json())
  //       //     .then((data) => {
  //       this.setState({
  //         // currentTemperature: data[0].Temperature.Imperial.Value,
  //         senderName: this.senderNameInput.value,
  //         senderEmail: this.senderEmailInput.value,
  //         senderLocation: this.senderLocationInput.value,
  //         recipientName: this.recipientNameInput.value,
  //         recipientEmail: this.recipientEmailInput.value,
  //         message: this.messageInput.value,
  //         date: new Date(Date.now()).toString(),
  //       });
  //       //   console.log("THIS STATE URLS*****", data[0].Temperature.Imperial);
  //       //   console.log(
  //       //     "THIS STATE URLS*****",
  //       //     data[0].Temperature.Imperial.Value + data[0].Temperature.Imperial.Unit
  //       //   );

  //       //   this.setState({
  //       //     senderName: this.senderNameInput.value,
  //       //     senderLocation: this.senderLocationInput.value,
  //       //     recipientName: this.recipientNameInput.value,
  //       //     recipientEmail: this.recipientEmailInput.value,
  //       //     message: this.messageInput.value,
  //       //     date: new Date(Date.now()).toString(),
  //       //   });
  //       // })
  //       // // JML: add .catch to cover errors, for best practice
  //       // .catch((err) => {
  //       //   console.log("Error:", err);
  //       // });

  //       this.senderNameInput.value = "";
  //       this.senderEmailInput.value = "";
  //       this.senderLocationInput.value = "";
  //       this.recipientNameInput.value = "";
  //       this.recipientEmailInput.value = "";
  //       this.messageInput.value = "";
  //     }
  //     e.preventDefault();
  //   }

  //   loadFile(e) {
  //     let image = document.getElementById("output");
  //     image.src = URL.createObjectURL(e.target.files[0]);
  //     this.setState({
  //       image: image.src,
  //     });
  //     console.log("THIS STATE******", this.state);
  //   }

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
          weather={this.state.weather}
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
              style={{ display: "none" }}
            ></input>
            <p>
              <label
                for="file"
                style={{ cursor: "pointer" }}
                id="upload-image-button"
              >
                Add Image (Optional)
              </label>
            </p>
            <br />
            <button type="submit" id="send-postcard-button">
              Create Postcard
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default MainContain;
