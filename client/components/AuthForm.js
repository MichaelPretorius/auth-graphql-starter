import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props)

        this.state = { email: '', password: '' };
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="row">
                <form className="col s5" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input
                            placeholder="Email"
                            onChange={e => this.setState({ email: e.target.value })}
                            value={this.state.email}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            type="password"
                            onChange={e => this.setState({ password: e.target.value })}
                            value={this.state.password}
                        />
                    </div>

                    <div className="errors">
                        {this.props.errors.map(err => <div key={err}>{err}</div>)}
                    </div>

                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;
