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

  return (
    <div className="App">
      <Menu></Menu>
      {listaTarefa.map(objeto => <NovaTarefa conteudo = {objeto.conteudo}></NovaTarefa>
      )}
      <FormTarefa salvaTarefa = {cadastrado => configuraListaTarefa(cadastrado)}></FormTarefa>
      
    </div>
  );
}

export default App;
