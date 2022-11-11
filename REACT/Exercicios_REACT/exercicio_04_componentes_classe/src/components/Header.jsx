import { Component } from 'react';
import PropTypes from 'prop-types';
const estilo = {
    color: 'red',
    borderBottom: 'yellow inset 2px',
    backgroundColor: '#E6E6E6',
};
const estiloFilho = {
    color: 'aqua',
    borderBottom: 'yellowgreen inset 2px',
    backgroundColor: '#725436',
};
export class Header extends Component {
    render() {
        return (
            <section>
                <h1 style={estilo}>Olá, {this.props.nome}, seja bem-vindo ao nosso site!</h1>
                <p style={estiloFilho}>Site em construção</p>
            </section>
        );
    }
}

Header.defaultProps = {
    nome: 'Nome padrão',
};
Header.propTypes = {
    nome: PropTypes.string,
};
export default Header;
