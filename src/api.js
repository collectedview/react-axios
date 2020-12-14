import React from 'react';
import axios from 'axios';

import { Container, Row, Col} from 'reactstrap';

import Blog from './Blog';

import './App.css';

class Axios extends React.Component {
    state = {
      blogs: []
    }

  componentDidMount() {
    axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40collectedview`)
      .then(res => {
        const blogs = res.data.items;
        this.setState({ blogs });
      })
  }

  render() {
    return (
        <section>
          <Container>
            <Row className="leading">
              <Col xs="12">
                <h1>React Axios</h1>
                <p>Response/Promise Wrapper built with <a href="https://reactjs.org/">React</a>, <a href="https://github.com/axios/axios">Axios</a>, <a href="https://rss2json.com">RSS to JSON</a>, &amp; <a href="https://reactstrap.github.io/">Reactstrap</a>. Full overview of the many implementations of <a href="https://medium.com/@collectedview/modernizing-development-138e9caec621">Axios: HTTP Requests/Promises and Authentication Routing for JavaScript Applications</a>.</p>
              </Col>
            </Row>
            <Row className="leading"> 
              { this.state.blogs.map(blog =>
                <Blog
                  key={blog.id}
                  img={blog.thumbnail}
                  title={blog.title}
                  link={blog.link}
                />          
              )} 
            </Row>
          </Container>
        </section>
    )
  }
}

export default Axios;