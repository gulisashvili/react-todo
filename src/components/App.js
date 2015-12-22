import React from 'react';
import { Link }  from 'react-router';

export default React.createClass({

  componentDidMount () {
    if (this.getCurrentUser()) return this.setState({isUserAuthenticated: true})

    return this.setState({isUserAuthenticated: false})
  },
  getInitialState () {
    return {
      isUserAuthenticated: false,
      tasks: []
    }
  },

  getCurrentUser () {
    return Parse.User.current()
  },

  handleAuth () {
    console.log("Authenticating")
    Parse.FacebookUtils.logIn("user_likes,email", {
      success: function(user) {
        this.setState({isUserAuthenticated: true})
        FB.api('/me', function(response) {});
      }.bind(this),

      error: function(user, error) {
        console.log('err : ', error)
      }.bind(this)
    });
  },

  handleLogOut () {
    Parse.User.logOut();
    this.setState({isUserAuthenticated: false})
    console.log("cur user : ", Parse.User.current())

  },

  showContentIfUserIsAuthenticated (fbAuthLink) {
    if (fbAuthLink) return !this.state.isUserAuthenticated ? 'inline-block' : 'none'

    return this.state.isUserAuthenticated ? 'inline-block' : 'none'
  },

  render() {
    let styles = {
      section : {
        display: this.showContentIfUserIsAuthenticated()
      },
      fbAuthLink : {
        display: this.showContentIfUserIsAuthenticated(true)
      }
    }

    return (
      <div>

        <header>
          <Link to="/"> React Todo App </Link>
          <Link style={styles.section} to="/tasks"> Tasks </Link>
          <a style={styles.fbAuthLink} href="#" onClick={this.handleAuth}> Login with Facebook </a>
          <a href="#" style={styles.section} onClick={this.handleLogOut}> Log out </a>
        </header>

        <section style={styles.section}>
          {this.props.children}
        </section>

      </div>
    )
  }
});
