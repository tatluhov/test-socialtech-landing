import Swiper, {Navigation, Pagination, EffectCards} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

export const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, EffectCards],
    effect: 'cards',
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination'
    }
});