import React, { Component } from 'react';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';

export default class Header extends React.Component {
	
  render() {
    return (
      <div>
		<NavLink className="btn btn-outline-info" to={'/'} replace>home</NavLink>
  </div>
	   
	)
  }
}
/*<thead>
					<tr>
						<th class="checkbox hide-when-print">
							<a class="__fx-devtools-hide-shortcut__" onclick="toggleIssuesSelection(this); return false;" title="all/clear">
								<img alt="Toggle_check" src=""/>
							</a>
						</th>
					</tr>
				</thead>*/
				