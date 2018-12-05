import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navbar,  MenuItem, NavItem, NavDropdown, Nav, Table } from 'react-bootstrap'


class WodIndex extends React.Component {
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
    console.log(response.data.wods)
    // })
  }

  async handleDelete(event, id) {
    event.preventDefault()
    const response = axios.delete(`http://localhost:4741/wods/${id}`)
    console.log(response)

    const updatedWodsList = this.state.wods.filter(wod => wod.id !== id)
    this.setState({wods:updatedWodsList})
  }



  render() {
    const wodRows = this.state.wods.map(wod => {
      console.log(this.state.wods)
      const {id, metcon, result} = wod
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>username</td>
          <td><Link to={`/wods/${id}`}>{metcon}</Link></td>
          <td>{result}</td>
          <button><a href="#" onClick={ (event)=> {
            return this.handleDelete(event, id)
          }}>Delete</a></button>
        </tr>
      )
    })
    return (
      <React.Fragment>
        <h1>Wod Index</h1>
        <Link to="/wods/new"><button>New Workout</button></Link>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Metcon</th>
              <th>Results</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>

            {wodRows}

          </tbody>
        </Table>
      </React.Fragment>
    )
  }
}

export default WodIndex
