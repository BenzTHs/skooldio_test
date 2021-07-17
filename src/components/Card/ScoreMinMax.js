import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

function ScoreMinMax({ avg, min, max }) {
  return (
    <div>
      <Row>
        <Col>
          <h1 className="text-score">{min}</h1>
          <h1 className="text-sub-score">คะแนนต่ำสุด {avg}</h1>
        </Col>
        <Col>
          <h1 className="text-score">21,345</h1>
          <h1 className="text-sub-score">คะแนนเฉลี่ย 60 </h1>
        </Col>
        <Col>
          <h1 className="text-score">{max}</h1>
          <h1 className="text-sub-score">คะแนนสูงสุด {avg}</h1>
        </Col>
      </Row>
    </div>
  );
}

ScoreMinMax.propTypes = {
  avg: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default ScoreMinMax;
