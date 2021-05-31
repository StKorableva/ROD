import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import PopularSectionStoreSaga from './PopularSectionStoreSaga';
//TODO openProductPage, addToFavorites
//TODO нужен ли вообще этот стор?

function PopularSectionStore(
	state = {
		/* 		fetching: false,
		heading: 'Популярное',
		data: [{},{}], */
		//TODO ожидаемая мною структура
	},
	action
) {
	switch (action.type) {
		case 'START_FETCHING':
			return {
				fetching: true,
				heading: state.heading,
				data: state.data,
			};
		case 'END_FETCHING':
			return {
				fetching: false,
				heading: state.heading,
				data: state.data,
			};
		case 'SET_NEW_DATA':
			console.log('check');
			return {
				fetching: state.fetching,
				heading: state.heading,
				data: action.newProductData,
			};
		default:
			return state;
	}
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(PopularSectionStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(PopularSectionStoreSaga);

export default store;
