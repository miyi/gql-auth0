import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginAuth extends Component {
	constructor(props) {
		super(props);
		this._lock = new Auth0Lock(props.clientID, props.domain);
	}

	componentDidMount() {
		this._lock.on('authenticated', (authResult) => {

		})
	}

	_showLogin = () => {
		this._lock.show();
	}

	render() {
		return (
			<div>
				<button
					onClick={this._showLogin}
					className='dib pa3 white bg-blue dim pointer'
				>
					Login with Auth0
				</button>

			</div>
		)
	}
}

LoginAuth.propTypes = {
	clientId: PropTypes.string.isRequired,
	domain: PropTypes.string.isRequired,
	history: PropTypes.object.isRequired,
}

export default withRouter(LoginAuth);