import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'


const Home = () => {
  const { theme, data } = useContext(ContextGlobal)


  return (
    <main className>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map(item => (
          <Card key={item.id} name={item.name} username={item.username} id={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;