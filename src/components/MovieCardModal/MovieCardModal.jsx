import { Button, Card, Modal } from 'react-bootstrap';
import './MovieCardModal.scss';

export function MovieCardModal(props) {
  const { details, show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Card>
        <Card.Img
          variant='top'
          src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
          alt={`Movie poster for ${details.title}`}
        />
        <Card.Body>
          <div className='d-flex justify-content-between align-items-end'>
            <Card.Title>{details.title}</Card.Title>
            <Button variant='link' onClick={handleClose}>
              Close
            </Button>
          </div>
          <Card.Text>{details.overview}</Card.Text>
        </Card.Body>
      </Card>
    </Modal>
  );
}
