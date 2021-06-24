import './Footer.css';
import twitterIcon from '../../assets/img/twitter.svg';
import instagramIcon from '../../assets/img/instagram.svg';
import facebookIcon from '../../assets/img/facebook.svg';

function Footer(props) {
	function getCurrentYear() {
		return new Date().getFullYear();
	}
	return (
		<div className="footer">
			<div className="footer__textBox">
				<p className="footer__textBox__heading">ROD</p>
				<p className="footer__textBox__copyright">
					© {getCurrentYear()} Some amazing team
				</p>
			</div>
			<div className="footer__socials">
				<img
					className="footer__socials__twitter"
					src={twitterIcon}
					alt="houston we have a problems"
				></img>
				<img
					className="footer__socials__facebook"
					src={facebookIcon}
					alt="houston we have a problems"
				></img>
				<img
					className="footer__socials__instagram"
					src={instagramIcon}
					alt="houston we have a problems"
				></img>
			</div>
		</div>
	);
}

export default Footer;
