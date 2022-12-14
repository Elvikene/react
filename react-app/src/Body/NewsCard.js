import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import noImage from '../img/holder.png';
import NewsModalComponent from './NewsModal';

function NewsCardComponent() {

    const [show, setShow] = useState(false);

    return (
        <>
        <Card onClick = {() => setShow(true)}>
            <Card.Img variant="top" src={noImage} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Source Name</Card.Subtitle>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">
                        <cite title="Source Title">Author</cite>
                    </footer>
                </blockquote>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">publishedAt</small>
            </Card.Footer>
        </Card>
        <NewsModalComponent show={show} setShow={setShow} />
        </>
    );
}

export default NewsCardComponent;
