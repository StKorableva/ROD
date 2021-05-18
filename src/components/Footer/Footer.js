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
				<p className="footer__textBox__copyright">© {getCurrentYear()} Some amazing team</p>
			</div>
			<div className="footer__socials">
				<img className="footer__socials__twitter" src={twitterIcon} alt=""></img>
				<img className="footer__socials__facebook" src={facebookIcon} alt=""></img>
				<img className="footer__socials__instagram" src={instagramIcon} alt=""></img>
			</div>
		</div>
	);
}

export default Footer;
