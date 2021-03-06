import React, { Component } from 'react'

import Context from './Context.jsx'
import Icon from '../img/icon.png'

class Loading extends Component {
  static contextType = Context

  render () {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        '-webkit-app-region': 'drag',
      }}>
        <img src={ Icon } style={{ width: '50%', height: 'auto' }} />
        <div style={{ textAlign: 'center' }}>
          <h1 className='is-size-4 has-text-weight-semibold'>ModSaber Installer</h1>
          <h3><i className='fas fa-cog fa-spin'></i> Loading...</h3>
        </div>
      </div>
    )
  }
}

export default Loading
