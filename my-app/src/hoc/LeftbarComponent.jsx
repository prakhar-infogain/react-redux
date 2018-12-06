import React, { Component } from "react";
import MainContainer from "../layout/MainContainer";
import LeftContainer from "../layout/LeftContainer";
import {
    Col,
    Row
} from 'mdbreact'

class LeftbarComponent extends Component {
    render () {
        return(
            <div className="wrapper">
                <LeftContainer />
                <MainContainer />
            </div>
        );
    }
}

export default LeftbarComponent;