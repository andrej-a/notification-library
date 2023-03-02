import { FlattenSimpleInterpolation } from 'styled-components';
import { fadeAnimation, position } from '../../models/alert';
import getSmoothSlidingOut from './getSmoothSlidingOut';
import getFadeOut from './getFadeOut';

const getFadeAnimation = (
    fadeAnimation: fadeAnimation,
    position: position,
    animationDuration: number,
): FlattenSimpleInterpolation => {
    switch (fadeAnimation) {
        case 'smooth-sliding-out':
            return getSmoothSlidingOut(position, animationDuration);
        case 'fade-out':
            return getFadeOut(animationDuration);
        default:
            return getSmoothSlidingOut(position, animationDuration);
    }
};

export default getFadeAnimation;
