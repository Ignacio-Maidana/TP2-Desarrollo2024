
import './Buttons.css';

export function Buttons({count}){

    const handleIncrement = () => {
        console.log('Current count:', count);
        if (typeof count.setCountItem === 'function') {
            count.setCountItem(prevCount => prevCount + 1);
        } else {
            console.error('setCountItem is not a function');
        }
    };

    const handleDecrement = () => {
        if (typeof count.setCountItem === 'function') {
            count.setCountItem(prevCount => prevCount <= 0 ? 0 : prevCount - 1);
        } else {
            console.error('setCountItem is not a function');
        }
    };

    return (
        <>
            <button className='buttonIncrement' type='button' onClick={handleIncrement}>+</button>
            <button className='buttonDecrement' type='button' onClick={handleDecrement}>-</button>
            <button className='sumbit'>Agregar a la Lista</button>
        </>
    );
}