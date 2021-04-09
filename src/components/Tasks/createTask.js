import React, { useState } from 'react';
import axios from '../../utils/axios'
import { getToken } from '../../utils/common';

function Task(props) {
    const subject = useFormInput('');
    const details = useFormInput('');
    const time = useFormInput('');
    const points = useFormInput('');

    const handleSubmit = () => {
        axios.post('/tasks', {
            subject: subject.value,
            details: details.value,
            time: time.value,
            points: points.value
        }, {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        }).then((res) => {
            props.history.push('/tasks/' + res.data._id)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            Create Task<br /><br />
            <div>
                Subject<br />
                <input type="text" {...subject} />
            </div>
            <div>
                Details<br />
                <input type="textarea" {...details} />
            </div>
            <div>
                Time<br />
                <input type="text" {...time} />
            </div>
            <div>
                Points<br />
                <input type="text" {...points} />
            </div>
            <input type="button" value='Create' onClick={handleSubmit} /><br />
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

export default Task