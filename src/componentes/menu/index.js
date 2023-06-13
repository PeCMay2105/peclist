import './menu.css'

const Menu = (props)=>{

    return(
        <div className="caixaMae">
            <div className="caixaMenu">
                <h3 onClick={()=> props.onFiltered('todas')}>Todas</h3>
                <hr></hr>
                <h3 onClick={()=> props.onFiltered('concluidas')}>Concluidas</h3>
                <hr></hr>
                <h3 onClick={()=> props.onFiltered('aFazer')}>A fazer</h3>
            </div>
        </div>
    )
}

export default Menu;
