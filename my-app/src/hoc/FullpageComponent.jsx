import React, { Component } from "react";
import { MainContainer } from "../layout/MainContainer";
import {
    Col,
    Row
} from mdbreact

class FullpageComponent extends Component {
    render () {
        <Row>
            <Col xs="12" sm="12" md="12" lg="8" xl="12">
                <MainContainer />
            </Col>
        </Row>
    }
}

export default FullpageComponent;