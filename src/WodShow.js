import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navbar,  MenuItem, NavItem, NavDropdown, Nav, Table } from 'react-bootstrap'


class WodShow extends React.Component {
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
    const response = await axios.get(`${apiUrl}/wods/${id}`)
    const wod = response.data.wod
    this.setState({
      wod: wod
    })
  }

  render() {
    return(
      <React.Fragment>
        <h1>Show Wod:</h1>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <td>Metcon</td>
              <td>Results</td>
            </tr>
          </thead>
          <tbody>
            <td>{this.state.wod.metcon}</td>
            <td>{this.state.wod.result}</td>
          </tbody>
          <Link to={`/wods/${this.props.match.params.id}/update`}><button>Update</button></Link>
        </Table>
      </React.Fragment>
    )
  }
}

export default withRouter(WodShow)
