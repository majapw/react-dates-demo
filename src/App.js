import React from 'react';
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { withStyles } from 'react-with-styles';

// import BaseClass from 'react-dates/lib/utils/baseClass';
import shallowCompare from 'react-addons-shallow-compare';

class UnstyledFoo extends (React.PureComponent || React.Component) {
  componentDidMount() {
    console.log('Foo:componentDidMount!');
  }

  [!React.PureComponent && 'shouldComponentUpdate'](nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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
