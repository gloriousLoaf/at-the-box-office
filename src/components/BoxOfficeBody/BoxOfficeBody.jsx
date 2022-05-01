import { Container } from 'react-bootstrap';
import { MovieCardGrid } from '../MovieCardGrid/MovieCardGrid';
import movieData from '../../movies.json';

export function BoxOfficeBody() {
  return (
    <Container>
      <MovieCardGrid data={movieData} />
    </Container>
  );
}
