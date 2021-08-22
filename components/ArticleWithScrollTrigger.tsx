import styles from './Article.module.scss'
import {useRef} from "react";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

export const ArticleWithScrollTrigger = (): JSX.Element => {
  const isClient = typeof window !== 'undefined';
  const blockElement = useRef();
  let gsapKilled = false;

  useIsomorphicLayoutEffect(() => {
    if (!isClient) return;
    if (!blockElement) return;

    const el = gsap.utils.selector(blockElement);
    let maskImageAnimation;

    ScrollTrigger.matchMedia({
      '(min-width: 48em)': () => {
        if (!gsapKilled) {
          maskImageAnimation = gsap.fromTo(
            el('img'),
            {x: 0},
            {
              ease: 'power1.in',
              x: '-80%',
              duration: 2.5,
              scrollTrigger: {
                trigger: blockElement.current,
                start: 'top bottom', // position of trigger meets the scroller position
                end: 'bottom top', // '+=2000', // when the bottom of the endTrigger hits the center of the scroller
                pin: false,
                scrub: true,
                // markers: true
              }
            }
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      maskImageAnimation?.scrollTrigger?.kill();
      maskImageAnimation?.kill();
      gsapKilled = true;
    };
  }, [isClient]);


  return (
    <article ref={blockElement} className={styles.Block}>
      <header>
        <h2>Lorem ipsum</h2>
        <p>Sin ut dolorem</p>
      </header>

      <img src="http://placekitten.com/300/200" alt=""/>
    </article>
  )
}
