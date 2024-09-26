import { useState } from 'react';
import './NewItem.css';
import {Buttons} from './Buttons.jsx'

export function NewItem({addItem_Callback}) {

    const [countItem, setCountItem] = useState(1)
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
            setCountItem(1)
        }
    }

    return(
        <>
        <header className='header-App'>
            <h1>Lista de Compras</h1>
        </header>

        <form className='form' onSubmit={controlador}>
            <input className='inputNewItem' name="nameItem" placeholder='Ingresar producto' type='text' value={nameItem} onChange={(e) => setNameItem(e.target.value)}></input>
            <input className='inputNewItem' name="countItem" placeholder='Cantidad' type='number' value={countItem} min="1"onChange={(e) => setCountItem(Number(e.target.value))}></input>

            <div className="buttons">
                <Buttons count={{countItem, setCountItem}}/>
            </div>
        </form>
        </>
    )
}