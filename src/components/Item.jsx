import { useState } from 'react'
import './Item.css'
// import { useState } from 'react'

export function Item({item, deleteItem_Callback, modifyItem_Callback, checkedList_Callback}) {

    const[quantityItem, setQuantityItem]=useState(Number(item.quantity))

    const [PopupOpen, setPopupOpen] = useState(false)

    const openPopUp = () => setPopupOpen(true)
    const closePopUp = () => setPopupOpen(false)
    

    return (
        <div>
            <div className='TarjetaComprar'>
                <h2>Productos a Comprar</h2>
                <h3>Producto: {item.name}</h3>
                <h3>Cantidad: {item.quantity}</h3>
                <div>
                    <button name='deleteItem' type='button' onClick={()=>deleteItem_Callback(item.id)}>Borrar</button>
                    <button name='editItem' type='button' onClick={openPopUp}>Editar</button>
                    {item.isPurchase ?
                            <button onClick={()=>checkedList_Callback(item.id)}>Descomprar</button>
                        :   <button onClick={()=>checkedList_Callback(item.id)}>Comprar</button>
                    }
                </div>
            </div>

            {PopupOpen && (
                <div>
                    <form onSubmit={(e)=>modifyItem_Callback(e, closePopUp, item.id)}>
                        <input name="nameItem" placeholder='Ingresar producto' type='text' defaultValue={item.name}></input>
                        <input name="quantityItem" placeholder='Cantidad' type='number' value={quantityItem} onChange={(e) => setQuantityItem(Number(e.target.value))}></input>

                        <button type='button' onClick={()=>setQuantityItem(count => count + 1)}>+</button>
                        <button type='button' onClick={()=>setQuantityItem(count => (count <= 0 ? 0 : count-1))}>-</button>

                        <button>Guardad cambios</button>
                        <button onClick={closePopUp}>Cancelar</button>
                    </form>
                </div>
            )

            }
        </div>
    )
}