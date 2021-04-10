import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { getToken, removeUserSession } from '../../utils/common'

function Profile(props) {
    const [user, setUser] = useState({})
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        axios.get('/users/profile', {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        }).then((res) => {
            setUser(res.data)
        }).catch((error) => {
            console.log(error)
        })
        axios.get('/users/tasks', {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        }).then((res) => {
            console.log(res.data)
            setTasks(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    return (
        <div>
            Name : {user.name}<br />
            E-Mail : {user.email}<br />
            Points : {user.points}<br />
            Tasks : <br/>
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    );
}

export default Profile;