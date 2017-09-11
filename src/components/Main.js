import React, { Component } from 'react';
import { graghql, gql } from 'react-apollo';
import PropTypes from 'prop-types';

import LoginAuth0 from './LoginAuth0';

const clientId = 'FjcxDJr0ORpPoKVwIS6ybk0qJgfRuBQ2';
const domain='lab406.auth0.com';

class Main extends Component {
	_isLoggedIn = () => this.props.data.user;

	_logout = () => {
		//remove token from localstorage and reload page
		window.localStorage.removeItem('auth0IdToken');
		location.reload();
	}

  renderLoggedIn() {
    return (
      <div>
        <div className='pv3'>
          <span
            className='dib bg-red white pa3 pointer dim'
            onClick={this._logout}
          >
            Logout
          </span>
        </div>
        <ListPage />
        <NewPostLink />
      </div>
    )
	}
	
	renderLoggedOut() {
    return (
      <div>
        <div className='pv3'>
          <LoginAuth0
            clientId={clientId}
            domain={domain}
          />
        </div>
        <span>Log in to create new posts</span>
        <ListPage />
      </div>
    )
  }

	render() {
		if (this.props.data.loading) {
			return <div>loading</div>;
		}

		if (this._isLoggedIn()) {
			return this.renderLoggedIn();
		} else {
			return this.renderLoggedOut();
		}
	}
}

Main.propTypes = {
	history: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
}

const userQuery = gql`
  query {
    user {
      id
    }
  }
`

export default graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(withRouter(App))