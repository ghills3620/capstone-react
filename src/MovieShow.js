import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class MovieShow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {
        title:'',
        director: '',
        year: ''
      }
    }
  }


  async componentDidMount() {
    const id = this.props.match.params.id
    const response = await axios.get(`http://localhost:4741/movies/${id}`)
    const movie = response.data.movie
    this.setState({
      movie: movie
    })
  }

  render() {
    return(
      <React.Fragment>
        <h1>Show Movie:</h1>
        <p>{this.state.movie.title}</p>
        <p>{this.state.movie.director}</p>
        <p>{this.state.movie.year}</p>
        <Link to={`/movies/${this.props.match.params.id}/update`}><button>Update</button></Link>
      </React.Fragment>
    )
  }
}

export default MovieShow
