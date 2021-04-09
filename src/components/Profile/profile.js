import React from 'react';
import { getUser } from '../../utils/common'

function Profile(props){
    const user = getUser();
    return (
        <div>
            Name : {user.name}<br/>
        </div>
    );
}

export default Profile;