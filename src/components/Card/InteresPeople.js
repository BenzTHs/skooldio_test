import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import iconShare from '../../assets/icon/group-2.svg';

function InteresPeople({ likes }) {
  return (
    <div className="box-share" align="right">
      <Row>
        <Col xs={6}>
          <h1 className="text-content-interes">{likes} คนที่สนใจ</h1>
        </Col>
        <Col xs={6}>
          <div>
            <img className="icon-share" src={iconShare} alt="iconHeart" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

InteresPeople.propTypes = {
  likes: PropTypes.number.isRequired,
};

export default InteresPeople;
