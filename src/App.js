import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 0,
    posts: [
      {
        id: 1,
        title: "Titulo do id 1",
        body: "Corpo do id 1"
      },

      {
        id: 2,
        title: "Titulo do id 2",
        body: "Corpo do id 2"
      },

      {
        id: 3,
        title: "Titulo do id 3",
        body: "Corpo do id 3"
      }
    ]
  }

  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeout = () => {
    const { posts, count } = this.state;
    posts[0].title = "Título id: 1 alterado"

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, count: count + 1 })
    }, 3000);
  }

  render() {
    const { posts, count } = this.state;

    return (
      <div className="App">
        <h3>{count}</h3>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
