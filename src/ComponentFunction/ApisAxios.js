import React, { useEffect } from 'react';
import axios from 'axios';

function ApisAxios(){

    useEffect(()=> {
        axios.get('https://gorest.co.in/public/v2/users').then(res => {
            console.log("Data generada por el API", res.data);
        }).catch(error => {
            console.log(error);
        });
    });

    function post(){

    }

    function get(){

    }

    

    return(
        <div>
        </div>
    )


}

export default ApisAxios;