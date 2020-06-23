import React, { Component } from "react";
import { connect } from "react-redux";

//import actions
import * as actions from "../actions/actions";

//import child components
import PostcardCreator from "../components/PostcardCreator.jsx";
import PostcardsDisplay from "../components/PostcardsDisplay.jsx";

//state
const mapStateToProps = (state) => {
    return {
        //NEED TO FILL THIS OUT FOR STATE
    }
}

const mapDispatchToProps = (dispath) => ({
    increment: (recipientName) => {
        dispatchEvent(actions.addPostcard(recipientName));
    },
});

class PostcardContainer extends Component {
    constructor(props) {
        super(props);
        //NEED TO ADD FUNCTIONS HERE (this.x)
    }


    render() {
        return (
            <div className="innerBox">
                {/* <PostcardCreator />
                <PostcardsDisplay /> */}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostcardContainer);

