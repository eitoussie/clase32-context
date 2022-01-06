import { useContext } from 'react';
import { context } from '../../store/AppContext';
import './Header.css';



const Body = () => {
    const {setNombre} = useContext(context)
    return ( 
        <button className='btn-danger'onClick={()=>(setNombre('itzjak'))}>cambiar</button>
     );
}
 
export default Body;