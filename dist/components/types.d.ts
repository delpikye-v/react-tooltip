/// <reference types="react" />
export type TypePlacement = 'top' | 'bottom' | 'left' | 'right';
export type TypeTrigger = 'hover' | 'focus' | 'click' | 'manual';
export interface IFTooltipBaseProps {
    tooltipContent?: string | React.ReactNode;
    tooltipClassName?: string;
    limitWidth?: boolean;
    delayShow?: number | string;
    display?: 'fade' | 'zoom';
    backgroundColor?: string;
    tooltipColor?: string;
    centerArrow?: boolean;
    placement?: TypePlacement;
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
}
