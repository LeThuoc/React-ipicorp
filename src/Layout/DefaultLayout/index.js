import Header from './Header';
import Footer from './Footer';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('layout-container')}>
                <div className="Content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
