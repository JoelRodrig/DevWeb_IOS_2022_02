import { Component } from 'react';
class conteudo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };
    }
    render() {
        return (
            <article>
                <h2 >Pipoca</h2>
                <p>Pipocas doces e salgadas</p>
                <button
                 onClick={() =>
                    this.setState({ contador: this.state.contador + 1 })
                }>Read</button>

                <button
                 onClick={() => {
                    if(this.state.read){
                        this.setState({ contador: this.state.contador + 1 })
                    } else {
                        this.setState({ contador: this.state.contador + 1 })
                    }
                 }
                }>Like</button>

                <button
                 onClick={() =>
                    this.setState({ contador: this.state.contador + 1 })
                }>Deslike</button>
            </article>
        )
    }
}

export default conteudo;