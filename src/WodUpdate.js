import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

class WodUpdate extends React.Component {
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
    // const newWod = Object.assign(this.state.wod)
    //
    // newWod[name]= value

    const newWod = { ...this.state.wod, [event.target.name]: event.target.value }

    this.setState({
      wod: newWod
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event)
    const wod = this.state.wod
    const id = this.props.match.params.id
    const user = this.props.user
    const response = await axios ({
      method:'put',
      url: `http://localhost:4741/wods/${id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data:{ wod: {
        metcon: wod.metcon,
        result: wod.result
      }},
    })
    this.setState(this.baseState)
    // this.setState({flashMessage: 'Wod Updated', wod: this.baseWod})
    this.props.history.push('/wods')
  }

  async  componentDidMount() {
    const id = this.props.match.params.id
    const response = await axios.get(`http://localhost:4741/wods/${id}`)
    this.setState({wod:response.data.wod})
  }

  render () {
    return (

      <React.Fragment>

        <h1>Update Wod:</h1>

        <form>
          <label htmlFor='title'>Title</label>
          <input type='text' onChange={this.handleChange} value={this.state.wod.metcon} name='metcon' placeholder='metcon'/>
          <input type='text' onChange={this.handleChange} value={this.state.wod.result} name='result' placeholder='result'/>
          <input type='submit' onClick={this.handleSubmit}/>
          { this.props.user && <Link to={`/wods/${this.props.match.params.id}`}><button>Back</button></Link> }
        </form>

      </React.Fragment>
    )
  }

}

export default withRouter(WodUpdate)
