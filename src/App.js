import { useState } from 'react';
import './App.css';
import {NewItem} from './components/NewItem.jsx';
import { v4 as uuidv4 } from 'uuid';
import { Item } from './components/Item.jsx'

function App() {
  
  const [list, setList] = useState([])

  function addItem(e) {
    
    const item = new FormData(e.target)
    let name = item.get("nameItem")
    let quantity = item.get("countItem")
    let isPurchase = false

    const newItem = {
      id: uuidv4(), 
      name, 
      quantity, 
      isPurchase
    }

    setList((prevList)=>[...prevList, newItem])
    e.target.reset();
  }

  function deleteItem(id){
    setList(list.filter(item => item.id !== id))
  }

  function modifyItem(e, closePopUp, id){
    e.preventDefault()

    const item = new FormData(e.target)
    let name = item.get("nameItem")
    let quantity = item.get("quantityItem")

    if(name === '') {
      alert("No se puede ingresar un producto vacio")
    }
    else if(quantity === 0) {
      alert("No se puede ingresar una cantidad nula")
    }
    else {
      setList((prevList) => prevList.map((item) => 
        (item.id === id
        ? {...item,name,quantity}
        : item)));
    closePopUp();
    }
  }
  
  function checkedItem(id) {
    console.log("Check!");
    setList((prevList) => {
        const updatedList = prevList.map((item) => 
            item.id === id 
            ? { ...item, isPurchase: !item.isPurchase}
            : item
        );

        const uncheckedItems = updatedList.filter(item => !item.isPurchase)
        const checkedItems = updatedList.filter(item => item.isPurchase)
        
        return [...uncheckedItems, ...checkedItems]
    })
}

  return(
    <>
      <div className='App'>
        <NewItem addItem_Callback={addItem}/>
      </div>

      <ul>
        {
          list.length === 0
          ?
          <div className='noItems'>
            <p>No hay productos en la lista para comprar...</p>
          </div>
          :
          list.map((itemMap) => (
            <Item key = {itemMap.id} 
                  item={itemMap}
                  deleteItem_Callback={deleteItem}
                  modifyItem_Callback={modifyItem}
                  checkedList_Callback={checkedItem}/>
          ))
        }
      </ul>
    </>
  );
}

export default App;
