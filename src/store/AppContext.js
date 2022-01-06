import react,{useState, createContext} from "react"

export const context = createContext(null)
const UserProvider =({children}) => {
    const [nombre, setNombre] = useState('');
    
    return(
        <context.Provider value = {{nombre, setNombre}}>
        {children}
        </context.Provider>
    )
}

export default UserProvider