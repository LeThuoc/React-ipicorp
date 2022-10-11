import classNames from 'classnames/bind';
import styles from './ProductSection.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import ProductMock from '~/API/Mockdata';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function ProductSection() {
    return (
        <>
            <h2 className={cx('product-title')}>chúng tôi cung cấp sản phẩm & dịch vụ</h2>
            <div className={cx('product-container')}>
                <Row>
                    {ProductMock.data.map((item) => (
                        <Col key={item.id} xs={12} md={6} lg={4} className={cx('item-container')}>
                            <div className={cx('item')}>
                                <Link to={item.to}>
                                    <button className={cx('product-link')}>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </Link>
                                <div className={cx('img-container')}>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className={cx('product-info')}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}

export default ProductSection;
