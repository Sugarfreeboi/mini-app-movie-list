//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// const movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ]

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch(err => console.log(`Fetch failed. Error: ${err}`))
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
