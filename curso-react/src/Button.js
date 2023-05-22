import PropTypes from 'prop-types'
export function Button({text}){
    return <button>
        {text}
    </button>
}
// especifica que la propiedad text debe ser un string, y además es requerido
Button.propTypes={
    text: PropTypes.string.isRequired
}
// valor por defecto si viene name, pero tambien se puede pasar como las funcionaes name='Usuario'
/*
Button.defaultProps={
    name:'Doe John'
}
*/