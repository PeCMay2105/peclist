import './novaTarefa.css'

const NovaTarefa = (props)=>{

    return(
        <div className='caixaPrimaria'>
            <div className='cardAdicionado'>
                    <p>{props.conteudo}</p>
                    <button onClick={()=> props.onMarked("concluidas")}></button>
            </div>
        </div>
    )
}

export default NovaTarefa;
