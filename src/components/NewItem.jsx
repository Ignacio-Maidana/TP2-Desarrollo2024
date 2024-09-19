import { useState } from 'react';
import './NewItem.css';

export function NewItem({addItem_Callback}) {

    const [countItem, setCountItem] = useState(0)
    const[nameItem, setNameItem] = useState('')

    const controlador = (e) => {
        e.preventDefault();

        if(nameItem === '') {
            alert("No puede ingresar un producto vacío")
        }
        else if (countItem === 0) {
            alert("Ingrese una cantidad mayor a 0")
        }
        else {
            addItem_Callback(e)
            setNameItem('')
            setCountItem(0)
        }
    }

    return(
        <>
        <header className='header-App'>
            <h1>Lista de Compras</h1>
        </header>

        <form onSubmit={controlador}>
            <input name="nameItem" placeholder='Ingresar producto' type='text' value={nameItem} onChange={(e) => setNameItem(e.target.value)}></input>
            <input name="countItem" placeholder='Cantidad' type='number' value={countItem} onChange={(e) => setCountItem(Number(e.target.value))}></input>

            <button type='button' onClick={()=>setCountItem(count => count + 1)}>+</button>
            <button type='button' onClick={()=>setCountItem(count => count <= 0 ? 0 : count-1)}>-</button>
            <button>Agregar a la Lista</button>
        </form>
        </>
    )
}