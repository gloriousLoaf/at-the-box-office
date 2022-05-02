import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { MovieCardModal } from '../MovieCardModal/MovieCardModal';
import { dateFormatter, scoreFormatter } from '../../helpers';
import './MovieCardGrid.scss';

export function MovieCardGrid({ data }) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [details, setDetails] = useState([]);

  const handleModalShow = (datum) => {
    setDetails(datum);
    setShowDetailsModal(true);
  };
  console.log('data:', data);
  return (
    <>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {data.map((datum, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant='top'
                src={datum.backdrop_path}
                alt={`Promo backdrop for ${datum.title}`}
              />
              <Card.Body className='movie-card'>
                <Card.Title>{datum.title}</Card.Title>
                <Card.Text>
                  Release Date: {dateFormatter(datum.release_date)}
                </Card.Text>
                <Button
                  variant='secondary'
                  onClick={() => handleModalShow(datum)}
                >
                  Read More
                </Button>
              </Card.Body>
              <Card.Footer>
                <p>
                  Averge Score:{' '}
                  <span
                    className={`fw-bold ${scoreFormatter(datum.vote_average)}`}
                  >
                    {datum.vote_average}
                  </span>
                </p>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <MovieCardModal
        details={details}
        show={showDetailsModal}
        handleClose={() => setShowDetailsModal(false)}
      />
    </>
  );
}
