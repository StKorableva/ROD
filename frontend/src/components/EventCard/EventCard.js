import './EventCard.css';

function EventCard(props) {
	const { openEventPage, imageUrl, address, time, heading, text } = props;
	return (
		<div
			className="eventCard"
			onClick={openEventPage}
			style={{ backgroundImage: `url${imageUrl}` }}
		>
			<div className="eventCard__contactInformationBox">
				<p className="eventCard__contactInformationBox__address">
					Место проведения: {address}
				</p>
				<p className="eventCard__contactInformationBox__time">{time}</p>
			</div>
			<div className="eventCard__content">
				<p className="eventCard__content__heading">{heading}</p>
				<p className="eventCard__content__text">{text}</p>
			</div>
		</div>
	);
}

export default EventCard;
