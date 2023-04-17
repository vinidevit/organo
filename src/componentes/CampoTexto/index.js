import './CampoTexto.css'

//props é uma variável 
const CampoTexto = (props) => {
    //console.log(props.label)

    //é uma crase `` e não aspas
    const placeholderModificada = `${props.placeholder}...`

    //let valor = 'herlon'//variável

    const aoDigitar = (evento) => {
        props.alterado(evento.target.value)
        //console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto
