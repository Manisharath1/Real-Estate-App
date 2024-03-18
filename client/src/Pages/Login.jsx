import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


export default function Login() {

  const [formData, setFormData] = useState({})
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      setLoading(true);
    const res =await fetch('/service/auth/login', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
    if(data.success === false)
    {
      setError(data.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    setError(null);  
    navigate('/');
    } 
    
    catch (error) 
    {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-cyan-900 text-3xl text-center font-semibold my-7'>Reconnect with Us !</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

        <input type='email' placeholder='email' className='text-slate-600 border p-3 rounded-lg ' id='email' onChange={handleChange}/>
        <input type='password' placeholder='password' className='text-slate-600 border p-3 rounded-lg ' id='password' onChange={handleChange}/>

        <button disabled={loading} className='bg-rose-900 p-2 my-4 text-center text-white uppercase rounded-xl hover:opacity-90 disabled:opacity-80'>
        {loading ? 'Loading..' : 'LOGIN'}
      </button>

      </form> 
      <div className='flex gap-2 my-5'>

        <p>Don't have an account ?</p>
        <Link to={"/signup"}>

          <span className='text-blue-700'>
            Sign Up
          </span>

        </Link>

      </div>

      {error && <p className='text-red-500 mt-5'>{error}</p>}

    </div>
  )
}
