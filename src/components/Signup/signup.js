import React, { useState } from 'react';
import axios from '../../utils/axios';
import { setUserSession } from '../../utils/common'

function Login(props) {
    const name = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');
    const role = useFormInput('');

    const handleLogin = () => {
        axios.post('/users/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
            role: role.value
        }).then((res) => {
            setUserSession(res.token, res.user)
        })
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