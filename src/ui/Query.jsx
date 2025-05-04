import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Query() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    navigate(`order/${query}`);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="w-64 rounded-full bg-yellow-100 p-1 pl-4 
     transition-all duration-300 ease-in-out focus:outline-yellow-400 md:focus:w-80"
        placeholder="Search order #"
      />
    </form>
  );
}
