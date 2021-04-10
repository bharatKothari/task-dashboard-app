import React, { useState,useEffect } from 'react';
import axios from '../../utils/axios';
import {getToken} from '../../utils/common';

function Task(props) {
    const [task, setTask] = useState({})
    const files = useFileUpload([])
    const submission = useFormInput('')
    const handleUpload = () => {
        var formData = new FormData();
        for(const file of files['arr']){
            formData.append('files',file)
        }
        formData.append('submission',submission)
        axios.put('/tasks/'+props.match.params.id,formData,{
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        })
    }
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
            Submission : <input type="text" {...submission} /><br />
            <input type='file' multiple {...files} />
            <input type="button" value='Submit' onClick={handleUpload} /><br />
        </div>
    )
}

const useFileUpload = initialeValue => {
    const [arr, addFile] = useState(initialeValue);
    console.log(arr)
    const handleChange = e => {
        addFile(e.target.files)
        console.log(arr)
    }
    return {
        arr,
        onChange: handleChange
    }
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