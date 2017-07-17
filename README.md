# Highpass
```javascript
...
import Highpass from './highpass';
...
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
...
class NODE_2_1 extends React.Component {
    render() {
      return (
        <section onClick={() => Highpass.emit('changeBackgroundColor', this.props.color)}>
          <b>Click Me</b> NODE_2_CHILD
        </section>
      );
    }
}
...
```
