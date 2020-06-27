import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import SideBar from './SideBar/SideBar'
import PostDetail from './posts/detail/PostDetail';
import CreatePost from './posts/create/CreatePost';
import Posts from './posts/list/Posts';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
}));

const App = _ => {
	const classes = useStyles();

	return (
		<Grid className={classes.root}>
			<Grid item >
				<SideBar />
			</Grid>
			<Grid item className={classes.content}>
					<Switch>
						<Route exact path='/' component={Posts} />
						<Route exact path='/posts/create' component={CreatePost} />
						<Route exact path='/posts/:id' render={
							({ match }) => {
								const id = match.params.id;
								return (
									// para cargar de la api eventualemente
									<PostDetail
										id={id} />);
							}} />
						} />
					</Switch>
			</Grid>
		</Grid>
	);
}

export default withRouter(App);
