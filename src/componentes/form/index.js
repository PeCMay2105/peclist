import { useState } from 'react';
import './tarefas.css'

const FormTarefa = (props)=>{

    const [tarefa,setTarefa] = useState("novaTarefa");

    const configuraTarefa = (event)=>{
        setTarefa(event.target.value);

    }

    const envia = (event)=>{
        event.preventDefault();
        props.salvaTarefa(objetoTarefa)
        event.target.reset()
        
    }

    const objetoTarefa = {
        "conteudo": tarefa,
        "status":"aFazer"
    }

    return(
       <div className='caixaControle'>
        <form className='novaTarefa' onSubmit={event =>(envia(event))} >
            <input type='text' placeholder='adicionar nova tarefa...' onChange={configuraTarefa} onBlur={event => console.log(event.target.value)}></input>
            <button className='Criar'>+</button>
        </form>
       </div> 
    )
}

export default FormTarefa;