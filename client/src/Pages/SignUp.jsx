import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-cyan-900 text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-3'>
        <input type='text' placeholder='username' className='text-slate-600 border p-3 rounded-lg ' id='username'/>
        <input type='email' placeholder='email' className='text-slate-600 border p-3 rounded-lg ' id='email'/>
        <input type='password' placeholder='password' className='text-slate-600 border p-3 rounded-lg ' id='password'/>

        <button className='bg-rose-900 p-2 my-4 text-center text-white uppercase rounded-xl hover:opacity-90 disabled:opacity-80'>
        Sign Up
      </button>

      </form> 
      <div className='flex gap-2 my-5'>
        <p>Already have an account ?</p>
        <Link to={"/login"}>
          <span className='text-blue-700'>
            Login
          </span>
        </Link>
      </div>
    </div>
  )
}
