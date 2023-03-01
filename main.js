import {swiper} from './slider.js';
import './styles/main.scss';
import Swiper, {Navigation, Pagination} from "swiper";


if (window.innerWidth < 768) {
    new Swiper('.review-swiper', {
        modules: [Navigation, Pagination],
        // effect: 'cards',
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.review-slider-pagination'
        }
    });
}