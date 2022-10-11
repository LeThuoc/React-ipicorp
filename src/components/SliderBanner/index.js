import classNames from 'classnames/bind';
import styles from './SliderBanner.module.scss';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/scss/autoplay';
import AT from '~/assets/images/AT.png';
import WH from '~/assets/images/WH.png';
import LT from '~/assets/images/LT.png';
import DCM from '~/assets/images/DCM.png';
import DARA from '~/assets/images/DARA.png';
import KD from '~/assets/images/KD.png';
import { Autoplay } from 'swiper';

const cx = classNames.bind(styles);

function SliderBanner() {
    return (
        <div className="SliderBanner">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                spaceBetween={30}
                className={cx('partner-banner')}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                <SwiperSlide>
                    <img className={cx('logo')} src={AT} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cx('logo')} src={WH} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cx('logo')} src={LT} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cx('logo')} src={DCM} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cx('logo')} src={DARA} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cx('logo')} src={KD} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SliderBanner;
