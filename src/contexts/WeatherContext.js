import { createContext, useState } from "react";

export const WeatherContext = createContext({})

export const WeatherProvider = (props) => {

    const [cidade, setCidade] = useState("")
    const [temperatura, setTemperatura] = useState("")
    const [condicao, setCondicao] = useState("")
    const [humidade, setHumidade] = useState("")
    const [velocidadeDoVento, setVelocidadeDoVento] = useState("")
    const [iconeCondicao, setIconeCondicao] = useState("")

    function preencherDadosNaTela(dados, cidade) {
        setCidade(cidade)
        setTemperatura(dados.current.temp_c)
        setCondicao(dados.current.condition.text)
        setHumidade(dados.current.humidity)
        setVelocidadeDoVento(dados.current.wind_kph)
        setIconeCondicao(dados.current.condition.icon)
    }

    const values = { cidade, temperatura, condicao, humidade, velocidadeDoVento, iconeCondicao, preencherDadosNaTela }

    return (
        <WeatherContext.Provider value={ values }>
            {props.children}
        </WeatherContext.Provider>
    )
}