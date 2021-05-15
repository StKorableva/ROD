import './Footer.css';
import twitterIcon from '../../img/twitter.svg';
import instagramIcon from '../../img/instagram.svg';
import facebookIcon from '../../img/facebook.svg';

function Footer(props) {
	function getCurrentYear() {
		return new Date().getFullYear();
	}
	return (
		<div className="footer">
			<p className="footer__heading">ROD</p>
			<p className="footer__copyright">© {getCurrentYear()} Some amazing team</p>
			<div className="footer__socials">
				<img className="footer__socials__twitter" src={twitterIcon} alt=""></img>
				<img className="footer__socials__facebook" src={facebookIcon} alt=""></img>
				<img className="footer__socials__instagram" src={instagramIcon} alt=""></img>
			</div>
		</div>
	);
}

export default Footer;
