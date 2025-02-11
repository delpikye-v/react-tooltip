import React from 'react';
import { IFTooltipBaseProps, TypeTrigger } from './types';
export interface IFTooltipProps extends IFTooltipBaseProps {
    tagName?: string;
    className?: string;
    style?: React.CSSProperties;
    trigger?: TypeTrigger;
    handleClick?: (event: any) => any;
    handleMouseEnter?: (event: any) => any;
    handleMouseLeave?: (event: any) => any;
    onClick?: (event: any) => any;
    onMouseEnter?: (event: any) => any;
    onMouseLeave?: (event: any) => any;
    onShown?: () => any;
    onHidden?: (show?: boolean) => any;
    mouseWheel?: boolean;
    shareContext?: boolean;
    open?: boolean;
    showSync?: boolean;
    hideIfResize?: boolean;
    hideIfScroll?: boolean;
    forceHide?: any;
}
declare const Tooltip: React.FC<IFTooltipProps>;
export default Tooltip;
