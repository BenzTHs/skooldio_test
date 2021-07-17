import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import iconEngi from '../../assets/icon/engi.svg';
import iconHeart from '../../assets/icon/page-1.svg';
import iconHEdit from '../../assets/icon/group-3-copy-4.svg';
import iconReward from '../../assets/icon/page-1-copy-2.svg';

function Cards() {
  const [hasError, setHasError] = useState(false);
  const [dataList, setDataList] = useState({});

  async function fetchData() {
    await fetch('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
      .then((res) => res.json())
      .then((data) => setDataList(data))
      .catch((err) => setHasError(err));
  }

  useEffect(() => {
    fetchData();
    console.log('dataList', dataList);
  }, []);

  return (
    <div>
      <Card className="card-style">
        <Row>
          <Col xs={2} className="col-style">
            <Card.Img className="icon-engi" src={iconEngi} />
          </Col>
          <Col xs={8}>
            <h1 className="text-title">คณะวิศวกรรมศาสตร์</h1>
            <h1 className="text-sub-title">สาขาวิศวกรรมทั่วไป</h1>
            <h1 className="text-university">จุฬาลงกรณ์มหาวิทยาลัย</h1>
          </Col>
          <Col xs={2}>
            <Card.Img className="icon-heart" src={iconHeart} />
          </Col>
        </Row>
        <div className="rectangle"></div>
        <Card.Body className="card-body-style">
          <div>
            <h1 className="text-open-round">
              รอบที่เปิด <span className="Oval-2">1</span>
              <span className="Oval-2">2</span>
              <span className="Oval">3</span>
              <span className="Oval-2">4</span>
              <span className="Oval">5</span>
            </h1>
          </div>
          <div align="right">
            <Row>
              <Col xs={6}>
                <h1 className="text-content-round">รอบที่ 4 : Admission</h1>
              </Col>
              <Col xs={6}>
                <div className="box-edit">
                  <span className="text-edit"> แก้ไขคะแนน </span>
                  <img className="icon-heart" src={iconHEdit} alt="iconHeart" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="box-score">
            <Row>
              <Col xs={6}>
                <img className="icon-heart" src={iconReward} alt="iconHeart" />
              </Col>
              <Col xs={6}>
                <div>
                  <h1 className="text-content-score">คะแนนของคุณคือ</h1>
                  <h1 className="text-content-number">23,453</h1>
                </div>
              </Col>
            </Row>
          </div>
        </Card.Body>
        <div className="rectangle"></div>
        <h1 className="text-content-round">ดูสัดส่วนคะแนน</h1>
        <div className="rectangle"></div>
      </Card>
    </div>
  );
}

export default Cards;
