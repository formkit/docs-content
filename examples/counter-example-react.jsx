class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'A React Counting Component',
      count: 0
    };
  }

  increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>{ this.state.msg }</h1>
        <button onClick={this.increment}>Clicks: { this.state.count }</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
)