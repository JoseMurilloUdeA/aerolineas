import React, { Component } from 'react';

interface MyComponentProps {
  name: string;
  age: number;
}

class MyComponent extends Component<MyComponentProps> {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default MyComponent;