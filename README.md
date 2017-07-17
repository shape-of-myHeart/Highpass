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

리액트에서 컴포넌트와 컴포넌트의 사이가 멀어지면 멀어질 수록 데이터전달이 어려워 집니다.<br/>
이 간단한 라이브러리는, Highpass라는 객체를 통해 컴포넌트의 계층구조와 상관없이 이벤트를 설정하고<br/>
이벤트를 발생시키는 아주 간단한 방식으로 컴포넌트 사이의 통신이 가능합니다.
