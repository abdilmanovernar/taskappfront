import React from 'react';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
		<div className="content container body-content">
			<div className="col">	
				<table className="table">
					<thead>
						<tr>
							<th style={{width: '23%'}}>Название заявки</th>
							<th style={{width: '23%'}}>Просмотр заявки</th>
							<th style={{width: '20%'}}>Дата заявления</th>
							<th style={{width: '20%'}}>Статус</th>
							<th></th>
						</tr>
						<tr>
							<td>название</td>
							<td>
								<Link className="btn btn-outline-info" to={'/task/1'} replace><i className="glyphicon glyphicon-eye-open mr-2"></i>Просмотр</Link>
							</td>
							<td>дата</td>
							
						</tr>
					</thead>
				</table>
			</div>
			
			<Link className="btn btn-outline-info" to={'/Application'} replace><i className="glyphicon glyphicon-eye-open mr-2"></i>Сделать заявку</Link>
		</div>
    )
  }
}
