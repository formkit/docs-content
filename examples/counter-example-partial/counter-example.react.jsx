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
        <p>I am an example that only shows a relevant subsection of code.</p>
        {/* %partial%::html:: */}
        <button onClick={this.increment}>
          Clicks: { this.state.count }
        </button>
        {/* %partial% */}
        <p>There is more to my template but it's not revealed in the editor.</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
)
