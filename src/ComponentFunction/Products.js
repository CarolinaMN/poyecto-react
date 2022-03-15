import React, { useState, useEffect } from 'react';

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

    const [product, setProduct] = useState(arrayProducts);

    const [valueInput, setValueInput] = useState('');
    

    useEffect(() => {
        db();
    }, []);

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

    const deleteI = (codigo) => {
        let arrayTem = product.filter((art) => art.codigo !== codigo);
        setProduct(arrayTem);
    }

    return(
        <div>
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
                        <tr key={prod.codigo}>
                            <td>
                                {prod.codigo}
                            </td>
                            <td>
                                {prod.descripcion}
                            </td>
                            <td>
                                {prod.precio}
                            </td>
                            <td>
                                <button onClick={() => deleteI(prod.codigo)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            <br/>
            <button onClick={deleteItem}>Eliminar ultima fila</button>
            <button onClick={db}>Actualizar</button>
        </div>
    )

}

export default Products;