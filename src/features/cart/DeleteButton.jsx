import { useDispatch } from "react-redux"
import { deleteItem } from "./cartSlice"
export default function DeleteButton ({id}){
    const dispatch=useDispatch()
    return <button onClick={()=>dispatch(deleteItem(id))}  className="uppercase bg-yellow-400 hover:bg-yellow-300  rounded-full p-2 pl-2 pr-4  text-sm  font-semibold ">delete </button>
}