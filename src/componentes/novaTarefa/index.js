import { useState } from 'react'
import './novaTarefa.css'
import '../CheckButton/index.js'
import {AiOutlineDelete} from 'react-icons/ai'
import CheckButton from '../CheckButton/index.js'
const NovaTarefa = (props)=>{

    const [button,setbutton] = useState('unchecked')

    return(
        <div className='caixaPrimaria'>
            
            <div className='cardAdicionado'>
                    
                    <p>{props.conteudo}<AiOutlineDelete className='deleteButton' onClick={(()=> props.onDelete(props.conteudo))}></AiOutlineDelete></p>
                    <CheckButton className='botao' funcaoSuperior ={() => props.onMarked("concluidas",props.conteudo)} setEstado={(estado) => setbutton(estado)} estado ={button}/>
            </div>
        </div>
    )
}

export default NovaTarefa;
