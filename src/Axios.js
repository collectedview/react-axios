import React from "react";
import axios from "axios";

import { Container, Row, Col } from "reactstrap";

import Blog from "./Blog";

class Axios extends React.Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/posts/`).then((res) => {
      const blogs = res.data;
      this.setState({ blogs });
    });
  }

  render() {
    return (
      <section>
        <Container>
          <Row className="m-5 mx-auto">
            <Col xs="12">
              <h1>React Axios</h1>
              <p>
                Response/Promise Wrapper built with <a href="https://reactjs.org/">React</a>, <a href="https://www.npmjs.com/package/axios">Axios</a>, <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a>, & <a href="https://reactstrap.github.io/">Reactstrap</a>. Full overview of the many implementations of <a href="https://medium.com/swlh/axios-246b916c3100">Axios: HTTP Requests/Promises and Authentication Routing for JavaScript Applications.</a>
              </p>
            </Col>
          </Row>
          <Row noGutters className="m-5 mx-auto">
            {this.state.blogs.map((blog) => (
              <Blog key={blog.id} title={blog.title} body={blog.body} />
            ))}
          </Row>
        </Container>
      </section>
    );
  }
}

export default Axios;
