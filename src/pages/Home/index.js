import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';
import MainBanner from '~/components/MainBanner';
import doingu from '~/assets/images/doingu-logo.png';
import congnghe from '~/assets/images/congnghe_logo.png';
import dichvu from '~/assets/images/dichvu_logo.png';
import laptop from '~/assets/images/background-laptop.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <MainBanner
                altImg={'hihi'}
                title="IPI Technology Solutions"
                subtitle="Chuyên cung cấp các giải pháp về hệ thống chuyển đổi cho doanh nghiệp"
            />
            <Container fluid="md" className="p-0">
                <Row className="d-flex">
                    <Col md={4}>
                        <Container>1</Container>
                    </Col>
                    <Col md={4}>2</Col>
                    <Col md={4}>3</Col>
                </Row>
            </Container>
            <section>
                <div className={cx('section-container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-xs-12')}>1123</div>
                    </div>
                </div>
            </section>
            {/* <NrmsSection /> */}
            {/* <Banner /> */}
            {/* <ProductSections /> */}
            {/* <SliderBanner /> */}
            {/* <ProjectSection /> */}
            {/* <Banner /> */}
            {/* <NewsSection /> */}
        </div>
    );
}

export default Home;
