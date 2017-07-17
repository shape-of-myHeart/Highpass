import React from 'react';
import Highpass from './highpass';

class OTHER_FILE extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: 'white'
        };
    }
    componentDidMount() {
        Highpass.on('changeBackgroundColor', color => this.setState({ backgroundColor: color }));
    }
    render() { return (<section style={{ backgroundColor: this.state.backgroundColor }}>OTHER_FILE</section>) }
}
export default OTHER_FILE;