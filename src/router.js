import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/index';

class Router extends React.Component {
    render() {
        const { location } = this.props;
		return (
			<div>
				<Switch location={location}>
                <Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				</Switch>
			</div>
		);
    }
}

export default Router;