import React from 'react';
import useAxios from 'axios-hooks';
import { Card, Row, Col, Button } from 'react-bootstrap';
import iconHeart from '../../assets/icon/page-1.svg';
import ScoreMinMax from './ScoreMinMax';
import EditScore from './EditScore';
import MyScore from './MyScore';
import RoundOpen from './RoundOpen';
import RatioScore from './RatioScore';
import InteresPeople from './InteresPeople';

function CardAdmission() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <Button onClick={refetch}>Refetch</Button>
      {data.map((item) => (
        <Card key={item.id} className="card-style">
          <Row>
            <Col xs={2} className="col-style">
              <Card.Img className="icon-engi" src={item.logo} />
            </Col>
            <Col xs={8}>
              <h1 className="text-title">{item.faculty.name}</h1>
              <h1 className="text-sub-title">{item.name}</h1>
              <h1 className="text-university">
                {item.faculty.university.name}
              </h1>
            </Col>
            <Col xs={2}>
              <Card.Img className="icon-heart" src={iconHeart} />
            </Col>
          </Row>
          <div className="rectangle"></div>
          <Card.Body className="card-body-style">
            <RoundOpen />
            <EditScore />
            <MyScore />
          </Card.Body>
          <ScoreMinMax
            avg={item.score?.avg || 0}
            min={item.score?.min || 0}
            max={item.score?.max || 0}
          />
          <div className="rectangle"></div>
          <RatioScore />
          <div className="rectangle"></div>
          <InteresPeople likes={item.likes} />
        </Card>
      ))}
    </div>
  );
}

export default CardAdmission;
