import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import graphicicon from '../../asset/images/graphicicon.svg';
import mobileicon from '../../asset/images/mobileicon.svg';
import webicon from '../../asset/images/webicon.svg';

export default class Services  extends Component {
  render() {
    return (
      <Fragment>
          <Container>
              <h2 className="text-center mt-5">Our Services</h2>
              <Row>
                <Col lg={4} md={6} sm={12}>
                    <div className="text-center mt-3 card_design">
                        <img src={graphicicon} />
                        <h2>Graphics Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className="text-center mt-3 card_design">
                        <img src={mobileicon} />
                        <h2>Mobile Apps</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className="text-center mt-3 card_design">
                        <img src={webicon} />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
              </Row>
          </Container>
      </Fragment>
    )
  }
}
