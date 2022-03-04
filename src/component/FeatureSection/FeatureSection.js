import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Containerimg from '../../asset/images/content.webp';

export default class FeatureSection extends Component {
  render() {
    return (
        <Fragment>
        <Container className="feature_container py-2">
            <br></br><br></br><br></br>
            <Row>
                <Col lg={6} md={8} sm={12}>
                    <div>
                        <h2 className="feature_h2">We will support you 24/7</h2>
                        <p className="feature_paragrapg">We provide 24/7 days support to all our clients. So we can take proper care of any website or software, And our developer team is active in your work at any moment.We provide 24/7 days support to all our clients. So we can take proper care of any website or software, And our developer team is active in your work at any moment.We provide 24/7 days support to all our clients. So we can take proper care of any website or software, And our developer team is active in your work at any moment.We provide 24/7 days support to all our clients. So we can take proper care of any website or software, And our developer team is active in your work at any moment.</p>
                    </div>
                </Col>
                <Col lg={6} md={8} sm={12}>
                    <div>
                        <img src={Containerimg} width="600px" />
                    </div>
                </Col>
            </Row>
        </Container>
        
    </Fragment>
    )
  }
}
