const chaveAPI = "c155a8196fdf4df495111428232311"

async function getCityData(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveAPI}&q=${cidade}&aqui=no&lang=pt`

    const response = await fetch(apiUrl);

    if (response.status !== 200) return

    const data = response.json()

    return data;

}


export { getCityData }