import React, { Component } from 'react'
import './App.scss'
import { Route, Router, Link, Switch } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import WodIndex from './WodIndex.js'
import WodNew from './WodNew.js'
import WodShow from './WodShow.js'
import WodUpdate from './WodUpdate.js'
import Clock from './Clock/Home.js'
import SugarWodApi from './SugarWodApi.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }



  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <br/>
        {user && <p>Believe in the Burpee</p>}
        <Link to='/wods'><button>Public White Board</button></Link>

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
        </main>
        <Switch>
          <Route exact path="/wods" render={(props) => (<WodIndex flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/wods/new' render={(props) => (
            <WodNew flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/wods/:id/update' render={(props) => (
            <WodUpdate flash={this.flash} user={user} />
          )} />
          <Route exact path="/wods/:id" render={(props) => (
            <WodShow flash={this.flash} user={user} />
          )} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
