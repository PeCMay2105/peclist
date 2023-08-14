import logo from './logo.svg';
import './App.css';
import Menu from './componentes/menu';
import FormTarefa from './componentes/form';
import { useState } from 'react';
import NovaTarefa from './componentes/novaTarefa';

function App() {
  
  const [listaTarefa,setlistaTarefa] = useState([])

  const configuraListaTarefa = (objeto)=>{
    setlistaTarefa([...listaTarefa,objeto])
  }
  const deletaDaLista = (conteudo) =>{
      setlistaTarefa(
        listaTarefa.filter(objeto => {if(objeto.conteudo != conteudo)return objeto})
      )
  }
  const [Status,setStatus] = useState("todas")

  return (
    <div className="App">
      <Menu onFiltered = {(status)=> setStatus(status)}></Menu>
      {listaTarefa.filter(objeto => {if(Status == 'todas'){return objeto}else if(objeto.status == Status){return objeto}}).map(objeto => <NovaTarefa conteudo = {objeto.conteudo} onMarked ={(status,conteudo)=> {listaTarefa.map(objeto => {if(objeto.conteudo == conteudo) objeto.status = status})}} onDelete={conteudo=> deletaDaLista(conteudo)}></NovaTarefa>
      )}
      <FormTarefa salvaTarefa = {cadastrado => configuraListaTarefa(cadastrado)}></FormTarefa>
      
    </div>
  );
}

export default App;
