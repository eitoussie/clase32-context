import { useContext } from 'react';
import { context } from '../../store/AppContext';
import './Body.css';



const Header = () => {
    const {nombre} = useContext(context)
    return ( 
        <div >
        <h3>mi nombre es {nombre}</h3>
        </div>
     );
}
 
export default Header;

