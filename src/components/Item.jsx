import { useState } from 'react'
import './Item.css'

export function Item({item, deleteItem_Callback, modifyItem_Callback, checkedList_Callback}) {

    const[quantityItem, setQuantityItem]=useState(Number(item.quantity))

    const [PopupOpen, setPopupOpen] = useState(false)

    const openPopUp = () => setPopupOpen(true)
    const closePopUp = () => setPopupOpen(false)
    

    return (
        <div>
            <div className='CardBuy'>
                <div className="Tittle">
                    <h2 className={`${item.isPurchase ? 'itemChecked' : ''}`}>Producto: {item.name}</h2>
                    <h2 className={`${item.isPurchase ? 'itemChecked' : ''}`}>Cantidad: {item.quantity}</h2>
                </div>
                <div className='containerButtons'>
                    <button className='deleteItem' name='deleteItem' type='button' onClick={()=>deleteItem_Callback(item.id)}>Borrar</button>
                    <button className='editItem' name='editItem' type='button' onClick={openPopUp}>Editar</button>
                    {item.isPurchase ?
                            <button className='desbuyItem' onClick={()=>checkedList_Callback(item.id)}>Descomprar</button>
                        :   <button className='buyItem' onClick={()=>checkedList_Callback(item.id)}>Comprar</button>
                    }
                </div>
            </div>

            {PopupOpen && (
                <div className={`windowPopup ${PopupOpen ? 'show' : ''}`}>
                    <div className="containerPopup">
                        <form onSubmit={(e)=>modifyItem_Callback(e, closePopUp, item.id)}>
                            <input className='inputNewItem' name="nameItem" placeholder='Ingresar producto' type='text' defaultValue={item.name}></input>
                            <input className='inputNewItem' name="quantityItem" placeholder='Cantidad' type='number' value={quantityItem} min="1" onChange={(e) => setQuantityItem(Number(e.target.value))}></input>

                            <button className='buttonIncrement' type='button' onClick={()=>setQuantityItem(count => count + 1)}>+</button>
                            <button className='buttonDecrement' type='button' onClick={()=>setQuantityItem(count => (count <= 0 ? 0 : count-1))}>-</button>

                            <button className='saveButton'>Guardar cambios</button>
                            <button className='cancelButton' onClick={closePopUp}>Cancelar</button>
                        </form>
                    </div>
                </div>
            )
            }
        </div>
    )
}