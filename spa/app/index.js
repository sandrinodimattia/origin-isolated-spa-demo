import React from 'react';
import ReactDOM from 'react-dom';

import getClient from './client';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
    };
  }

  login = async (e) => {
    e.preventDefault();

    const client = await getClient();
    await client.login();

    this.setState({
      result: '',
    });
  };

  logout = async (e) => {
    e.preventDefault();

    const client = await getClient();
    await client.logout();

    this.setState({
      result: '',
    });
  };

  getUser = async (e) => {
    e.preventDefault();

    try {
      const client = await getClient();
      const result = await client.getUser();

      this.setState({
        result: JSON.stringify(result, null, 2),
      });
    } catch (e) {
      this.setState({
        result: JSON.stringify(e, null, 2),
      });
    }
  };

  getShows = async (e) => {
    e.preventDefault();

    try {
      const client = await getClient();
      const result = await client.getShows();

      this.setState({
        result: JSON.stringify(result, null, 2),
      });
    } catch (e) {
      this.setState({
        result: JSON.stringify(e, null, 2),
      });
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="mb-4">
            <form>
              <div>
                <h1 className="h1 mb-3font-weight-normal">Multi Tenant Spa</h1>
                <p>
                  Shows how to interact with your API and Auth0 using an{' '}
                  <strong>Isolated Origin</strong>
                </p>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={this.login}
              >
                Login
              </button>
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={this.logout}
              >
                Logout
              </button>
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={this.getUser}
              >
                Get User
              </button>
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={this.getShows}
              >
                Get TV Shows
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="mb-12 h2">Result</div>
        </div>
        <div className="row">
          <div className="mb-12">
            <div>
              <pre style={{ display: 'block', whiteSpace: 'pre-wrap' }}>
                <code>{this.state.result}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
