import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MockProjectData from '~/API/MockProject';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
const data = MockProjectData.data;

const tabs = ['all', 'htpp', 'tmdt', 'giaonhan', 'b2b'];

function Project() {
    const [project, setProject] = useState(data);
    const [type, setType] = useState('all');

    useEffect(() => {
        if (type === 'all') {
            setProject(data);
        } else {
            setProject(data.filter((item) => item.type === type));
        }
    }, [type]);

    return (
        <>
            <h2 className={cx('project-title')}>Các dự án</h2>
            <div className={cx('project-content')}>
                <div className={cx('project-control')}>
                    {tabs.map((item) => {
                        return (
                            <button
                                className={type === item ? 'active' : ''}
                                key={item}
                                onClick={() => setType(item)}
                            >
                                {(item === 'all' && 'Tất cả') ||
                                    (item === 'htpp' && 'Hệ Thống Phân Phối') ||
                                    (item === 'tmdt' && 'Thương mại điên thử') ||
                                    (item === 'giaonhan' && 'Giao Nhận') ||
                                    (item === 'b2b' && ' B2B')}
                            </button>
                        );
                    })}
                </div>
                <div className={cx('project-section')}>
                    <Row>
                        {project.map((item) => {
                            return (
                                <Col
                                    xs={12}
                                    md={6}
                                    lg={4}
                                    className={cx('project-item')}
                                    key={item.id}
                                >
                                    <div className={cx('item-container')}>
                                        <div className={cx('item-font')}>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className={cx('item-back')}>
                                            <img src={item.img} alt="" />
                                            <h4> {item.title}</h4>
                                            <p>{item.business}</p>
                                            <p>{item.description}</p>
                                            <Link to={item.to} className={cx('readmore')}>
                                                Xem Them
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Project;
