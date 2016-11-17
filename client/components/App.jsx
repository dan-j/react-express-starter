import React from 'react';
import 'whatwg-fetch';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.getData.bind(this);

    this.state = {
      data: 'Not Loaded',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('/api')
      .then(response => response.text())
      .then(body => this.setState({ data: body }));
  }

  render() {
    let data;

    if (this.state.data) {
      data = <div>{this.state.data}</div>;
    }

    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={() => this.getData()}>Click me!</button>
        {data}
      </div>
    );
  }
}
