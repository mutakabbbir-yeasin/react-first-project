import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Conteinerimgs from '../../asset/images/hero.webp';

export default class OurProduct extends Component {
  render() {
    return (
      <Fragment>
        <Container className="py-5">
            <Row>
                <Col lg={6} md={8} sm={12}>
                    <img src={Conteinerimgs} width="100%" />
                </Col>
                <Col lg={6} md={8} sm={12}>
                    <h2 className="feature_h2">Your Business and Project</h2>
                    <p className="feature_paragrapg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul className="product_ul">
                        <li>Disscuss our CEO</li>
                        <li>Disscuss our Developers</li>
                        <li>Disscuss our Marketers</li>
                    </ul>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
