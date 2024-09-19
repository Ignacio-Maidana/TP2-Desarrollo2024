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
            <p>No hay cosas para comprar...</p>
          </div>
          :
          list.map((itemMap) => (
            <Item key = {itemMap.id} 
                  item={itemMap}/>
          ))
        }
      </ul>
      {console.table(list)}
    </>
  );
}

export default App;
