import './novaTarefa.css'

const NovaTarefa = (props)=>{

    return(
        <div className='caixaPrimaria'>
            <div className='cardAdicionado'>
                    <p>{props.conteudo}</p>
                    <button></button>
            </div>
        </div>
    )
}

export default NovaTarefa;
