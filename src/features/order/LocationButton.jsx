import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from '../user/userSlice';

export default function LocationButton() {
  const [position, setPosition] = useState(null);
  const [isLoading,setLoading]=useState(false)
 
  const dispatch = useDispatch();
  useEffect(() => {
    if (!position) return;
    setLoading(true)
    async function location() {
       
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.latitude}&lon=${position.longitude}&format=json`
      );
      const data = await res.json();
      
      dispatch(setLocation(data.address));
      setLoading(false)
    }
    location();
  }, [position]);

  function getlocation(e) {
    e.preventDefault();

    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition((postion) => {
      const { latitude, longitude } = postion.coords;
      setPosition({ latitude, longitude });
    });
  }

  return (
    <button
    onClick={(e) => getlocation(e)}
    disabled={isLoading}
    className={`absolute right-[3px] rounded-full bg-yellow-400 px-4 py-2 uppercase 
      hover:bg-yellow-300 disabled:bg-gray-400 disabled:cursor-not-allowed`}
  >
    {isLoading ? 'Loading...' : 'Get Position'}
  </button>
  
  );
}
