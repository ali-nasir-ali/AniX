import { combineReducers } from "@reduxjs/toolkit";
import recommended from './recommended';
import anime from './anime';
import theme from './theme';
import topanimes from './topanimes';
import recentanimes from './recentanimes';
import modal from './modal';

export default combineReducers({
	recommended,
	anime,
	theme,
	topanimes,
	recentanimes,
	modal
})
