import React from 'react';
import ReactDOM from 'react-dom';
import Highpass from './highpass';

import OTHER_FILE from './otherFile';

class UI extends React.Component {
    render() {
        return (
            <section className="ui">
                <NODE_1 />
                <NODE_2 />
                <OTHER_FILE />
            </section>
        )
    }
}
/************************** NODE_1 **************************/
class NODE_1 extends React.Component {
    render() {
        return (
            <section>
                <div>NODE_1</div>
                <NODE_1_1 />
                <NODE_1_2 />
            </section>
        )
    }
}
class NODE_1_1 extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: 'white'
        };
    }
    componentDidMount() {
        Highpass.on('changeBackgroundColor', color => this.setState({ backgroundColor: color }));
    }
    render() { return (<section style={{ backgroundColor: this.state.backgroundColor }}>NODE_1_1</section>) }
}
class NODE_1_2 extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: 'white'
        };
    }
    componentDidMount() {
        Highpass.on('changeBackgroundColor', color => this.setState({ backgroundColor: color }));
    }
    render() { return (<section style={{ backgroundColor: this.state.backgroundColor }}>NODE_1_2</section>) }
}
/************************** NODE_2 **************************/
class NODE_2 extends React.Component {
    render() {
        return (
            <section>
                <div>NODE_2</div>
                <NODE_2_1 color="red"/>
                <NODE_2_1 color="white"/>
            </section>
        )
    }
}
class NODE_2_1 extends React.Component {
    render() { return (<section onClick={() => Highpass.emit('changeBackgroundColor', this.props.color)}><b>Click Me</b> NODE_2_CHILD</section>) }
}
ReactDOM.render(<UI />, document.getElementById('react-container'));