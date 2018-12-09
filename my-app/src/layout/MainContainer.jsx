import React, { Component } from "react";
import AllPostsListAction from "../actions/posts.action.js";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import "./style.css";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon
} from "mdbreact";

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { getAllPosts } = this.props;
        getAllPosts();
    }

    render() {
        const { AllPostsList } = this.props;
        console.log("Inside render function", AllPostsList);
        return(
        <div id="wrapper">
            <MDBCard className="px-5 pb-5">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                Recent posts
                </h2>
                <p className="text-center w-responsive mx-auto mb-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
                </p>
                {AllPostsList.map((post) => 
                    <MDBRow>
                    <MDBCol lg="12">
                        <a href="#!" className="green-text">
                        <h6 className="font-weight-bold mb-3">
                            <MDBIcon icon="cutlery" className="pr-2" />
                            Food
                        </h6>
                        </a>
                        <h3 className="font-weight-bold mb-3 p-0">
                        <strong>{post.title}</strong>
                        </h3>
                        <p>
                        {post.body}
                        </p>
                    </MDBCol>
                    </MDBRow>
                )
                }
                
            </MDBCardBody>
            </MDBCard>
        </div>
        );
    }
}

const stateToProps = state => ({
    AllPostsList: state.postsReducer.postsList,
});

const dispatchToProps = dispatch => ({
    getAllPosts: () => {
        dispatch(AllPostsListAction.getAllPosts());
    }
});

MainContainer.propTypes = {
    getAllPosts : Proptypes.func.isRequired 
}

export default connect(stateToProps, dispatchToProps)(MainContainer);