import { useSelector, useDispatch } from "react-redux";
import {incremant , descremant} from '../app/features/counter/counterSlice'

const Counter = () => {
    //Read the data from the 'Store'
    const count = useSelector((state) => state.counter.value)

    //changing the data by sending "actions" to the store
    const dispatch = useDispatch() 

  return <div>
  <h1>{count}</h1>
  <button onClick={()=> dispatch(incremant())}>+</button>
  <button onClick={()=> dispatch(descremant())}>-</button>
  
  </div>
  
}

export default Counter

