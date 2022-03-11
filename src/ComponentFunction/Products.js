import React, { useState } from 'react';

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


function Products() {

    const [product, setProduct] = useState(arrayProducts);

    const deleteItem = () => {
        if (product.length > 0) {
            let tempArray = Array.from(product);
            tempArray.pop();
            setProduct(tempArray);
        }
    }

    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Precio</th>
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
                        </tr>
                    ))}
                    
                </tbody>
            </table>

            <br/>

            <button onClick={deleteItem}>Eliminar ultima fila</button>
        </div>
    )

}

export default Products;