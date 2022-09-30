import classNames from 'classnames/bind';
import style from './SideNav.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function SideNav({ hide }) {
    return (
        <nav>
            <div className={cx(`${hide} `)}>
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
            </div>
        </nav>
    );
}

export default SideNav;
