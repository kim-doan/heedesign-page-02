import React from "react";

import { useCastedRef } from "lib/hooks/useCastedRef";
import { useOnScreen } from "lib/hooks/useOnScreen";

import "./style.css";

type AnimationTiming = "linear" | "ease-in" | "ease-out" | "ease-in-out";
type AnimationFillMode = "forwards" | "backwards" | "both" | "none";
type AnimationType =
  | "fadeIn"
  | "fadeOut"
  | "fadeInAndOut"
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "scaleIn"
  | "reduceHeight"
  | "waving-hand";

export interface AnimationProps {
  children?: React.ReactNode;
  type?: AnimationType;
  timing?: AnimationTiming;
  fillMode?: AnimationFillMode;
  delay?: number;
  duration?: number;
  iterationCount?: number;
  style?: React.CSSProperties;
  className?: string;
  onAnimationEnd?: () => void;
}
const AnimationWrapper = ({
  type = "fadeIn",
  timing = "ease-out",
  duration = 200,
  delay = 0,
  iterationCount = 1,
  fillMode = "backwards",
  children,
  onAnimationEnd,
  className,
  style,
}: AnimationProps): React.ReactElement => {
  const ref = useCastedRef<HTMLDivElement>();
  const onScreen = useOnScreen<HTMLDivElement>(ref);

  return (
    <div
      ref={ref}
      className={className}
      onAnimationEnd={onAnimationEnd}
      style={
        onScreen
          ? {
              ...style,
              animationName: `${type}`,
              animationTimingFunction: `${timing}`,
              animationDuration: `${duration}ms`,
              animationDelay: `${delay}ms`,
              animationIterationCount: `${iterationCount}`,
              animationFillMode: `${fillMode}`,
            }
          : { ...style, opacity: 0 }
      }
    >
      {children}
    </div>
  );
};
export default AnimationWrapper;
