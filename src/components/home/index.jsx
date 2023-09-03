
import Button from '../common/button'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonAction from './ButtonAction'
import { useSelector } from 'react-redux'
const Home = ({count, setCount}) => {
  const counter = useSelector((state) => state.counter.value);

  return (
    <>
      <div>
        <a rel="noreference noreferrer" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       <Button count={count} setCount={setCount}>
       count is
       </Button>
       <h1>Counter React Redux: {counter}</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <ButtonAction/>
    </>
  )
}

export default Home