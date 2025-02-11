import React from 'react';
export interface IFContextProps {
    children: any;
    showTooltip: (value?: any) => any;
    hideTooltip: () => any;
    isShow: boolean;
    tooltipId: string;
    tooltipElement: any;
    shareContext?: boolean;
}
declare const TooltipContext: React.FC<IFContextProps>;
export declare const useTooltipContext: () => IFContextProps;
export default TooltipContext;
