import classNames from 'classnames/bind';
import styles from './NrmsSection.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { InView, useInView } from 'react-intersection-observer';

const cx = classNames.bind(styles);

function Coundown() {
    const { ref, inView, entry } = useInView({});

    const [counter, setCounter] = useState(0);

    return (
        <InView as="div" onChange={(inView, entry) => inView}>
            <Row className={cx('count-box')} ref={ref}>
                <Col xs={12} md={4} className={cx('count-item')}>
                    <span className="counter">{counter}</span>
                    <span className={cx('count-desc')}>Nhân viên phục vụ</span>
                </Col>
                <Col xs={12} md={4} className={cx('count-item')}>
                    <span className="counter">{counter}</span>
                    <span className={cx('count-desc')}>Đại lý bán hàng các cấp</span>
                </Col>
                <Col xs={12} md={4} className={cx('count-item')}>
                    <span className="counter">{counter}</span>
                    <span className={cx('count-desc')}>Đơn hàng mỗi ngày</span>
                </Col>
            </Row>
        </InView>
    );
}

export default Coundown;

// numberCounter()
// document.addEventListener("DOMContentLoaded", load);

// function load() {
//   isCount = false;
//   const countBox = document.querySelector(".nrms-box-container");
//   const mainBanner = document.querySelector(".main-banner");
//   if ("IntersectionObserver" in window) {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           if (isCount == false) {
//             numberCounter();
//             isCount = true;
//           }
//         }
//       });
//     });
//     observer.observe(countBox);
//   } else {
// dành cho browser ko hỗ trợ IntersectionObserver
//     window.onscroll = () => {
//       const rect = countBox.getBoundingClientRect();
//       const rect1 = mainBanner.getBoundingClientRect();
//       if (rect.y - rect1.y <= window.innerHeight + window.pageYOffset) {
//         if (isCount == false) {
//           numberCounter();
//           isCount = true;
//         }
//       }
//     };
//   }
// }

// function numberCounter() {
//   const numberEl = document.querySelectorAll(".counter");
//   numberEl.forEach((item) => {
//     counter(item);
//   });
//     function counter(item) {
//       let from = 0
//       let to = parseInt(item.getAttribute("data-val"))
//       let duration = parseInt(item.getAttribute("data-time"))
//       let interval = 1000 / 30
//       let step = duration / interval
//       let plus = to / step

//       let counting = setInterval(() => {
//         from += plus;
//       if (from > to) {
//         clearInterval(counting);
//         from = to
//         item.innerText = `${to}+`;
//       } else {
//         item.innerText = `${Math.round(from)}+`;
//       }

//       },interval)
//     }
// }
