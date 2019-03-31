import { Component } from 'react';
import Pace from 'pace-js';

export default class Progress extends Component {
  componentDidMount() {
    Pace.start();
  }
  render() {
    return (null);
  }
}
