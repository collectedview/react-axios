import React from 'react';
import {Col, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

import './App.css';

const Blog = (props) => {
    return (
        <Col lg="4" xs="12">
            <Card className="scoring">
                <CardImg top width="100%" src={props.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <Button href={props.link} target="_blank" className="tapping">Button</Button>
                    </CardBody>
            </Card>
        </Col>
    );
  };

export default Blog;