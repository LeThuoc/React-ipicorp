import IS from '~/assets/images/is-img.png';
import around from '~/assets/images/around-img.png';
import dara from '~/assets/images/dara-img.png';
import loctroi from '~/assets/images/loctroi-img.png';
import willson_hill from '~/assets/images/willson_hill-img.png';
import anhtin from '~/assets/images/anhtin-img.png';

const MockProjectData = {
    data: [
        {
            id: 'pj1',
            img: IS,
            type: 'tmdt',
            title: 'kido group',
            business: 'Hàng tiêu dùng, hệ thống phân phối',
            description: 'cung cấp giải pháp hệ thống quản trị mạng lưới bán lẻ các cấp.',
            to: '/product',
        },
        {
            id: 'pj2',
            img: around,
            type: 'giaonhan',
            title: 'around',
            business: 'giao nhận, thương mại điên tử',
            description: 'giải pháp mua sắm và tặng quà dành cho người bận rộn.',
            to: '/product',
        },
        {
            id: 'pj3',
            img: dara,
            type: 'giaonhan',
            title: 'dara mall',
            business: 'giao nhận, thương mại điên tử',
            description: 'là nơi mua sắm lý tưởng với hàng ngàn sản phẩm đa dạng.',
            to: '/product',
        },
        {
            id: 'pj4',
            img: loctroi,
            type: 'htpp',
            title: 'lộc trời group',
            business: 'hệ thống phân phối, nông nghiệp',
            description: 'cung cấp hệ thống phân phối, giải pháp về nông nghiệp',
            to: '/product',
        },
        {
            id: 'pj5',
            img: willson_hill,
            type: 'b2b',
            title: 'Willson & Hill',
            business: 'hệ thống phân phối, thuơng mai điện tử',
            description: 'cung cấp hệ thống phân phối, giải pháp về thương mại điện tử',
            to: '/product',
        },
        {
            id: 'pj6',
            img: anhtin,
            type: 'htpp',
            title: 'anh tin corp',
            business: 'công nghiệp, hệ thống phân phối, nông nghiệp',
            description:
                'là nhà phân phối Huyendai lớn nhất Việt Nam. Họ quản lý hơn 1.000.000 phương tiện',
            to: '/product',
        },
    ],
};
export default MockProjectData;
