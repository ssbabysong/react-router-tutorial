/* 
* @Author: ChenShas
* @Date:   2017-05-03 15:23:58
* @Last Modified by:   ChenShas
* @Last Modified time: 2017-05-03 15:28:59
*/

// modules/Repo.js
// 06-params
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})