import prisma from './client'

export default async function handler(req, res) {

    switch(req.method){
        case 'GET': return await getUsers(req,res)

        case 'POST': return await addUser(req,res)            
    }
}

const addUser= async (req,res) => {

    const {name,email,phone}=req.body;   

    const user = await prisma.user.create({
             data: {
            name: name,
            email: email,
            phone: phone         
            },
            })       
    
    return res.status(201).json({user})

}

const getUsers = async (req,res) => {

    const users = await prisma.user.findMany()     

    return res.status(200).json({users})
}
  