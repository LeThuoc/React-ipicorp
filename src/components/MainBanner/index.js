import classNames from 'classnames/bind';
import styles from './MainBanner.module.scss';

import MainImg from '~/assets/images/Main_banner.png';
const cx = classNames.bind(styles);

function MainBanner({ urlImg = MainImg, altImg, title, subtitle }) {
    return (
        <div className={cx('banner')}>
            <div className={cx('banner-img')}>
                <img src={urlImg} alt={altImg} />
            </div>
            <div className={cx('main-info')}>
                <h1 className={cx('title')}>{title}</h1>
                <p className={cx('sub-title')}>{subtitle}</p>
            </div>
        </div>
    );
}

export default MainBanner;
