import './Item.css'
// import { useState } from 'react'

export function Item({item}) {
    return (
        <>
            <div className='Tarjeta'>
                <h2>Producto: {item.name}</h2>
                <h2>Cantidad: {item.quantity}</h2>
            </div>
        </>
    )
}