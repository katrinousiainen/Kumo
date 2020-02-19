import React, { Component } from "react";
import GetPosts from '../components/GetPosts'

class Posts extends Component {



    render() {
        return (
            <div className="container">
                <GetPosts />
            </div>
        )
    }
}

export default Posts;