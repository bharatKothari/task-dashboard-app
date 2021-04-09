import React, { useState } from 'react';
import axios from '../utils/axios';
import {setUserSession} from '../utils/common'

function Login(props) {
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
      axios.post('/users/login',{
          email:email.value,
          password:password.value
        })
        .then((res) => {
            setUserSession(res.token,res.user)
        })
  }

  return (
    <div>
      Login<br /><br />
      <div>
        E-Mail<br />
        <input type="text" {...email} />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
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