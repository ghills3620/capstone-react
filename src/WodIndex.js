import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navbar,  MenuItem, NavItem, NavDropdown, Nav, Table } from 'react-bootstrap'

class WodIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = { wods: [] }
  }

  async componentDidMount(event) {
    const response = await axios ({
      method:'get',
      url: 'http://localhost:4741/wods',
    })
    this.setState({wods:response.data.wods})
    // axios.get('http://localhost:4741/wods')
    // .then(response => {
    //   this.setState({wods:response.data.wods})
    // })
    // console.log(response.data.wods)
  }

  async handleDelete(event, id) {
    event.preventDefault()
    const user = this.props.user
    console.log(user)
    const response = await axios ({
      method:'delete',
      url: `http://localhost:4741/wods/${id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }})

    const updatedWodsList = this.state.wods.filter(wod => wod.id !== id)
    this.setState({wods:updatedWodsList})
  }



  render() {
    const wodRows = this.state.wods.map(wod => {
      const {id, metcon, result} = wod
      return (
        <tr key={id}>
          <td>{id}</td>

          <td><Link to={`/wods/${id}`}>{metcon}</Link></td>
          <td>{result}</td>
          { this.props.user && <button><a href="#" onClick={ (event)=> {
            return this.handleDelete(event, id)
          }}>Delete</a></button> }
        </tr>
      )
    })
    return (
      <React.Fragment>
        <h1>Wod Index</h1>
        { this.props.user && <Link to="/wods/new"><button>New Workout</button></Link> }
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Metcon</th>
              <th>Results</th>
              { this.props.user &&  <th>Remove</th> }
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
