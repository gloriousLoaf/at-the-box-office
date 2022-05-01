import { BoxOfficeBody } from '../BoxOfficeBody/BoxOfficeBody';
import { BoxOfficeHeader } from '../BoxOfficeHeader/BoxOfficeHeader';

// you can access the sample dataset with:
// import movieData from './movies.json'
import './App.scss';

function App() {
  return (
    <div className='App'>
      <BoxOfficeHeader />
      <BoxOfficeBody />
    </div>
  );
}

export default App;
