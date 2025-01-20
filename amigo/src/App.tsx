
import { useState } from 'react'
import './App.css'

function App() {

  const[nomeAtual,setNomeAtual]= useState('')
  const[nomeGrupo,setNomeGrupo]= useState([])
  const[nomeSecreto,setNomeSecreto]= useState('')
  const [mostrarLista, setMostrarLista] = useState(true);

  const AdicionarNome=()=>{
    setNomeGrupo([...nomeGrupo,nomeAtual])
    setNomeAtual('')
  }


  const GerarNomeSecreto = () => {
    const indice =Math.floor(Math.random()* nomeGrupo.length)
    setNomeSecreto(nomeGrupo[indice])
    setMostrarLista(false)
  }
console.log(nomeGrupo);

  return (
    <>
    <div className='col'>
      <div className='container'>
        <div>
          <h1>Amigo secreto</h1>
        </div>

        <div>
          <img src="../src/imgs/amigo.png" alt="" />
        </div>
      </div>

      
    </div>
    <div className='sorteio'> 
      <h1>Digite o nome dos seus amigos</h1>
      <div className="nomes">
        <input type="text" placeholder='Digite um nome' value={nomeAtual} onChange={(e)=>setNomeAtual(e.target.value)} />
        <button type='submit' onClick={AdicionarNome}>
          Adicionar
        </button>
      </div>
      <div className='enviar'>

        {mostrarLista && 

          <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {nomeGrupo.map((nome, i) => (
            <li key={i}>{nome}</li>
          ))}

</ul>

        }
  

          {nomeSecreto && 
        
        <h1> O nome sorteado foi :
          {nomeSecreto}
        </h1>
        
        }

        <button type='submit' onClick={GerarNomeSecreto}>
          Sortear
        </button>
       
      </div>
  </div>
    </>
  )
}

export default App
