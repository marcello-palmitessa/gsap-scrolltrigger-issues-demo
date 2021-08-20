import { useLayoutEffect, useEffect } from 'react';

/**
 * Ensure the name used in components is useLayoutEffect
 * Reference:
 *  https://greensock.com/react-advanced#useIsomorphicLayoutEffectteRef
 *  https://github.com/Andarist/use-isomorphic-layout-effect/blob/master/src/index.ts
 *  https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
 */
export default typeof document !== 'undefined' ? useLayoutEffect : useEffect;
