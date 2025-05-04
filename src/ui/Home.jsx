import CreateUser from '../features/user/CreateUser';
import Button from './Button';

import { useSelector } from 'react-redux';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <main>
      <div className="md:text-3xl text-xl mx-auto flex max-w-3xl justify-center pt-20 text-center">
        <h1 className=" font-semibold">
          <span className=" ">The best pizza.</span>
          <br />
          <span className=" text-yellow-500  ">
            Straight out of the oven, straight to you.
          </span>
        </h1>
      </div>
      {username == '' ? <CreateUser /> : <Button />}
    </main>
  );
}

export default Home;
