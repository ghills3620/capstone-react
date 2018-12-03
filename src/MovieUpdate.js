import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class MovieUpdate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      wod: {
        metcon: '',
        result: ''
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

    const newMovie = { ...this.state.wod, [event.target.name]: event.target.value }

    this.setState({
      wod: newMovie
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const wod = this.state.wod
    const id = this.props.match.params.id

    const response = await axios.put(`http://localhost:4741/wods/${id}`, { wod })

    this.setState(this.baseState)
    // this.setState({flashMessage: 'Movie Updated', movie: this.baseMovie})
    this.props.history.push('/wods')

    console.log(response)
  }

  async  componentDidMount() {
    const id = this.props.match.params.id
    const response = await axios.get(`http://localhost:4741/wods/${id}`)
    this.setState({wod:response.data.wod})
  }

  render () {
    return (

      <React.Fragment>

        <h1>Update Movie:</h1>

        <form>
          <label htmlFor='title'>Title</label>
          <input type='text' onChange={this.handleChange} value={this.state.wod.metcon} name='metcon' placeholder='metcon'/>
          <input type='text' onChange={this.handleChange} value={this.state.wod.result} name='result' placeholder='result'/>
          <input type='submit' onClick={this.handleSubmit}/>
          <Link to={`/wods/${this.props.match.params.id}`}><button>Back</button></Link>
        </form>

      </React.Fragment>
    )
  }

}

export default MovieUpdate
