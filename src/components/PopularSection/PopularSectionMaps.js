function mapStateToProps(state) {
	return {
		fetching: state.fetching,
		heading: state.heading,
		data: state.data,
		//TODO нужен ли вообще тот стор?
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addToFavoritesHandler: (id) =>
			dispatch({ type: 'ADD_TO_FAVORITES', id: id }),
		//TODO добавить необходимые методы
		//TODO нужен ли вообще тот стор?
	};
}

export { mapStateToProps, mapDispatchToProps };
