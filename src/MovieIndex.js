import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class MovieIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = { movies: [] }
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:4741/movies')
    this.setState({movies:response.data.movies})
    // axios.get('http://localhost:4741/movies')
    // .then(response => {
    //   this.setState({movies:response.data.movies})
    // })
  }

  async handleDelete(event, id) {
    event.preventDefault()
    const response = axios.delete(`http://localhost:4741/movies/${id}`)
    console.log(response)

    const updatedMoviesList = this.state.movies.filter(movie => movie.id !== id)
    this.setState({movies:updatedMoviesList})
  }



  render() {
    const movieRows = this.state.movies.map(movie => {
      const {id, title, director} = movie
      return (
        <tr key={id}>
          <td>
            <Link to={`/movies/${id}`}>{title}</Link>
          </td>
          <td>{director}</td>
          <td>
            <a href="#" onClick={ (event)=> {
              return this.handleDelete(event, id)
            }}>Delete</a>
          </td>
        </tr>
      )
    })
    return (
      <React.Fragment>
        <h1>Movie Index</h1>
        <Link to="/movies/new"><button>Add a Movie</button></Link>
        <table>
          <tbody>

            {movieRows}

          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default MovieIndex
