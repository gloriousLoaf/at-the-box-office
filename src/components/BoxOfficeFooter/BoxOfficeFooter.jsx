import { Col, Row } from 'react-bootstrap';
import './BoxOfficeFooter.scss';

export function BoxOfficeFooter() {
  return (
    <Row>
      <Col className='footer-wrapper'>
        <p>
          Github:{' '}
          <a
            rel='noreferrer'
            target='_blank'
            href='https://github.com/gloriousLoaf'
          >
            @gloriousLoaf
          </a>
        </p>
      </Col>
    </Row>
  );
}
