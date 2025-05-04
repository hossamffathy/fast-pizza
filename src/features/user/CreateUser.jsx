import { useState } from "react";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default  function CreateUser(){


const [fullName, setFullName] = useState('');
const dispatch = useDispatch();
const navigate = useNavigate();
// const username=useSelector(state=>state.user.username)

function handleSubmit(e) {
  e.preventDefault();
  if (fullName === '') return;
  dispatch(updateName(fullName));
  navigate('/menu');
}
return (
<form onSubmit={handleSubmit} className="block p-10 text-center ">
      <p>👋 Welcome! Please start by telling us your name:</p>
      <input 
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        type="text"
        placeholder="Your full name"
        className=" border h-10 mt-5 w-72 rounded-full p-3 pl-5 transition-all duration-300 placeholder:text-sm focus:outline-yellow-400 "
      />
      {fullName && (
        <button
          to="/menu"
          className="text-bold m-auto mt-8 block w-fit rounded-full bg-yellow-400 pb-4 pl-6 pr-6 pt-4 text-sm font-semibold "
        >
          START ORDERING
        </button>
      )}
    </form>
)
}