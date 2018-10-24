import React, { Component } from 'react';

// 7. importamos el metodo connect para conectar el store global con redux
import { connect } from 'react-redux';

// 9. creamos la funcion que conecta nuestro state global con las props del componente para ser usadas
// dichas propiedades, aqui traemos las cosas que queremos usar y mantener del state global

// function mapStateToProps(state) {
//   return {
//     token: state.token
//   };
// }
const mapStateToProps = state => ({
  token: state.token
});

class Header extends Component {
  render() {
    // 10. desestructuramos nuestro objeto props que tiene la data que queremos y la usamos en el componente
    const { token } = this.props;
    return <header>Header Numero {token}</header>;
  }
}

// 8. conectamos el componente a nuestro store
// connect(mapStateToProps)(Component)
export default connect(mapStateToProps)(Header);
