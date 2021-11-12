import { createContext , useState  } from "react";
import { usersData } from '../data'

export const GlobalContext = createContext()


export const Provider = ({ children })=>{
const [ query , setQuery ] = useState('')
const [ name , setName ] = useState('')
let  [arr , setArr ] = useState(usersData)
const [ users , setUsers ] = useState(usersData)

function handleFilter(e, q , name){
    e.preventDefault()
if(name !== ''){
 handleName()   
}else{

switch (q) {
    case 'All': 
    setArr(users)
    break;
    case 'Active': 
        setArr(users.filter((user)=>{
            return  user.isActive === !!q
            }))
         
        break;
    case 'Inactive': 
         setArr(users.filter((user)=> user.isActive === !q))
         
        break;
    default:
        break;
}
}
}
function handleName(){
    setArr(users.filter((user)=>(
        user.name.toLowerCase().includes(name)
    )))
    console.log('user' ,users[0].name.toLowerCase() )
    setName('')
}


const value={query , setQuery,arr , setArr , users , setUsers , handleFilter , name , setName , handleName }
    return(
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
          

    )

}