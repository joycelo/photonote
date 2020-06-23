import React, { Component } from "react";
import { connect } from "react-redux";

//child component
import PostcardContainer from "./PostcardContainer.jsx";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="outerBox">
                    <h1 id="header">E-POSTCARDS GALORE!</h1>
                    <PostcardContainer />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
