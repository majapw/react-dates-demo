import React from 'react';
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { withStyles } from 'react-with-styles';

import BaseClass from 'react-dates/lib/utils/baseClass';

class UnstyledFoo extends BaseClass {
  componentDidMount() {
    console.log('Foo:componentDidMount!');
  }

  render() {
    return <div>This is a test.</div>;
  }
}

const Foo = withStyles(() => ({}))(UnstyledFoo);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className="App">
        <UnstyledFoo />
        <Foo />
      </div>
    );
  }
}

export default App;
