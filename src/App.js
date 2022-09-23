import React, { Component } from 'react'
import Post from './Post'

// const post = {
//   title: "Dinosaurs are awesome",
//   author: "Stealthy Stegosaurus",
//   body: "Check out this body property!",
//   comments: ["First!", "Great post", "Hire this author now!"]
// }

const starterPosts =  [
  {
    title: 'Dinosaurs are awesome',
    author: 'Stealthy Stegosaurus',
    body: 'Check out this body property!',
    comments: [
      'First!',
      'Second!',
      'Third!'
    ]
  }, 
  {
    title: 'Dinosaurs are neat',
    author: 'Mr. T-Rex',
    body: 'I pity the fool that doesn\'t think dinosaurs are neat!',
    comments: [
      'Wow!',
      'Amazing!',
      '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'
    ]
  }
]

class App extends Component {
  state = {
    // the posts to be rendered
    posts: starterPosts,
    // the values of the form that the user has inputed
    title: "",
    author: "",
    body: ""
  }

  // handleBodyChange = () => {
  //   // console.log('the button has been clicked!')
  //   // take in input from the user
  //   const userInput = prompt('what should the new body be?')
  //   console.log(userInput)
  //   // set the body in state
  //   this.setState({
  //     body: userInput
  //   })
  // }

  // two event handlers -- on for submit events and one for input change events
  handleFormSubmit = e => {
    // prevents the page from refreshing on form submission
    e.preventDefault()
    // take the values from the form inputs, and add a new post into the post array
    console.log(this.state)
    this.setState((prevState => {
      return {
        posts: [
          ...prevState.posts, 
          {
            title: prevState.title,
            author: prevState.author,
            body: prevState.body,
            comments: []
          }
        ],
        title: '',
        author: '',
        body: ''
      }
    }))
  }

  handleInputChange = e => {
    console.log(e)
    this.setState({
      // set the current input to be the changed value
      [e.target.name]: e.target.value
    })
  }

  render() {
    const postComponents = this.state.posts.map((post, i) => {
      return (
        <Post 
          title={post.title}
          author={post.author}
          body={post.body}
          comments={post.comments}
          key={`post${i}`}
        />
      )
    })

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='title'>Title:</label>
          <input 
            type='text'
            id='title'
            name='title'
            // when the vlaue changes, invoke handle input change
            onChange={this.handleInputChange}
            value={this.state.title}
          />

          <label htmlFor='author'>Author:</label>
          <input 
            type='text'
            id='author'
            name='author'
            onChange={this.handleInputChange}
            value={this.state.author}
          />

          <label htmlFor='body'>Body:</label>
          <input 
            type='text'
            id='body'
            name='body'
            onChange={this.handleInputChange}
            value={this.state.body}
          />

          <button type='submit'>Create New Post</button>
        </form>

        {postComponents}
      
      
      {/* code graveyard */}
      
        {/* <Post 
          title={this.state.title}
          author={this.state.author}
          body={this.state.body}
          comments={this.state.comments}
        /> */}

        {/* <button
          onClick={this.handleBodyChange}
        >
          Edit Body
        </button> */}

      </div>
    )
  }
}

export default App