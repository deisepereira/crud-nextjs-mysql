import Link from 'next/link'

function Navbar(){
    return (
        <nav className="flex py-5 bg-violet-500 text-white px-24">          
            <div className="w-1/2 px-12 mr-auto">               
                <h1 className="text-2xl font-bold">User Management System</h1>
            </div>
            <ul className="w-1/2 px-16 ml-auto flex justify-end pt-1">
                <li className="nav-item px-4">
                    <Link href="/"><a className="nav-link font-semibold hover:bg-violet-700 py-3 px-4 rounded-md">All users</a></Link>
                </li>             
                <li className="nav-item px-4">
                    <Link href="/addUser"><a className="nav-link font-semibold border-2 hover:text-violet-700 hover:bg-white py-3 px-4 rounded-md">Add new user</a></Link>
                </li>
            </ul>           
        </nav>
    )
}

export default Navbar