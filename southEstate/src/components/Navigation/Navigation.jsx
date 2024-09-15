import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const [isBuyHovered, setIsBuyHovered] = useState(false);
  const [isRentHovered, setIsRentHovered] = useState(false);
  const [isCommercialHovered, setIsCommercialHovered] = useState(false);

  const handleBuyMouseOver = () => {
    setIsBuyHovered(true);
  };

  const handleBuyMouseLeave = () => {
    setIsBuyHovered(false);
  };

  const handleRentMouseOver = () => {
    setIsRentHovered(true);
  };

  const handleRentMouseLeave = () => {
    setIsRentHovered(false);
  };

  const handleCommercialMouseOver = () => {
    setIsCommercialHovered(true);
  };

  const handleCommercialMouseLeave = () => {
    setIsCommercialHovered(false);
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navLogo}>
            <div className={css.navLogoPlaceholder}>
              <NavLink to="/"></NavLink>
            </div>
            <NavLink to="/" className={css.navLogoText}>
              Південний Центр Нерухомості
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="/buy"
              className={css.navItemText}
              onMouseOver={handleBuyMouseOver}
              onMouseLeave={handleBuyMouseLeave}
            >
              Купити
            </NavLink>
            {isBuyHovered && (
              <ul className={css.dropdownMenu}>
                <li className={css.dropdownItem}>
                  <NavLink to="/buy/apartments" className={css.navSubItem}>Квартири</NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink to="/buy/houses" className={css.navSubItem}>Будинки</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className={css.navItem}>
            <NavLink
              to="/rent"
              className={css.navItemText}
              onMouseOver={handleRentMouseOver}
              onMouseLeave={handleRentMouseLeave}
            >
              Орендувати
            </NavLink>
            {isRentHovered && (
              <ul className={css.dropdownMenu}>
                <li className={css.dropdownItem}>
                  <NavLink to="/rent/apartments" className={css.navSubItem}>Квартири</NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink to="/rent/houses" className={css.navSubItem}>Будинки</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className={css.navItem}>
            <NavLink to="/buy" className={css.navItemText}>
              Продати
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="/commercial"
              className={css.navItemText}
              onMouseOver={handleCommercialMouseOver}
              onMouseLeave={handleCommercialMouseLeave}
            >
              Комерційна нерухомість
            </NavLink>
            {isCommercialHovered && (
              <ul className={css.dropdownMenu}>
                <li className={css.dropdownItem}>
                  <NavLink to="/commercial/buy" className={css.navSubItem}>Купити</NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink to="/commercial/rent" className={css.navSubItem}>Орендувати</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className={css.navItem}>
            <NavLink to="/contacts" className={css.navItemText}>
              Контакти
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/favorite" className={css.navItemText}>
              Вибране
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;