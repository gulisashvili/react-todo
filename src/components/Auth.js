import React from 'react';

export default React.createClass({

  componentDidMount () {
    Parse.FacebookUtils.logIn("user_likes,email", {
      success: function(user) {
        console.log(user)
      },

      error: function(user, error) {
        console.log('err : ', error)
      }
    });
  },

  logOut () {
    Parse.User.logOut();
  },

  render() {
    return (
      <div>
        <h3> Auth </h3>
        <button onClick={this.logOut}> log out </button>
      </div>
    )
  }
})
