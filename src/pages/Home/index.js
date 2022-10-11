import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';
import MainBanner from '~/components/MainBanner';
import NrmsSection from './component/NrmsSection';
import doingu from '~/assets/images/doingu-logo.png';
import banner from '~/assets/images/Banner.png';
import banner1 from '~/assets/images/banner-1.jpg';
import ProductSections from './component/ProductSection';
import Banner from '~/components/Banner';
import congnghe from '~/assets/images/congnghe_logo.png';
import dichvu from '~/assets/images/dichvu_logo.png';
import laptop from '~/assets/images/background-laptop.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import SliderBanner from '~/components/SliderBanner';
import Project from './component/Project';

const cx = classNames.bind(styles);

function Home({ url, altImg, classname }) {
    return (
        <div>
            <MainBanner
                altImg={'hihi'}
                title="IPI Technology Solutions"
                subtitle="Chuyên cung cấp các giải pháp về hệ thống chuyển đổi cho doanh nghiệp"
            />
            <div className="section-container">
                <Row className="m-0">
                    <Col lg={4} className="p-0">
                        <div className={cx('nrsm-box-item')}>
                            <div className={cx('box-top')}>
                                <img src={doingu} alt={''} />
                                <h4 className={cx('item-title')}>ĐỘI NGŨ</h4>
                            </div>
                            <div className={cx('box-bottom')}>
                                <p>
                                    trẻ trung, nhiệt huyết,
                                    <br /> linh động <br />
                                    đáp ứng yêu cầu
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className="p-0">
                        <div className={cx('nrsm-box-item2')}>
                            <img src={laptop} alt={''} />
                            <div className={cx('box-top')}>
                                <img src={congnghe} alt={''} />
                                <h4 className={cx('item-title')}>CÔNG NGHỆ</h4>
                            </div>
                            <div className={cx('box-bottom')}>
                                <p>
                                    Dữ liệu và micro-service <br />
                                    làm gốc
                                    <br />
                                    cho mọi thiết kế
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className="p-0">
                        <div className={cx('nrsm-box-item3')}>
                            <div className={cx('box-top')}>
                                <img src={dichvu} alt={''} />
                                <h4 className={cx('item-title')}>DỊCH VỤ</h4>
                            </div>
                            <div className={cx('box-bottom')}>
                                <p>
                                    Tư vấn toàn diện,
                                    <br />
                                    phối hợp linh động,
                                    <br />
                                    đảm bảo hiệu quả
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <NrmsSection />
            <Banner classname={cx('banner')} url={banner} altImg="Banner" />
            <ProductSections />
            <SliderBanner />
            <Project />
            <Banner classname={cx('partner-banner')} url={banner1} altImg="Banner" />
            {/* <Banner /> */}
            {/* <NewsSection /> */}
        </div>
    );
}

export default Home;
