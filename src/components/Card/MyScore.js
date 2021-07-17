import React from 'react';
import { Row, Col } from 'react-bootstrap';
import iconReward from '../../assets/icon/page-1-copy-2.svg';

function MyScore() {
  return (
    <div className="box-score">
      <Row>
        <Col className="box-reward" xs={6} align="left">
          <img className="icon-reward" src={iconReward} alt="iconHeart" />
        </Col>
        <Col xs={6}>
          <div>
            <h1 className="text-content-score">คะแนนของคุณคือ</h1>
            <h1 className="text-content-number">23,453</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyScore;
