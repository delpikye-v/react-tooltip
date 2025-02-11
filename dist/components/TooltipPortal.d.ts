import React from 'react';
import { IFTooltipBaseProps } from './types';
export interface IFTooltipPortalProps extends IFTooltipBaseProps {
    tooltipId: string;
    isShow?: boolean;
    target?: any;
    resizeSize?: any;
    setTargetTooltip: (element?: any) => void;
}
declare const TooltipPortal: React.FC<IFTooltipPortalProps>;
export default TooltipPortal;
