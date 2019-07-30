import React from 'react';

export default class Square extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()}
        className={this.props.value ? this.props.value === 'X' ? 'square X' : 'square O' : 'square'}>
        {this.props.value}
      </ button >
    )
  }
}