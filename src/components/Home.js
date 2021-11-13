import React from 'react'
import { ListGroup, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <ListGroup>
            {props.posts.map(post => (<ListGroup.Item key={post.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.w3schools.com/html/pic_trulli.jpg" />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                        <Button variant="primary" as={Link} to={`/posts/${post.id}`} >view details</Button>
                    </Card.Body>
                </Card>
            </ListGroup.Item>))}
        </ListGroup>
    )
}
