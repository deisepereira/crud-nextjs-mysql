
import prisma from './client'

export default async function handler(req, res) {    

    switch(req.method){
      case 'GET': return await getUser(req,res)

      case 'PUT': return await updateUser(req,res)      

      case 'DELETE': return await deleteUser(req,res)            
  } 
    
  }

  const getUser = async (req,res) => {
    
    let {userId} = req.query

    userId = parseInt(userId)

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })    

    return res.status(200).json({user})

}

  const updateUser = async (req,res) => {
    const {name,email,phone} =req.body;    
    let {userId} = req.query

    userId = parseInt(userId)

    const updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: name,
        email: email,
        phone: phone
      },
    })     

    return res.status(200).json({updateUser})

}

const deleteUser = async (req,res) => {  
  
  let {userId} = req.query

  userId = parseInt(userId)

  const deleteUser = await prisma.user.delete({
    where: {
      id: userId,
    },
  })  

  return res.status(200).json({deleteUser})
}