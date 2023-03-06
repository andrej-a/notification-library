import { FlattenSimpleInterpolation } from 'styled-components';

import { position, spawnAnimation } from '@/models/alert';
import getFadeIn from './getFadeIn';
import getSmoothSlidingIn from './getSmoothSlidingIn';

const getSpawnAnimation = (
    spawnAnimation: spawnAnimation,
    position: position,
    animationDuration: number,
): FlattenSimpleInterpolation => {
    switch (spawnAnimation) {
        case 'smooth-sliding-in':
            return getSmoothSlidingIn(position, animationDuration);
        case 'fade-in':
            return getFadeIn(animationDuration);

        default:
            return getSmoothSlidingIn(position, animationDuration);
    }
};

export default getSpawnAnimation;
