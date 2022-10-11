import classNames from 'classnames/bind';
import styles from './NrmsSection.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img from '~/assets/images/img6.png';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Coundown from './Coundown';

const cx = classNames.bind(styles);

function NrmsSection() {
    return (
        <>
            <div className="section-container">
                <Row className={cx('content-container')}>
                    <Col lg={3} className="p-0 d-lg-block d-none">
                        <div className={cx('img-container')}>
                            <img src={img} alt={''} />
                        </div>
                    </Col>
                    <Col lg={8} className="p-0">
                        <div className={cx('content')}>
                            <span className={cx('sub-title')}>nrms là gì</span>
                            <h2 className={cx('title')}> Vì sao cần Chuyển Đổi Số với nRMS</h2>
                            <p className={cx('description')}>
                                Doanh nghiệp càng ngày càng có nhu cầu thấy hiểu và cải thiện liên
                                tục hoạt động kinh doanh trong môi trường cạnh tranh ngày càng khốc
                                liệt thông qua việc điều tiết quản trị dựa trên dữ liệu hoạt động.
                                Đặc biệt khi hiệu quả kinh doanh thể hiệ hiệnthong qua những con số
                                đặc trưng từ lực lượng bán hàng, hệ thống phân phối và được hiển thị
                                trên các thiết bị cá nhân nhanh chóng, tiện lợi.
                            </p>
                            <p className={cx('description')}>nRMS giúp doanh nghiệp</p>
                            <Row>
                                <Col xs={12} md={6} className={cx('nrms')}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <p>Tăng tốc đặt hàng</p>
                                </Col>
                                <Col xs={12} md={6} className={cx('nrms')}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <p>Quản trị Real-Time(Thời gian thực)</p>
                                </Col>
                                <Col xs={12} md={6} className={cx('nrms')}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <p>Dữ liệu chính Xác</p>
                                </Col>
                                <Col xs={12} md={6} className={cx('nrms')}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <p>Kiểm Soát Hiệu Quả</p>
                                </Col>
                            </Row>
                            <h4 className={cx('box-desc')}>
                                nRMS áp dụng cho doanh nghiệp có độ lớn:
                            </h4>
                            <Coundown />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default NrmsSection;
