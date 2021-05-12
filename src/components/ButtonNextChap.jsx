

const ButtonNextChap = ({choices, callback})=>{
    return(
        <div>
            {
                choices.map((choice,index)=>{
                    return <button onClick={()=>callback(choice.target,choice.content)} key={index}>{choice.content}</button>
                })
            }
            
        </div>
    )
}

export default ButtonNextChap