import React from 'react'
import { Card } from 'react-bootstrap'
export default function Post(props) {
    const post = props.posts.find(p => p.id == props.match.params.id)

    return (
        post ? <Card >
            <Card.Img style={{ height: 300, width: 250 }} variant="top" src="https://www.w3schools.com/html/pic_trulli.jpg" />
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>
                <Card.Text>
                    user id :   {post.userId}
                </Card.Text>
            </Card.Body>
        </Card> : <div>
            <h1>404 not found</h1>
            <p>post not found, make sure it exists</p>
        </div>
    )
}
