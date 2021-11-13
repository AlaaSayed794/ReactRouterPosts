import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import MainFrame from './components/MainFrame'
import LoadingOverlay from 'react-loading-overlay'
import Post from './components/Post';
import Login from './components/Login';


class App extends Component {
  state = {
    posts: [],
    users: [],
    currentUser: undefined,
    loading: true
  }
  render() {
    return (
      <LoadingOverlay
        active={this.state.loading}
        spinner
        text='Loading your content...'
      >
        {this.state.currentUser ? <MainFrame className="App" logout={() => this.login(undefined)}>
          <Route path="/" exact render={() => <Home posts={this.state.posts} />} />
          <Route path="/about" exact component={About} />
          <Route path="/posts/:id" exact render={(routeProps) => <Post {...routeProps} posts={this.state.posts} />} />
        </MainFrame> : <Login login={this.login} users={this.state.users} />}

      </LoadingOverlay>

    );
  }
  login = (username) => {
    console.log(this)
    this.setState({
      currentUser: this.state.users.find(u => u.id == username)
    })
  }
  componentDidMount() {
    this.getPosts()
  }
  async getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()
    const res2 = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res2.json()
    this.setState({
      posts,
      users,
      loading: false
    })
  }
}

export default App;
