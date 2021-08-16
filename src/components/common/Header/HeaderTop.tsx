import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineMobile } from 'react-icons/ai';
import { BiEnvelope, BiPhoneCall } from 'react-icons/bi';

function HeaderTop() {
  return (
    <div className="header__top py-2 bg-light border-bottom">
      <Container>
        <Row>
          <Col className="d-flex gap-4">
            <div className="d-flex align-items-center gap-2">
              <BiPhoneCall /> <a href="tel:09638111666">09638111666</a>
            </div>
            <div className="d-flex align-items-center gap-2">
              <BiEnvelope /> <a href="mailto:info@evaly.com">info@evaly.com</a>
            </div>
          </Col>

          <Col className="d-flex gap-3 justify-content-end">
            <div className="d-flex align-items-center gap-2">
              <AiOutlineMobile />
              <a href="#">Save big on our app!</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderTop;
