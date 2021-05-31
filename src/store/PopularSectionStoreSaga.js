import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';

function fetchNewProductData(action) {
	//TODO нужен будет метод запроса новых данных если он будет просится отсюда
}

function* getCurrentStoreState() {
	return yield select();
}

function* addToFavoritesHandler(action) {
	const targetProductId = action.id;
	const currentState = yield getCurrentStoreState();
	const currentProductData = currentState.data;
	let newProductData = [];
	for (let i = 0; i < currentProductData.length; i++) {
		newProductData.push(Object.assign({}, currentProductData[i]));
		//без такого тупого копирования обьекта компонент не ререндерится, поч хз.
		//Методы скорее всего вообще изменятся тк пока неизвестен тип входных данных
	}
	for (let i = 0; i < currentProductData.length; i++) {
		if (currentProductData[i].id == targetProductId) {
			newProductData[i].liked = !currentProductData[i].liked;
		}
	}
	//TODO какая-то мега фоновая функция, которая отправляет информацию на сервер и/или сохраняет кеш
	yield put({
		type: 'SET_NEW_DATA',
		newProductData: newProductData,
	});
}

function* saga() {
	yield takeLatest('GET_NEW_PRODUCT_DATA', fetchNewProductData);
	yield takeEvery('ADD_TO_FAVORITES', addToFavoritesHandler);
}

export default saga;
