import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import './signin.style.scss';

const Signin = () => (
    <div className="signin">
        <SignIn />
        <SignUp />
    </div>
)

export default Signin;