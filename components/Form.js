import {useState} from 'react'
import { useRouter } from 'next/router'
const axios = require('axios')

function Form(props){  
    const [name, setName] = useState(props.name)
    const [email, setEmail] = useState(props.email) 
    const [phone, setPhone] = useState(props.phone)  
    
    const router = useRouter()
 
    async function handleSubmit(event) {
        event.preventDefault()       
        
        if(props.func === "Update") {                 

             await axios.put(`http://localhost:3000/api/users/${props.id}`, {
            name,email,phone
          })

        } else {

            await axios.post(`http://localhost:3000/api/users`, {
              name,email,phone
          }) 

        }
        
        router.push('/') 
    }

    return (    
     <form onSubmit={handleSubmit} className="mt-4">
        <input 
          className="border border-gray-200 rounded-md bg-gray-200 w-full text-lg placeholder-gray-500 p-2 my-2 focus:bg-white"
          placeholder={"User name"} type="text"
          value={name}
          onChange={({target}) => setName(target.value)}
        ></input> 
        <input 
          className="border border-gray-200 rounded-md bg-gray-200 w-full text-lg placeholder-gray-500 p-2 my-2 focus:bg-white"
          placeholder={"User email"} type="email"
          value={email}
          onChange={({target}) => setEmail(target.value)}
        ></input>   
        <input 
          className="border border-gray-200 rounded-md bg-gray-200 w-full text-lg placeholder-gray-500 p-2 my-2 focus:bg-white"
          placeholder="User phone number" type="text"
          value={phone}
          onChange={({target}) => setPhone(target.value)}
        ></input >          
        <button className="rounded-md bg-violet-500 w-full text-lg text-white font-semibold p-2 my-3 hover:bg-violet-600 focus:bg-violet-700" type="submit">{props.func}</button>
     </form>   
    )
}

export default Form