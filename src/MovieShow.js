import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class MovieShow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      wod: {
        metcon: '',
        result: ''
      }
    }
  }


  async componentDidMount() {
    const id = this.props.match.params.id
    const response = await axios.get(`http://localhost:4741/wods/${id}`)
    const wod = response.data.wod
    this.setState({
      wod: wod
    })
  }

  render() {
    return(
      <React.Fragment>
        <h1>Show Movie:</h1>
        <p>Metcon: {this.state.wod.metcon}</p>
        <p>Results: {this.state.wod.result}</p>
        <Link to={`/wods/${this.props.match.params.id}/update`}><button>Update</button></Link>
      </React.Fragment>
    )
  }
}

export default MovieShow
