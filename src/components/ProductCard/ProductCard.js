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
		<svg width="24" height="24" viewBox={heartIconLiked.viewBox}>
			<use xlinkHref={`#${heartIconLiked.id}`} />
		</svg>
	) : (
		<svg width="24" height="24" viewBox={heartIconNotLiked.viewBox}>
			<use xlinkHref={`#${heartIconNotLiked.id}`} />
		</svg>
	);

	return (
		<div className="productCard" onClick={openProductPage}>
			<div
				className="productCard__addToFavorites"
				onClick={addToFavoritesClickHandler}
			>
				{addToFavoritesIcon}
			</div>
			<img
				className="productCard__img"
				src={imgUrl}
				alt="houston we have a problems"
			></img>
			<div className="productCard__layout">
				<p className="productCard__layout__text">{text}</p>
				<p className="productCard__layout__price">{price}</p>
			</div>
		</div>
	);
}

export default ProductCard;
