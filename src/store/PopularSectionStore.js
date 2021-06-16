import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import PopularSectionStoreSaga from './PopularSectionStoreSaga';
//TODO openProductPage, addToFavorites
//TODO нужен ли вообще этот стор?

function PopularSectionStore(
	state = {
		fetching: false,
		heading: 'Популярное',
		data: [
			{
				liked: true,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 1,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 2,
			},
			/* 			{
				liked: true,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 3,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			},
			{
				liked: true,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test test test test teste tes tes t es rtes tes tes tes tes tes tes tes',
				price: 10000,
				id: 5,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			},
			{
				liked: false,
				imgUrl:
					'https://memepedia.ru/wp-content/uploads/2018/09/sc2jjgyqgui.jpg',
				text: 'Test test test test',
				price: 10000,
				id: 4,
			}, */
		],
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
