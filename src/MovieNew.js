import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class MovieNew extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      movie: {
        title:'',
        director: '',
        year: ''
      },
      flashMessage: ''
    }
    this.baseMovie = this.state.movie
  }

  handleChange = (event) => {

    // console.log(event.target.value)

    // const name = event.target.name
    // const value = event.target.value
    // const newMovie = Object.assign(this.state.movie)
    //
    // newMovie[name]= value

    const newMovie = { ...this.state.movie, [event.target.name]: event.target.value }

    this.setState({
      movie: newMovie
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const movie = this.state.movie

    const response = await axios.post('http://localhost:4741/movies', { movie })

    this.setState(this.baseState)
    // this.setState({flashMessage: 'Movie Created', movie: this.baseMovie})
    this.props.history.push('/movies')

    // console.log(response)
  }

  render() {

    return (
      <React.Fragment>

        <h1>Movie New</h1>

        <p>{this.state.flashMessage}</p>

        <form>
          <input type='text' onChange={this.handleChange} value={this.state.movie.title} name='title' placeholder='title'/>
          <input type='text' onChange={this.handleChange} value={this.state.movie.director} name='director' placeholder='director'/>
          <input type='date' onChange={this.handleChange} value={this.state.movie.year} name='year' placeholder='year'/>
          <input type='submit' onClick={this.handleSubmit}/>
        </form>

      </React.Fragment>
    )
  }
}

export default MovieNew
