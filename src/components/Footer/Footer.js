import './Footer.css';

function Footer(props) {
	function getCurentYear() {
		return new Date().getFullYear();
	}
	return (
		<div className="footer">
			<p className="footer__heading">READ OR DIE</p>
			<p className="footer__copyright">© {getCurentYear()} Some amazing team</p>
		</div>
	);
}

export default Footer;
