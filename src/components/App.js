import React, { useContext } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import SideBar from './commons/SideBar'
import PostDetail from './posts/detail/PostDetail';
import CreatePost from './posts/create/CreatePost';
import Posts from './posts/list/Posts';

const App = _ => {

	return (
		<>
			<SideBar />
			<Switch>
				<Route exact path='/' component={Posts} />
				<Route exact path='/posts/:id' render={
					({ match }) => {
						const id = match.params.id;
						return (
							// para cargar de la api eventualemente
							<PostDetail
								id={id} />);
					}} />
				} />
				<Route exact path='/posts/create' component={CreatePost} />
			</Switch>
		</>
	);
}

export default withRouter(App);
