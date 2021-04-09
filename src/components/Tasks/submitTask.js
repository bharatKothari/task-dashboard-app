import React, { useState } from 'react';
import axios from '../../utils/axios';
import {getToken} from '../../utils/common';

function Task(props) {
    const files = useFileUpload([])
    const handleUpload = () => {
        var formData = new FormData();
        console.log(files)
        for(const file of files['arr']){
            formData.append('files',file)
        }
        axios.put('/tasks/'+props.match.params.id,formData,{
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        })
    }
    return (
        <div>
            <input type='file' multiple {...files} />
            <input type="button" value='Upload' onClick={handleUpload} /><br />
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

export default Task