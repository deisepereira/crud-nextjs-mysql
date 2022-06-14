const axios = require('axios')
import Form from '../../components/Form'

export const getServerSideProps = async (context) => {  
  
  const {data:data} = await axios.get(`http://localhost:3000/api/users/${context.query.userId}`)
  
  return { 
    props: 
    { 
      data
    } 
  }
}

function UpdateUser({data}) {  

    return (
    <div className="block mx-auto my-12 p-8 bg-white w-1/3 border border-gray-200 rounded-lg shadow-lg text-gray-800">
       <h1 className="text-center text-3xl font-bold">Update user</h1>    
         <Form id={data.user.id} name={data.user.name} email={data.user.email} phone={data.user.phone}  func="Update">
         </Form>
       </div>
    )
  }
  
  export default UpdateUser