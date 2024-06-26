import { useContext } from 'react';
import { AuthConstext } from '../Context/AuthProvider';

const Home = () => {
  const authInfo = useContext(AuthConstext);
  console.log(authInfo);
  return (
    <div>
      <h2 className="text-3xl">This is Home: P{authInfo.name}</h2>
    </div>
  );
};

export default Home;
