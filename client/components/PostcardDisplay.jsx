import React from "react";
// import { urlencoded } from "express";
// import html2canvas from "html2canvas";
// const puppeteer = require("puppeteer");

class PostcardDisplay extends React.Component {
  render() {
    let senderName = (
      <div key={this.props.senderName + 1}>
        <span id="from-text">FROM</span> {this.props.senderName}
      </div>
    );
    let senderLocation = (
      <div key={this.props.senderLocation + 2}>
        <span id="currently-in-text">CURRENTLY IN</span>{" "}
        {this.props.senderLocation}
      </div>
    );
    let recipientNameEmail = (
      <div key={this.props.recipientName + 3}>
        <span id="to-text">TO</span> {this.props.recipientName} [
        {this.props.recipientEmail}]:
      </div>
    );
    // let recipientEmail = (
    //   <div key={this.props.recipientEmail + 4}>{this.props.recipientEmail}</div>
    // );
    let message = <div key={this.props.message + 5}>{this.props.message}</div>;
    let date = <div key={this.props.date + 6}>{this.props.date}</div>;
    let temperature = (
      <div key={this.props.temperature + 7}>{this.props.temperature}</div>
    );

    console.log("TEMPERATURE******", temperature);

    // Images:
    // Bangkok, Thailand: https://www.fodors.com/wp-content/uploads/2019/04/HERO_BangkokTips_Hero_shutterstock_367503629.jpg
    // Hong Kong: https://i.redd.it/doosfj9y59341.jpg
    // London, England: https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555943130/production/city/hero_image_11_1555943130.jpg
    // Macau: https://www.casino.org/news/wp-content/uploads/2020/03/macau2-1.jpg
    // Singapore: https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Singapore/garden-in-the-city-singapore.jpg
    // Paris, France: https://d1bvpoagx8hqbg.cloudfront.net/originals/erasmus-experience-paris-france-marie-nadine-1e9930edd5b129d52796b8c08e1fa4c1.jpg
    // Dubai, UAE: https://13gg5v3wy5801g9zj915lxxt-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/Dubai-downtown.jpg
    // New York City, NY: https://res.cloudinary.com/gray-malin/image/upload/c_scale,w_1000,q_80/gray-malin/products/Central_Park__New_York_City.jpg?updated=1569533668

    console.log("THISPROPSSENDERLOCATION*****", this.props.senderLocation);

    let scenicImage;
    if (this.props.senderLocation === "Hong Kong") {
      scenicImage = "https://i.redd.it/doosfj9y59341.jpg";
    } else if (this.props.senderLocation === "Bangkok") {
      scenicImage =
        "https://www.fodors.com/wp-content/uploads/2019/04/HERO_BangkokTips_Hero_shutterstock_367503629.jpg";
    } else if (this.props.senderLocation === "London") {
      scenicImage =
        "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555943130/production/city/hero_image_11_1555943130.jpg";
    } else if (this.props.senderLocation === "Macau") {
      scenicImage =
        "https://www.casino.org/news/wp-content/uploads/2020/03/macau2-1.jpg";
    } else if (this.props.senderLocation === "Singapore") {
      scenicImage =
        "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Singapore/garden-in-the-city-singapore.jpg";
    } else if (this.props.senderLocation === "Paris") {
      scenicImage =
        "https://d1bvpoagx8hqbg.cloudfront.net/originals/erasmus-experience-paris-france-marie-nadine-1e9930edd5b129d52796b8c08e1fa4c1.jpg";
    } else if (this.props.senderLocation === "Dubai") {
      scenicImage =
        "https://13gg5v3wy5801g9zj915lxxt-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/Dubai-downtown.jpg";
    } else if (this.props.senderLocation === "New York City") {
      scenicImage =
        "https://res.cloudinary.com/gray-malin/image/upload/c_scale,w_1000,q_80/gray-malin/products/Central_Park__New_York_City.jpg?updated=1569533668";
    }

    // let scenicImage;
    // if (this.props.senderLocation === "Hong Kong") {
    //   scenicImage = "../pictures/HongKong.jpg";
    // } else if (this.props.senderLocation === "Bangkok") {
    //   scenicImage = "../pictures/Bangkok.jpg";
    // } else if (this.props.senderLocation === "London") {
    //   scenicImage = "../pictures/London.jpg";
    // } else if (this.props.senderLocation === "Macau") {
    //   scenicImage = "../pictures/Macau.jpg";
    // } else if (this.props.senderLocation === "Singapore") {
    //   scenicImage = "../pictures/Singapore.png";
    // } else if (this.props.senderLocation === "Paris") {
    //   scenicImage = "../pictures/Paris.jpg";
    // } else if (this.props.senderLocation === "Dubai") {
    //   scenicImage = "../pictures/Dubai.jpg";
    // } else if (this.props.senderLocation === "New York City") {
    //   scenicImage = "../pictures/NewYorkCity.jpg";
    // }

    return (
      <div className="postcardDisplayed">
        {/* From: {senderName}, in {senderLocation}
        To: {recipientName}, {recipientEmail}
        Message: {message}
        Date: {date} */}
        <div id="pre-text">
          Fill out all fields below to send an e-postcard!
        </div>
        <div id="date">{date}</div>
        <br />
        <div id="left-side">
          <div id="left-text">
            <div id="recipientName">{recipientNameEmail}</div>
            <br />
            {/* <div id="recipientName">{recipientNameEmail}</div> */}

            {/* <div id="recipientEmail">{recipientEmail}</div> */}
            <div id="message">{message}</div>
            <br />
            <div id="senderName">{senderName}</div>
            <div id="senderLocation">{senderLocation}</div>
          </div>
        </div>
        <div id="vertical-line"></div>
        <div id="right-side">
          <div id="right-text">
            {/* <div id="recipientName">{recipientNameEmail}</div> */}
          </div>
        </div>
        <img src={scenicImage} id="addedImage" />
      </div>
    );
  }
}

export default PostcardDisplay;
