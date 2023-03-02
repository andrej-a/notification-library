import { spawnAnimation, position } from '../../models/alert';
import getSmoothSlidingIn from './getSmoothSlidingIn';
import getFadeIn from './getFadeIn';
import { FlattenSimpleInterpolation } from 'styled-components';

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
