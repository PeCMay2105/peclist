import './CheckButton.css'
import {GrCheckbox} from 'react-icons/gr'
import {ImCheckboxChecked} from 'react-icons/im'




const CheckButton =(props) => {
    
    if(props.estado == "checked"){
        return (
            <ImCheckboxChecked className='icone' />
        )
    }
    else{
        return(
            <GrCheckbox className='icone' onClick={()=> {props.setEstado("checked"); props.funcaoSuperior();console.log(props.estado)}}/>
        )
    }


}

export default CheckButton