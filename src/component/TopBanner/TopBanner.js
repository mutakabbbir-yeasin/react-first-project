import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button  } from "react-bootstrap";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';

export default class TopBanner extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="topfixBanner">
                <div className="topBanneroverlay">
                  <Container className="topContainer">
                    <Row>
                        <Col className="text-center ">
                          <h2 className="topTitle">Software Develpoment Company</h2>
                          <h5 className="subTitle">Web and Mobile Application</h5>
                          <Button variant="primary">Apply Now</Button>{' '}
                        </Col>
                    </Row>
                  </Container>
                </div>
            </Container>
        </Fragment>
    );
  }
}  
