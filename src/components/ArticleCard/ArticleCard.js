import './ArticleCard.css';

function ArticleCard(props) {
	const { imageUrl, openArticlePage, section, heading, description } = props;
	return (
		<div className="articleCard" style={{ backgroundImage: `url(${imageUrl})` }} onClick={openArticlePage}>
			<div className="articleCard__contentBox">
				<p className="articleCard__contentBox__section">{section}</p>
				<p className="articleCard__contentBox__heading">{heading}</p>
				<p className="articleCard__contentBox__description">{description}</p>
			</div>
		</div>
	);
}

export default ArticleCard;
