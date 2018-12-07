import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
    //   this.setState({movies:response.data.movies})
    // })
    // console.log(response.data.wods)
  }

  async handleDelete(event, id) {
    event.preventDefault()
    const user = this.props.user
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
    const movieRows = this.state.wods.map(wod => {
      const {id, metcon, result} = wod
      return (
        <tr key={id}>
          <td>
          
          </td>
          <td>
            <Link to={`/wods/${id}`} user={this.props.user}>{metcon}</Link>
          </td>
          <td>{result}</td>
          <td>
            { this.props.user && <a href="#" onClick={ (event)=> {
              return this.handleDelete(event, id)
            }}>Delete</a> }
          </td>
        </tr>
      )
    })
    return (
      <React.Fragment>
        <h1>Wod Index</h1>
        { this.props.user && <Link to="/wods/new"><button>New Workout</button></Link> }
        <table>
          <tbody>

            {movieRows}

          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default WodIndex
