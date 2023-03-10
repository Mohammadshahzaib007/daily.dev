import React, { CSSProperties, ReactElement } from 'react';
import classNames from 'classnames';
import classed from '../lib/classed';

const Dot = classed('div', 'absolute w-2 h-2 rounded-full');

export enum AlertColor {
  BrightRed = 'bg-theme-status-error',
  Fill = 'bg-theme-status-fill',
  Success = 'bg-theme-status-success',
  Cabbage = 'bg-theme-color-cabbage',
}

interface AlertDotProps {
  color: AlertColor;
  className?: string;
  style?: CSSProperties;
}

export const AlertDot = function AlertDot({
  color,
  className,
  ...props
}: AlertDotProps): ReactElement {
  return <Dot {...props} className={classNames(color, className)} />;
};
