import Colaborador from '../Colaborador'
import './Time.css'



const Time = (props) => {

    const estiloPrincipal = {backgroundColor: props.corSecundaria}
    const estiloSecundario = {borderColor: props.corPrimaria}
    

    return (
        <section className='time' style={estiloPrincipal}>
            <h3 style={estiloSecundario}>
                {props.nome}
            </h3>
            {props.colaboradores.map(colaborador => <Colaborador />)}
        </section>
    )

}

export default Time