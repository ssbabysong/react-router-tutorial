import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (<div>
    	<h1>React Router Tutorial</h1>
    	<ul role='nav'>
    {/*<li><IndexLink to="/" activeStyle={{color:'red'}}>Home</IndexLink></li>*/}
      <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
        <li><Link to="/repos">Repos</Link></li>
    	</ul>
    	{this.props.children}
    </div>)
  }
})
