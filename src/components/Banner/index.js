import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({ url, altImg, classname }) {
    return (
        <div className={classname}>
            <img src={url} alt={altImg} />
        </div>
    );
}

export default Banner;
