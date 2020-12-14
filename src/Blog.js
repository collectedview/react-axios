import React from "react";
import { Col, Card, CardText, CardBody, CardTitle } from "reactstrap";

const Example = (props) => {
  return (
    <Col lg="4" xs="12" className="p-2 mx-auto" className="blog">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>{props.body}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Example;
