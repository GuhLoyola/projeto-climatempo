import { useContext } from "react"
import "../secundary-info/secundary-info.css"
import { WeatherContext } from "../../contexts/WeatherContext"

export const SecundaryInfo = () => {

    const {humidade, velocidadeDoVento } = useContext(WeatherContext)

    return (
        <div className="secundary-info">
            <div className='humidade'>
                <span>Humidade</span>
                <span>{humidade? `${humidade} %` : "--"}</span>
            </div>
            <div className='velocidade-do-vento'>
                <span>Velocidade do vento</span>
                <span>{velocidadeDoVento? `${velocidadeDoVento} km/h` : "--"}</span>
            </div>
        </div>
    )
}
