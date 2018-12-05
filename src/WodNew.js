import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


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
    this.basewod = this.state.wod
  }

  handleChange = (event) => {

    // console.log(event.target.value)

    // const name = event.target.name
    // const value = event.target.value
    // const newWod = Object.assign(this.state.movie)
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

    const response = await axios ({
      method:'post',
      url: 'http://localhost:4741/wods',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      wod
    })

    this.setState(this.baseState)
    // this.setState({flashMessage: 'Wod Created', movie: this.baseWod})
    this.props.history.push('/wods')

    // console.log(response)
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

export default WodNew
