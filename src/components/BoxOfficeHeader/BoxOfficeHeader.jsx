import { Col, Row } from 'react-bootstrap';
import './BoxOfficeHeader.scss';

export function BoxOfficeHeader() {
  return (
    <Row>
      <Col className='header-wrapper'>
        <h1>At The Box Office</h1>
        <p>Check the latest hits!</p>
      </Col>
    </Row>
  );
}
