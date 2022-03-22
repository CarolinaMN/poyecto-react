import React, { useState, useEffect, useContext } from 'react';
import { ContextT } from '../context';
import Counter from './Counter';
import axios from 'axios';

const arrayProducts = 
[{
    codigo: 1, 
    descripcion: 'papas',
    precio: 12.52
 },{
    codigo: 2, 
    descripcion: 'naranjas',
    precio: 21
 },{
    codigo: 3, 
    descripcion: 'peras',
    precio: 18.20
 }];


function Products(props) {

    const [product, setProduct] = useState([]);

    const [valueInput, setValueInput] = useState('');

    const contextHook = useContext(ContextT);
    

    useEffect(() => {
       loadAll();
    }, []);

    const loadAll = () => {
        axios.get('http://localhost:3001/products').then(res => {
           setProduct(res.data);
        }).catch(error => {

        });
    }

    const db = () => {
        alert("Actualizar base de datos")
    }

    const deleteItem = () => {
        if (product.length > 0) {
            let tempArray = Array.from(product);
            tempArray.pop();
            setProduct(tempArray);
        }
    }

    const deleteI = (id) => {
        // let arrayTem = product.filter((art) => art.codigo !== codigo);
        axios.delete('http://localhost:3001/products/' + id).then(res => {
            loadAll();
        }).catch(error => {
            alert("No se pudo elminar");
        });
        // setProduct(arrayTem);
    }

    return(
        <div>
            <h1>{contextHook}</h1>
            <h1>{props.title}</h1>
            <input type="text" onInput={(event) => setValueInput(event.target.value)}></input>
            <p>{valueInput}</p>

            <table border="1">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { product.map( prod => (
                        <tr key={prod.id}>
                            <td>
                                {prod.id}
                            </td>
                            <td>
                                {prod.descripcion}
                            </td>
                            <td>
                                {prod.precio}
                            </td>
                            <td>
                                <button onClick={() => deleteI(prod.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            <br/>
            <button onClick={deleteItem}>Eliminar ultima fila</button>
            <button onClick={db}>Actualizar</button>
            <br/>
        </div>
    )

}

export default Products;