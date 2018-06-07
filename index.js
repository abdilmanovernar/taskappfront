import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import TaskShow from './routes/Task/TaskShow';
import Header from './components/Header';
import Footer from './components/Footer';
import Application from './routes/Application';


require('jquery');
require('bootstrap');
require('./assets/css/bootstrap.min.css');

export default class Main extends React.Component {
	
	componentWillMount() {
    //window.url = 'http://192.168.0.231/';
    //window.clientSecret = 'bQ9kWmn3Fq51D6bfh7pLkuju0zYqTELQnzeKuQM4'; // SERVER

     //window.url = 'http://uaig/';
    //window.clientSecret = 'PmQHDrlzKY80MvSfFteu5gJ0DPfBszTB0zi2Y9jy'; // dimash
	}
	
	render(){
		return(
			<HashRouter>
			  <div>
				<Route render={(props) => (<Header {...props} />)} />
				<Switch>
				  <Route exact path="/" render={(props) => (<Home {...props} />)} />
				  <Route path="/task/:id" render={(props) => (<TaskShow {...props} />)} />
				  <Route path="/application/" render={(props) => (<Application {...props} />)} />
				</Switch>
				<Footer />
			   </div>
			</HashRouter>
      
		)
	}
}

ReactDOM.render(
  <Main />, document.getElementById('root')
);
