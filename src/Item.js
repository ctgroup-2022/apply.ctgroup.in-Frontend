import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

// Register plugins
gsap.registerPlugin(ScrollTrigger, Flip);

export class Item {
    // Initialize DOM and style related properties
    DOM = {
        el: null,
        titleWrap: null,
        titleUp: null,
        titleDown: null,
        content: null,
        svg: null,
        mask: null,
        image: null,
    };
    flipstate = null;

    constructor(DOM_el) {
        this.DOM.el = DOM_el;
        this.DOM.titleWrap = this.DOM.el.querySelector('.title-wrap');
        this.DOM.titleUp = this.DOM.titleWrap.querySelector('.title--up');
        this.DOM.titleDown = this.DOM.titleWrap.querySelector('.title--down');
        this.DOM.content = [...this.DOM.el.querySelectorAll('.content')];
        this.DOM.svg = this.DOM.el.querySelector('.content__img');
        this.DOM.mask = this.DOM.svg.querySelector('.mask');
        this.DOM.image = this.DOM.svg.querySelector('image');

        this.flipstate = Flip.getState([this.DOM.titleUp, this.DOM.titleDown]);

        this.DOM.content[1].prepend(this.DOM.titleUp, this.DOM.titleDown);

        const isCircle = this.DOM.mask.tagName.toLowerCase() === 'circle';

        const flip = Flip.from(this.flipstate, {
            ease: 'none',
            simple: true,
        })
            .fromTo(
                this.DOM.mask,
                {
                    attr: isCircle
                        ? { r: this.DOM.mask.getAttribute('r') }
                        : { d: this.DOM.mask.getAttribute('d') },
                },
                {
                    ease: 'none',
                    attr: isCircle
                        ? { r: this.DOM.mask.dataset.valueFinal }
                        : { d: this.DOM.mask.dataset.valueFinal },
                },
                0
            )
            .fromTo(
                this.DOM.image,
                {
                    transformOrigin: '50% 50%',
                    filter: 'brightness(100%)',
                },
                {
                    ease: 'none',
                    scale: isCircle ? 1.2 : 1,
                    filter: 'brightness(150%)',
                },
                0
            );

        ScrollTrigger.create({
            trigger: this.DOM.titleWrap,
            start: 'clamp(top bottom-=10%)',
            end: '+=40%',
            scrub: true,
            animation: flip,
        });
    }
}
