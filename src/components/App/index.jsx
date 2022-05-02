import { BoxOfficeBody } from '../BoxOfficeBody/BoxOfficeBody';
import { BoxOfficeHeader } from '../BoxOfficeHeader/BoxOfficeHeader';
import { BoxOfficeFooter } from '../BoxOfficeFooter/BoxOfficeFooter';

// you can access the sample dataset with:
// import movieData from './movies.json'
import './App.scss';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Container>
        <BoxOfficeHeader />
        <BoxOfficeBody />
        <BoxOfficeFooter />
      </Container>
    </div>
  );
}

export default App;
