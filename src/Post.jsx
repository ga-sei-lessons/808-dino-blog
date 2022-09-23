import React, { Component } from 'react'
import Comment from './Comment'

class Post extends Component {
    render() {
        // console.log(this)
        const comments = this.props.comments.map((comment, idx) => {
            return (
                <Comment 
                    key={`comment${idx}`}
                    commentText={comment}
                />
            )
        })
        return (
            <div>
                <h1>{this.props.title}</h1>
                
                <p>by: {this.props.author}</p>

                <p>{this.props.body}</p>

                <h2>Comments:</h2>

                {comments}
            </div>
        )
    }
}

export default Post