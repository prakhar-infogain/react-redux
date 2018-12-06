import React, { Component } from "react";
import { MainContainer } from "../layout/MainContainer";
import { RightContainer } from "../layout/RightContainer";
import {
    Col,
    Row
} from mdbreact

class RightbarComponent extends Component {
    render () {
        <Row>
            <Col xs-12 sm-12 md-8 lg-8 xl-8>
                <MainContainer />
            </Col>
            <Col xs-12 sm-12 md-4 lg-4 xl-4>
                <RightContainer />
            </Col>
        </Row>
    }
}

export default RightbarComponent;