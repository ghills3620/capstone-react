import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class MovieUpdate extends React.Component {
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
    const id = this.props.match.params.id

    const response = await axios.put(`http://localhost:4741/movies/${id}`, { movie })

    this.setState(this.baseState)
    // this.setState({flashMessage: 'Movie Updated', movie: this.baseMovie})
    this.props.history.push('/movies')

    console.log(response)
  }

  async  componentDidMount() {
    const id = this.props.match.params.id
    const response = await axios.get(`http://localhost:4741/movies/${id}`)
    this.setState({movie:response.data.movie})
  }

  render () {
    return (

      <React.Fragment>

        <h1>Update Movie:</h1>

        <form>
          <label htmlFor='title'>Title</label>
          <input id='title' type='text' onChange={this.handleChange} value={this.state.movie.title} name='title' placeholder='title'/>
          <input type='text' onChange={this.handleChange} value={this.state.movie.director} name='director' placeholder='director'/>
          <input type='date' onChange={this.handleChange} value={this.state.movie.year} name='year' placeholder='year'/>
          <input type='submit' onClick={this.handleSubmit}/>
          <Link to={`/movies/${this.props.match.params.id}`}><button>Back</button></Link>
        </form>

      </React.Fragment>
    )
  }

}

export default MovieUpdate
