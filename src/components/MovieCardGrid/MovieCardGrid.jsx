import { Button, Card, Row } from 'react-bootstrap';
import { dateFormatter, scoreFormatter } from '../../helpers';

export function MovieCardGrid({ data }) {
  // @TODO remove
  console.log('movies:', data);

  // to display poster in modal
  // `https://image.tmdb.org/t/p/original/${datum.poster_path}`

  return (
    <Row xs={1} md={2} lg={3} className='g-4'>
      {data.map((datum) => (
        <Card>
          <Card.Img variat='top' src={datum.backdrop_path} />
          <Card.Body>
            <Card.Title>{datum.title}</Card.Title>
            <Card.Text>
              Release Date: {dateFormatter(datum.release_date)}
            </Card.Text>
            <Button variant='secondary'>Read More</Button>
          </Card.Body>
          <Card.Footer>
            <p>
              Averge Score:{' '}
              <span className={`fw-bold ${scoreFormatter(datum.vote_average)}`}>
                {datum.vote_average}
              </span>
            </p>
          </Card.Footer>
        </Card>
      ))}
    </Row>
  );
}
