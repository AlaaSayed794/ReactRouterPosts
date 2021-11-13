import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 0
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.username) {
            this.props.login(this.state.username)
        }
    }
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Label>choose a user</Form.Label>
                <Form.Control as="select" name="username" onChange={this.onChange} defaultValue="choose">
                    <option value="choose">choose user</option>
                    {this.props.users.map(user => (<option key={user.id} value={user.id}>{user.name}</option>))}
                </Form.Control>
                <Button type="submit">login</Button>
            </Form>
        );
    }
}

export default Login;
