import './ProductCard.css';

function ProductCard(props) {
	let addToFavoritesClickHandler = function (e) {
		e.stopPropagation();
		props.addToFavorites();
	};
	return (
		<div className="productCard" onClick={props.openProductPage}>
			<div className="productCard__addToFavorites" onClick={addToFavoritesClickHandler}></div>
			<img className="productCard__img" src={props.url} alt="houston we have a problems"></img>
			<p className="productCard__text">{props.text}</p>
			<p className="productCard__price">{props.price}₽</p>
		</div>
	);
}

export default ProductCard;
