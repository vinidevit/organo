import './Botao.css'

const Botao = (props) => {
    return(
        <button required={props.obrigatorio} className="botao">{props.children}</button>
    )
}

export default Botao