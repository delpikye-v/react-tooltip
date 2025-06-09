/// <reference types="react" />
export type TypePlacement = 'top' | 'bottom' | 'left' | 'right';
export type TypeTrigger = 'hover' | 'focus' | 'click' | 'manual';
export interface IFTooltipBaseProps {
    tooltipContent?: string | React.ReactNode;
    tooltipClassName?: string;
    constrainWidth?: boolean;
    showDelay?: number | string;
    animationDisplay?: 'fade' | 'zoom';
    backgroundColor?: string;
    tooltipColor?: string;
    arrowCentered?: boolean;
    placement?: TypePlacement;
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
}
