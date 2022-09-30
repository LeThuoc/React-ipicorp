import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useState } from 'react';
import SideNav from '../SideNav';
import IPI from '~/assets/images/IPI_horizontal.png';
import phoneIPI from '~/assets/images/IPI.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const [hide, setHide] = useState('hide');
    const handleSideNav = () => {
        setHide(hide === 'hide' ? 'show' : 'hide');
    };

    return (
        <>
            <nav className={cx('wrapper')}>
                <div className={cx('navbar')}>
                    <button className={cx('toggle-sidenav')} onClick={handleSideNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className={cx('logo-wrapper')}>
                        <img className={cx('logo')} src={IPI} alt="IPI-logo" />
                        <img className={cx('phone-logo')} src={phoneIPI} alt="IPI-logo" />
                    </div>
                    <div className={cx('nav-list')}>
                        <NavLink
                            to="/"
                            className={(nav) => cx('navlink', { active: nav.isActive })}
                            end
                        >
                            Trang chủ
                        </NavLink>
                        <NavLink
                            to="/aboutUs"
                            className={(nav) => cx('navlink', { active: nav.isActive })}
                        >
                            Về chúng tôi
                        </NavLink>
                        <NavLink
                            to="/product"
                            className={(nav) => cx('navlink', { active: nav.isActive })}
                        >
                            dịch vụ & sản phẩm
                        </NavLink>
                        <NavLink
                            to="/news"
                            className={(nav) => cx('navlink', { active: nav.isActive })}
                        >
                            Tin tức
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={(nav) => cx('navlink', { active: nav.isActive })}
                        >
                            Liên Hệ
                        </NavLink>
                    </div>
                    <button className={cx('search')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </nav>
            {<SideNav hide={hide} />}
        </>
    );
}

export default Header;
