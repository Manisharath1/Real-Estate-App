import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='bg bg-teal-500 shadow-md'>
        <div className='flex justify-between items-center max-w-16xl mx-auto p-3'>

            <Link to="/">
            <h1 className='font-extrabold text-l sm:text-xl flex flex-wrap'>
                <span className='text-slate-500 '>Real</span>
                <span className='text-slate-600'>Estate</span>
            </h1>
            </Link>

            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-500'/>
            </form>

            <ul className='flex gap-6'>
            <Link to="/">
                <li className='font-semibold hidden sm:inline text-indigo-500 hover:italic 
                hover:text-lime-600 hover:font-bold'>Home</li>
            </Link>

            <Link to="/about">
                <li className='font-semibold hidden sm:inline text-indigo-500 hover:italic 
                hover:text-lime-600  hover:font-bold'>About</li>
            </Link>

            <Link to="/contact">
                <li className='font-semibold hidden sm:inline text-indigo-500 hover:italic 
                hover:text-lime-600  hover:font-bold'>Contact</li>
            </Link>

            <Link to="/login">
                <li className='font-semibold sm:inline text-indigo-500 hover:italic 
                hover:text-lime-600 hover:font-bold'>Login</li>
            </Link>  
            </ul>
        </div>

    </header>
  )}
