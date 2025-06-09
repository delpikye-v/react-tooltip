/// <reference types="react" />
import { TypePlacement } from './types';
declare const fadeInfo: {
    fade: import("styled-components/dist/models/Keyframes").default[];
    zoom: import("styled-components/dist/models/Keyframes").default[];
};
interface IFStyledTooltipProps {
    top?: number | null;
    left?: number | null;
    backgroundColor?: string;
    tooltipColor?: string;
    animationDisplay?: keyof typeof fadeInfo;
    showDelay?: string | number;
    constrainWidth?: boolean;
    arrowPosition: number | null;
    pos: TypePlacement | null;
}
interface IFStyledArrowProps {
    pos?: TypePlacement;
    arrowPosition?: number;
    backgroundColor?: string;
}
export declare const StyledFlexCenter: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const StyledTooltip: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, IFStyledTooltipProps>> & string;
export declare const StyledArrow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, IFStyledArrowProps>> & string;
export {};
