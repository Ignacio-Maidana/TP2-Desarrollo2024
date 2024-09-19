import { useState } from 'react';
import './NewItem.css';

export function NewItem({addItem_Callback}) {

    const [countItem, setCount] = useState(0)
    const[nameItem, setName] = useState('')

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
            setName('')
            setCount(0)
        }
    }

    return(
        <>
        <header className='header-App'>
            <h1>Lista de Compras</h1>
        </header>

        <form onSubmit={controlador}>
            <input placeholder='Ingresar producto' type='text' value={nameItem} onChange={(e) => setName(e.target.value)}></input>
            <input type='number' placeholder='Cantidad' value={countItem} onChange={(e) => setCount(Number(e.target.value))}></input>

            <button type='button' onClick={()=>setCount(count => count + 1)}>+</button>
            <button type='button' onClick={()=>setCount(count => count <= 0 ? 0 : count-1)}>-</button>
            <button>Agregar a la Lista</button>
        </form>
        </>
    )
}