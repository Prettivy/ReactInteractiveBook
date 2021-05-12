// State
import { useState } from 'react'

const Button = ({text,callback})=>{
    return (
        <button onClick={callback}>{text}</button>
    )
}

const Compteur = ()=>{
    // const state = useState(0)
    // console.log(state)
    // const setCount = state[1]
    // let count = state[0]
    const [count,setCount] = useState(0)


    const callback = (x)=>{
        setCount(count+x)
    }


    return (
        <div>
            <h1>Page Compteur</h1>
            <p>Valeur du compteur: {count}</p>
            <Button text="Incrémenter" callback={()=>callback(1)}
            />
            <Button text="Décrémenter" callback={()=>callback(-1)}/>
        </div>
    )
}

export default Compteur