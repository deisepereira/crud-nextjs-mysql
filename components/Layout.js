import Navbar from './Navbar'
import Head from 'next/head'

function Layout({children}){
    return (
        <div className="bg-gray-100 min-h-screen">
           <Head>            
                <title>User Management System</title>
           </Head>      
           <Navbar/>
           <main>{children}</main>       
        </div>
    )
}

export default Layout