import './ProductCard.css';
import heartIconNotLiked from '../../assets/img/heart-icon.svg';
import heartIconLiked from '../../assets/img/heart-icon_liked.svg';

function ProductCard(props) {
	const { liked, openProductPage, addToFavorites, imgUrl, text, price } = props;

	const addToFavoritesClickHandler = function (e) {
		e.stopPropagation();
		addToFavorites();
	};

	const addToFavoritesIcon = liked ? (
		<img className="productCard__addToFavorites__icon" src={heartIconLiked} alt="houston we have a problems"></img>
	) : (
		<img className="productCard__addToFavorites__icon" src={heartIconNotLiked} alt="houston we have a problems"></img>
	);

	return (
		<div className="productCard" onClick={openProductPage}>
			<div className="productCard__addToFavorites" onClick={addToFavoritesClickHandler}>
				{addToFavoritesIcon}
			</div>
			<img className="productCard__img" src={imgUrl} alt="houston we have a problems"></img>
			<p className="productCard__text">{text}</p>
			<p className="productCard__price">{price}</p>
		</div>
	);
}

export default ProductCard;
