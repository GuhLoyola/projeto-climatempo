import { useContext } from "react"
import "../main-info/main-info.css"
import { WeatherContext } from "../../contexts/WeatherContext"

const MainInfo = () => {

    const { cidade, temperatura, condicao, iconeCondicao } = useContext(WeatherContext)

    return (
        <div className='main-info'>
            <h1>{cidade? cidade : "Use a  lupa acima para ver o clima em uma cidade"}</h1>

            <p className="temperatura">{temperatura? `${temperatura}°C` : ''}</p>

            <img src={iconeCondicao? iconeCondicao : `https://cdn.weatherapi.com/weather/64x64/day/116.png`} alt="ícone condição do clima" /> 

            <p>{condicao}</p>
        </div>
    )
}

export default MainInfo