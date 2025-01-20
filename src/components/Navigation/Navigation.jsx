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
            <NavLink to="/" className={css.navLogoPlaceholder}>
                <img src="src/assets/logo.png" alt="Company logo" className={css.logoImg} />
            </NavLink>
            <NavLink to="/" className={css.navLogoText}>
              Південний Центр Нерухомості
            </NavLink>
          </li>

          <li
            className={css.navItem}
            onMouseOver={handleBuyMouseOver}
            onMouseLeave={handleBuyMouseLeave}
          >
            <NavLink to="/buy">
              <p className={css.navItemText}>Купити</p>
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

          <li className={css.navItem}
            onMouseOver={handleRentMouseOver}
            onMouseLeave={handleRentMouseLeave}>
            <NavLink to="/rent">
              <p className={css.navItemText}>Орендувати</p>
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
            <NavLink to="/sell">
              <p className={css.navItemText}>Продати</p>
            </NavLink>
          </li>

          <li className={css.navItem}
            onMouseOver={handleCommercialMouseOver}
            onMouseLeave={handleCommercialMouseLeave}>
            <NavLink to="/commercial">
              <p className={css.navItemText}>Комерційна нерухомість</p>
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
            <NavLink to="/contacts">
              <p className={css.navItemText}>Контакти</p>
            </NavLink>
          </li>

          <li className={css.navItem}>
            <NavLink to="/favorite">
              <p className={css.navItemText}>Вибране</p>
            </NavLink>
          </li>

        </ul>

      </nav>
    </header>
  );
};

export default Navigation;