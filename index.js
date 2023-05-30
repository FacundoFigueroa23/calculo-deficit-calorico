const getDeficit = (sexo, peso, altura, edad, actividad) => {
    if (sexo === "hombre") {
        return (10*peso + 6.25*altura - 5*edad + 5) * actividad
    } else {
        return (10*peso + 6.25*altura - 5*edad - 161) * actividad
    }
}

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    let deficit = getDeficit(data.sexo, Number(data.peso), Number(data.altura), Number(data.edad), Number(data.actividad)).toFixed(0)
    alert(`Tu déficit calórico es de ${deficit - 500} a ${deficit - 300} calorías diarias.`)
})