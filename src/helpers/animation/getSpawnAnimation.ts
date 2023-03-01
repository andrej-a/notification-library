import { spawnAnimation, position } from '../../models/alert';
import getSmoothSlidingIn from './getSmoothSlidingIn';
import getFadeIn from './getFadeIn';
import { FlattenSimpleInterpolation } from 'styled-components';

const getSpawnAnimation = (spawnAnimation: spawnAnimation, position: position): FlattenSimpleInterpolation => {
    switch (spawnAnimation) {
        case 'smooth-sliding-in':
            return getSmoothSlidingIn(position);
        case 'fade-in':
            return getFadeIn();

        default:
            return getSmoothSlidingIn(position);
    }
};

export default getSpawnAnimation;
