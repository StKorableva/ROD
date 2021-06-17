import ProductCard from '../ProductCard/ProductCard';
import '../PopularSection/PopularSection.css';
//TODO передай в меня fetching, heading, data, addToFavoritesHandler, openProductPage и массив обьектов со свойствами liked, imgUrl, text, price, id

function PopularSection(props) {
	const { fetching, heading, data, addToFavoritesHandler, openProductPage } =
		props;

	const getDOM = function () {
		let newDOM = [];
		for (let i = 0; i < data.length; i++) {
			const { liked, imgUrl, text, price, id } = data[i];
			newDOM.push(
				<ProductCard
					liked={liked}
					openProductPage={() => {
						openProductPage();
						//TODO добавить метод для открытия страницы товара(мне пока не понятно в каком виде это у нас будет происходить)
					}}
					addToFavorites={() => {
						addToFavoritesHandler(id);
					}}
					imgUrl={imgUrl}
					text={text}
					price={price} //TODO как будет храниться прайс? его нужно как то преобразовывать в компоненте ?
					key={id}
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
					<p className="block_of_product_cards__heading_box-heading">
						{heading}
					</p>
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

export default PopularSection;
