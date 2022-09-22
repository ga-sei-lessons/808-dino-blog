import React, { Component } from 'react'
import Post from './Post'

const post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

class App extends Component {
  render() {
    return (
      <div>
        <Post 
          title={post.title}
          author={post.author}
          body={post.body}
          comments={post.comments}
        />
      </div>
    )
  }
}

export default App