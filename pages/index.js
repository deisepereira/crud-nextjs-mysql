const axios = require('axios')
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdDeleteOutline } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';


export async function getServerSideProps() {

  const {data:data} = await axios.get(`http://localhost:3000/api/users`) 
  
  return { 
    props: 
    { 
      data
    } 
  }
}

export default function Home({data}) {

  const router = useRouter()

  const handleDeleteUser = async(id) => {  
    await axios.delete(`http://localhost:3000/api/users/${id}`)
    router.push('/')  
  }

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">  
    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg mt-12">
    <table className="table-fixed w-full">
      <thead>
          <tr className="bg-violet-500 text-white">
            <th className="w-1/8 py-4 text-center">Id</th>
            <th className="w-1/4 py-4 text-center">Name</th>
            <th className="w-1/4 py-4 text-center">Email</th>
            <th className="w-1/4 py-4 text-center">Gender</th>
            <th className="w-1/8 py-4 text-center">Actions</th>          
          </tr>
          </thead>
          <tbody>
         {data.users.map((user) => (
            <tr key={user.id}>
             <td className="py-3 px-6 text-center">{user.id}</td>
             <td className="p-3 text-center">{user.name}</td>
             <td className="p-3 text-center">{user.email}</td> 
             <td className="p-3 text-center">{user.phone}</td>            
             <td className="p-3 text-center">
             <button className="bg-violet-500 text-white px-1 py-1 mx-1 rounded-sm"><Link href={`/updateUser/${user.id}`}><a><BsPencilSquare title="Update"/></a></Link></button>
             <button className="bg-violet-500 text-white px-1 py-1 mx-1 rounded-sm" onClick={() => handleDeleteUser(user.id)}><MdDeleteOutline title="Delete"/></button>
             </td>                 
          </tr>         
         ))}
        </tbody>  
    </table> 
    </div>  
    </div>
  )
}
