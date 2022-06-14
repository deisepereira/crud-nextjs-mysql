import Form from '../components/Form'
function addUser() {  

    return (
    <div className="block mx-auto my-12 p-8 bg-white w-1/3 border border-gray-200 rounded-lg shadow-lg text-gray-800">    
         <h1 className="text-center text-3xl font-bold">Add new user</h1>
         <Form id='' name='' email='' phone='' func="Add">
         </Form>
       </div>
    )
  }
  
  export default addUser