import React, { useState } from 'react';
import axios from '../../utils/axios';
import { setUserSession } from '../../utils/common'

function Login(props) {
    const name = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');
    const role = useFormInput('');
    const [error, setError] = useState(null);

    const handleLogin = () => {
        axios.post('/users/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
            role: role.value
        }).then((res) => {
            setUserSession(res.data.token, res.data.user)
            props.history.push('/profile')
        }).catch(error => {
            if (error.response.status === 409) setError('E-mail already registered');
            else setError("Something went wrong. Please try again later.");
        });
    }

    return (
        <div>
            Signup<br /><br />
            <div>
                Name<br />
                <input type="text" {...name} />
            </div>
            <div>
                Role<br />
                <input type="text" {...role} />
            </div>
            <div>
                E-Mail<br />
                <input type="text" {...email} />
            </div>
            <div>
                Password<br />
                <input type="password" {...password} />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value='Signup' onClick={handleLogin} /><br />
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;