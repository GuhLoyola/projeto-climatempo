import Lupa from '../../images/lupa.png'
import "./search-form.css"
import { getCityData } from '../../services/getCityData'
import { useContext, useState } from 'react'
import { WeatherContext } from '../../contexts/WeatherContext'

const SearchForm = () => {

  const { preencherDadosNaTela } = useContext(WeatherContext)

  const [cidade, setCidade] = useState("")

  const handleClick = async (e) => {
    e.preventDefault();
    if (!cidade) return

    const dados = await getCityData(cidade)

    preencherDadosNaTela(dados, cidade)

  }

  return (
    <div className="busca">
      <input type="text"
        id="input-busca"
        placeholder="Digite uma cidade"
        value={cidade}
        onInput={(e) => setCidade(e.target.value)}
      />
      <button className="btn-busca" onClick={handleClick}>
        <img className="lupa" src={Lupa} alt="Lupa da busca" />
      </button>
    </div>
  )
}

export default SearchForm