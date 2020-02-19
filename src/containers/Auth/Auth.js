import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../views/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';
import { AuthForm, SignInAndSignUp, SignInTitle, SignInContainer } from './auth.styles'

const Auth = props => {
    const [authForm, setAuthForm] = useState({
        firstname: {
            elementType: 'input',
            elementConfig: {
                type: 'firstname',
                placeholder: 'Etunimi'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        lastname: {
            elementType: 'input',
            elementConfig: {
                type: 'lastname',
                placeholder: 'Sukunimi'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        username: {
            elementType: 'input',
            elementConfig: {
                type: 'username',
                placeholder: 'Käyttäjänimi'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Sähköposti'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Salasana'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    });

    const [authFormSignIn, setAuthFormSignIn] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Sähköposti'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Salasana'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    });

    const [isSignup, setIsSignup] = useState(true);

    const { authRedirectPath, onSetAuthRedirectPath } = props;

    useEffect(() => {
        if (authRedirectPath !== '/') {
            onSetAuthRedirectPath();
        }
    }, [authRedirectPath, onSetAuthRedirectPath]);

    const inputChangedHandler = (event, controlName) => {
            const updatedControls = updateObject(authForm, {
                [controlName]: updateObject(authForm[controlName], {
                    value: event.target.value,
                    valid: checkValidity(
                        event.target.value,
                        authForm[controlName].validation
                    ),
                    touched: true
                })
            });
            setAuthForm(updatedControls);
    };

    const inputSignInHandler =  (event, controlName) => {
        const updatedControls = updateObject(authFormSignIn, {
            [controlName]: updateObject(authFormSignIn[controlName], {
                value: event.target.value,
                valid: checkValidity(
                    event.target.value,
                    authFormSignIn[controlName].validation
                ),
                touched: true
            })
        });
        setAuthFormSignIn(updatedControls);
    };

    const submitHandler = (event) => {
        event.preventDefault();
            props.onAuth(authForm.email.value, authForm.password.value, isSignup, authForm.firstname.value, authForm.lastname.value, authForm.username.value);
    };

    const signInHandler = (event) => {
        event.preventDefault();
        props.onAuth(authFormSignIn.email.value, authFormSignIn.password.value, !isSignup);
    }

    const formElementsArray = [];
    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key]
        });
    }

    const formSignInElementsArray = [];
    for (let key in authFormSignIn) {
        formSignInElementsArray.push({
            id: key,
            config: authFormSignIn[key]
        });
    }

    let formSignUp = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => inputChangedHandler(event, formElement.id)} />
    ));

    let formSignIn = formSignInElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => inputSignInHandler(event, formElement.id)} />

    ));

    if (props.loading) {
        formSignUp = <Spinner />
        formSignIn = <Spinner />
    }

    let errorMessage = null;

    if (props.error) {
        errorMessage = <p>{props.error.message}</p>;
    }

    let authRedirect = null;
    if (props.isAuthenticated) {
        authRedirect = <Redirect to={props.authRedirectPath} />
    }

    let buttontext;

    if (isSignup) {
        buttontext = "Tallenna tiedot"
    } else {
        buttontext = "Kirjaudu"
    }

    return (
        <SignInAndSignUp>
            {authRedirect}
            <SignInContainer>
            {errorMessage}
            <SignInTitle>Minulla on jo tili</SignInTitle>
            <span>Kirjaudu sisään sähköpostilla ja salasanalla</span>
            <AuthForm onSubmit={signInHandler}>
                {formSignIn}
                <Button btnType="Success">{buttontext}</Button>
            </AuthForm>
            </SignInContainer>
            <SignInContainer>
            {errorMessage}
            <SignInTitle>Minulla ei ole tiliä</SignInTitle>
            <span>Luo tili sähköpostilla, käyttäjänimellä ja salasanalla</span>
            <AuthForm onSubmit={submitHandler}>
                {formSignUp}
                <Button btnType="Success">{buttontext}</Button>
            </AuthForm>
            </SignInContainer>
        </SignInAndSignUp>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup, firstname, lastname, username) =>
            dispatch(actions.auth(email, password, isSignup, firstname, lastname, username)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);