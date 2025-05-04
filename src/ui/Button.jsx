import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
export default function  Button (){
    const username=useSelector(state=>state.user.username)
    return <Link to="/menu" className="bg-yellow-400 block w-fit  p-4 rounded-full mt-20 m-auto hover:bg-yellow-300 uppercase duration-300 font-bold text-sm"> continu ordering , {username}</Link>
}