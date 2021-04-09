import React from 'react';
import { getUser, removeUserSession } from '../../utils/common'

function Profile(props) {
    const user = getUser();
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    return (
        <div>
            Name : {user.name}<br />
            E-Mail : {user.email}<br />
            Points : {user.points}<br />
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    );
}

export default Profile;