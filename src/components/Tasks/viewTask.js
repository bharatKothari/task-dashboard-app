import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'
import { getToken } from '../../utils/common';

function Task(props) {
    const [task, setTask] = useState({})
    useEffect(() => {
        axios.get('/tasks/' + props.match.params.id, {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        }).then((res) => {
            setTask(res.data)
        }).catch((error) => {
            console.log(error)
        })
    },[])
    return (
        <div>
            Subject : {task.subject}<br />
            Details : {task.details}<br />
            Time : {task.time}<br />
            Points : {task.points}<br />
        </div>
    )
}

export default Task