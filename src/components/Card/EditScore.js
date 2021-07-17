import React from 'react';
import { Row, Col } from 'react-bootstrap';
import iconHEdit from '../../assets/icon/group-3-copy-4.svg';

function EditScore() {
  return (
    <div align="right">
      <Row>
        <Col xs={6}>
          <h1 className="text-content-round">รอบที่ 4 : Admission</h1>
        </Col>
        <Col xs={6}>
          <div className="box-edit">
            <span className="text-edit"> แก้ไขคะแนน </span>
            <img className="icon-edit" src={iconHEdit} alt="iconHeart" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EditScore;
