import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onSubmitRegister = () => {
        fetch('https://secret-harbor-87790.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <h1 className="appname" size="50px">
                                    <font size="+5">
                                        B U R P E E
                                    <hr></hr>
                                    </font>
                                </h1>

                                <img src="images/img-01.png" alt="IMG" />
                            </div>

                            <div className="login100-form validate-form">
                                <span className="login100-form-title">
                                    Register
                                    <hr></hr>
                                </span>

                                <div className="wrap-input100" >
                                    <input
                                        className="input100 grow"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={this.onNameChange}
                                        />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="wrap-input100 " >
                                    <input
                                        className="input100 grow"
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        onChange={this.onEmailChange}
                                        />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
                            
                                <div className="wrap-input100" >
                                    <input
                                        className="input100 grow"
                                        type="password"
                                        name="pass"
                                        placeholder="Password"
                                        onChange={this.onPasswordChange}
                                        />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>                   

                                <div className="container-login100-form-btn">
                                    <button 
                                        onClick={this.onSubmitRegister} 
                                        className="login100-form-btn shadow-5 grow">
                                        Register
                                    </button>
                                </div>

                                <div className="text-center p-t-136">
                                    <p onClick={() => onRouteChange('signin')} className="txt2">
                                    <i className="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i>
                                     &nbsp; Back to Sign-in               
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
                <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
                <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
                <link rel="stylesheet" type="text/css" href="css/util.css" />
                <link rel="stylesheet" type="text/css" href="css/main.css" />
            </div>
        );
    }
}


export default Register;