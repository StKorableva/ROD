import './Footer.css';

// Icons
import twitterIcon from '../../assets/img/twitter.svg';
import facebookIcon from '../../assets/img/facebook.svg';
import instagramIcon from '../../assets/img/instagram.svg';

function Footer(props) {
	function getCurrentYear() {
		return new Date().getFullYear();
	}
	return (
		<footer className="footer">
			<div className="footer__textBox">
				<p className="footer__textBox-heading">ROD</p>
				<p className="footer__textBox-copyright">
					© {getCurrentYear()} Some amazing team
				</p>
			</div>
			<ul className="footer__socials">
				<li>
					<a href="./" aria-label="Мы в Твиттере">
						<svg width="32" height="32" viewBox={twitterIcon.viewBox}>
							<use xlinkHref={`#${twitterIcon.id}`} />
						</svg>
					</a>
				</li>
				<li>
					<a href="./" aria-label="Мы в Фейсбуке">
						<svg width="32" height="32" viewBox={facebookIcon.viewBox}>
							<use xlinkHref={`#${facebookIcon.id}`} />
						</svg>
					</a>
				</li>
				<li>
					<a href="./" aria-label="Мы в Инстаграме">
						<svg width="32" height="32" viewBox={instagramIcon.viewBox}>
							<use xlinkHref={`#${instagramIcon.id}`} />
						</svg>
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
