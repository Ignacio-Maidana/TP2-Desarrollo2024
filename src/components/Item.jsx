import './Item.css'
// import { useState } from 'react'

export function Item({item}) {
    return (
        <>
            {console.log("El item que esta llegando a Item es: " + JSON.stringify(item))}
            <div className='Tarjeta'>
                <h2>Producto: {item.name}</h2>
                <h2>Cantidad: {item.quantity}</h2>
            </div>
        </>
    )
}