import React, { useState } from 'react';
import axios from '../../utils/axios';
import { setUserSession } from '../../utils/common'

function Login(props) {
  const email = useFormInput('');
  const password = useFormInput('');

  // handle button click of login form
  const handleLogin = () => {
    axios.post('/users/login', {
      email: email.value,
      password: password.value
    }).then((res) => {
      setUserSession(res.data.token, res.data.user)
    })
  }

  return (
    <div>
      Login<br /><br />
      <div>
        E-Mail<br />
        <input type="text" {...email} />
      </div>
      <div>
        Password<br />
        <input type="password" {...password} />
      </div>
      <input type="button" value='Login' onClick={handleLogin} /><br />
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