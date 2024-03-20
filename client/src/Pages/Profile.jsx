import { useSelector } from "react-redux"

export default function Profile() {

  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-bold text-center my-7 text-sky-950'>Profile</h1>
      <form className="flex flex-col">
        <img src={currentUser.picture} alt='profile' 
        className="rounded-full h-24 w-24 object-cover cursor-pointer self-center my-4 "/>

        <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg my-4" />
        <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg my-4" />
        <input type="password" placeholder="password" id="password" className="border p-3 rounded-lg my-4" />

        <button className="bg-stone-500 text-cyan-950 font-extrabold uppercase p-3 rounded-2xl my-3
        hover:opacity-95 disabled:opacity-80">Update</button>

      </form>

      <div className=" flex justify-between mt-6">

        <span className="text-red-800 cursor-pointer font-bold">Delete Account</span>
        <span className="text-red-800 text-right font-bold cursor-pointer">Logout</span>

      </div>
    </div>
  )
}
