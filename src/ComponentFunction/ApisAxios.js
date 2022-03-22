import React, { useEffect } from 'react';
import axios from 'axios';

function ApisAxios(){

    useEffect(()=> {
        // axios.get('https://gorest.co.in/public/v2/users').then(res => {
        //     console.log("Data generada por el API", res.data);
        // }).catch(error => {
        //     console.log(error);
        // });

        get();
    }, []);

    function post(){
        let data = {
            "name": "Juan",
            "lastname": "Velez",
            "edad": 30
        };
        axios.post('http://localhost:3001/users', data).then(res => {
            console.log("Se agregó un registro");
            get();
        }).catch(error => {
            console.log(error);
        });
    }

    function get(){
        axios.get('http://localhost:3001/users').then(res => {
            console.log("Resultado", res.data);
        });
    }

    function put(id) {
        let data = {
            "name": "Juan",
            "lastname": "Velez",
            "edad": 30
        };

        axios.put('http://localhost:3001/users/' + id, data).then(res => {
            console.log("Se cambió con éxito");
            get();
        }).catch(error => {

        });
    }

    function deleteItem(id) {
        axios.delete('http://localhost:3001/users/' + id).then(res => {
            console.log("Se eliminó un registro");
            get();
        }).catch(error => {

        });
    }
    

    return(
        <div>
            <button onClick={post}>Guardar</button>
            <button onClick={() => put(1)}>Editar</button>
            <button onClick={() => deleteItem(2)}>Eliminar</button>
        </div>
    )


}

export default ApisAxios;