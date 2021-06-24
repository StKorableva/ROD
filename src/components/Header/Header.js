import React from 'react';
import './Header.css';

// Icons
import menuIcon from '../../assets/img/menu-icon.svg';
import heartIcon from '../../assets/img/heart-icon.svg';
import cartIcon from '../../assets/img/cart-icon.svg';
import userIcon from '../../assets/img/user-icon.svg';

// Images
import RODlogo1x from '../../assets/img/ROD@1x.png';
import RODlogo2x from '../../assets/img/ROD@2x.png';

function Header() {
	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li className="header__nav-item">
						<a href="./" aria-label="Меню и поиск по сайту">
							<svg width="24" height="24" viewBox={menuIcon.viewBox}>
								<use xlinkHref={`#${menuIcon.id}`} />
							</svg>
						</a>
					</li>
					<li className="header__nav-item">
						<a href="./" aria-label="Избранное">
							<svg width="22" height="19" viewBox={heartIcon.viewBox}>
								<use xlinkHref={`#${heartIcon.id}`} />
							</svg>
						</a>
					</li>
					<li className="header__nav-item">
						<a href="./" aria-label="Ссылка на главную">
							<picture>
								<img
									width="65"
									height="22"
									src={RODlogo1x}
									srcSet={RODlogo2x}
									alt="Лого ROD"
								/>
							</picture>
						</a>
					</li>
					<li className="header__nav-item">
						<a href="./" aria-label="Корзина">
							<svg width="20" height="24" viewBox={cartIcon.viewBox}>
								<use xlinkHref={`#${cartIcon.id}`} />
							</svg>
						</a>
					</li>
					<li className="header__nav-item">
						<a href="./" aria-label="Личный кабинет">
							<svg width="24" height="24" viewBox={userIcon.viewBox}>
								<use xlinkHref={`#${userIcon.id}`} />
							</svg>
						</a>
					</li>
				</ul>
				<div className="header__extra-nav">
					<a href="./" aria-label="Каталог">
						Каталог
					</a>
					<a href="./" aria-label="Блог">
						Блог
					</a>
				</div>
			</nav>
		</header>
	);
}

export default Header;
