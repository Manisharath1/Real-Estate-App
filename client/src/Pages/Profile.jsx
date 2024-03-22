import { useSelector } from "react-redux"
import { useRef, useState, useEffect } from "react"
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { app } from "../firebase";

export default function Profile() {

  const fileRef = useRef(null);
  const {currentUser} = useSelector((state) => state.user);
  const[file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  

  //firebase storage content:
  // allow read;
  // allow write: if
  // request.resource.size < 2 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(() => {
    if(file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePerc(Math.round(progress));
    },
    (error)=>{
      setFileUploadError(true);
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then
      ((downloadURL)=> {
        setFormData({...formData, picture: downloadURL})
      })
    }
    );
  };



  return (

    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-bold text-center my-7 text-sky-950'>Profile</h1>
      <form className="flex flex-col">

        <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/*"/>

        <img onClick= {()=>fileRef.current.click()} 
        src={formData.picture || currentUser.picture} 
        alt='profile' 

        className="rounded-full h-24 w-24 object-cover cursor-pointer self-center my-4 "/>

        <p className="text-sm self-center" >
          {
            fileUploadError ? (
            <span className="text-red-700">Error Image Upload (Image must be less than 2Mb)</span> ) :
            filePerc > 0 && filePerc < 100 ? (
              <span className="text-slate-700">{ `Uploading ${filePerc}%`}</span>
            ) :
              filePerc === 100 ? (
              <span className="text-green-700">Uploaded successfully !</span>
              ) : (
                ''
              )}
        </p>

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
