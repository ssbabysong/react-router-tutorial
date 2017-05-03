/* 
* @Author: ChenShas
* @Date:   2017-05-03 14:33:11
* @Last Modified by:   ChenShas
* @Last Modified time: 2017-05-03 14:34:56
*/

// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <Link {...this.props} activeStyle={{color:'red'}}/>
  }
})