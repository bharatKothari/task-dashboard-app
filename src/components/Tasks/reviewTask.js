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
    }, [])

    const handleSubmit = (e) => {
        const status = e.target.value
        axios.put('/tasks/'+props.match.params.id+'/review',{
            status:status
        },{
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        })
    }

    return (
        <div>
            Subject : {task.subject}<br />
            Details : {task.details}<br />
            Time : {task.time}<br />
            Points : {task.points}<br />
            Creation Date:{task.creationDate}<br />
            Submission : {task.submissions}<br />
            Attachments : {task.attachments}<br />
            <input type="button" value='Accepted' onClick={handleSubmit} /><br />
            <input type="button" value='Rejected' onClick={handleSubmit} /><br />
        </div>
    )
}

export default Task