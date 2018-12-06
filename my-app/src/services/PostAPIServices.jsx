import React, { Component } from "react";
import axios from "axios";

class PostAPIServices extends Component{

    static getAllPosts(){
        try {
            const headers = {
              "Content-Type": "application/json"
            };
            const url = `https://jsonplaceholder.typicode.com/posts`;
            const response = axios.get(url, { header: headers });
            return response;
          } catch (err) {
            throw err;
          }
    }
}

export default PostAPIServices;