import React, { useState, useEffect } from 'react';
import './base.css'

function Button1() {
  const [ count, setCount ] = useState(0);
  useEffect(() => {
    document.title = `你点击了${count}次`;
    return () => {
      document.title = '我被清除了'
    }
  })
  return <div className='content'>
    <p>您已经点击了{count}次</p>
    <button onClick={() => setCount(count +1)}>点击</button>
    </div>
}

export default class extends React.Component{
  handleChangeComponent = () => {
    this.setState({ 
      
     })
  }

  render() {
    return <div className='container'>
      <button onClick={this.handleChangeComponent}>
        点我切换
      </button>
      <Button1 />
    </div>
  }
}