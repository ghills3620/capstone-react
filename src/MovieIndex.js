import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class MovieIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = { wods: [] }
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:4741/wods')
    this.setState({wods:response.data.wods})
    // axios.get('http://localhost:4741/movies')
    // .then(response => {
    //   this.setState({movies:response.data.movies})
    // })
    console.log(response.data.wods)
  }

  async handleDelete(event, id) {
    event.preventDefault()
    const response = axios.delete(`http://localhost:4741/wods/${id}`)
    console.log(response)

    const updatedMoviesList = this.state.wods.filter(wod => wod.id !== id)
    this.setState({wods:updatedMoviesList})
  }



  render() {
    const movieRows = this.state.wods.map(wod => {
      const {id, metcon, result} = wod
      return (
        <tr key={id}>
          <td>
            <Link to={`/wods/${id}`}>Metcon: {metcon}</Link>
          </td>
          <td>Results: {result}</td>
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
        <Link to="/wods/new"><button>Add a Movie</button></Link>
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
