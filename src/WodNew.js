import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import apiUrl from './apiConfig'


class WodNew extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      wod: {
        metcon: '',
        result: ''
      },
      flashMessage: ''
    }
    this.baseWod = this.state.wod
  }

  handleChange = (event) => {

    // //console.log(event.target.value)

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
    const wod = this.state.wod
    const user = this.props.user
    const response = await axios ({
      method:'post',
      url: `${apiUrl}/wods`,
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data:{ wod: {
        metcon: wod.metcon,
        result: wod.result
      }},
    })
    //console.log(this.baseWod)
    this.setState(this.baseWod)
    // this.setState({flashMessage: 'Wod Created', wod: this.baseWod})
    this.props.history.push('/wods')

    // //console.log(response)
  }

  render() {

    return (
      <React.Fragment>

        <h1>New Wod</h1>

        <p>{this.state.flashMessage}</p>

        <form>
          <input type='text' onChange={this.handleChange} value={this.state.wod.metcon} name='metcon' placeholder='metcon'/>
          <input type='text' onChange={this.handleChange} value={this.state.wod.result} name='result' placeholder='result'/>
          <input type='submit' onClick={this.handleSubmit}/>
        </form>

      </React.Fragment>
    )
  }
}

export default withRouter(WodNew)
