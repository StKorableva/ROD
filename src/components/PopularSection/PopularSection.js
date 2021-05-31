import { connect } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import '../PopularSection/PopularSection.css';
import { mapStateToProps, mapDispatchToProps } from './PopularSectionMaps';

function PopularSection(props) {
	const { fetching, heading, data, addToFavoritesHandler } = props;

	const getDOM = function () {
		let newDOM = [];
		for (let i = 0; i < data.length; i++) {
			const { liked, imgUrl, text, price, id } = data[i];
			newDOM.push(
				<ProductCard
					liked={liked}
					openProductPage={() => {
						console.log('openProductPage');
						//TODO добавить метод для открытия страницы товара(мне пока не понятно в каком виде это у нас будет происходить)
					}}
					addToFavorites={() => {
						addToFavoritesHandler(id);
					}}
					imgUrl={imgUrl}
					text={text}
					price={price} //TODO как будет храниться прайс? его нужно куда то преобразовывать?
				/>
			);
		}
		return newDOM;
	};

	if (fetching) {
		return <></>;
	} else {
		return (
			<div className="block_of_product_cards">
				<div className="block_of_product_cards__heading_box">
					<p className="block_of_product_cards__heading_box-text">{heading}</p>
					<p className="block_of_product_cards__heading_box-link">
						<a href="./">Смотреть всё</a>
						{/* //TODO добавить адрес/функцию, мб передать пропсом извне  */}
					</p>
				</div>
				<div className="block_of_product_cards__content_box">{getDOM()}</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularSection);
