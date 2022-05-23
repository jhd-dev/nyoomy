import type { ReactNode, FC, ReactElement } from 'react';
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import type { TooltipProps } from '@mui/material/Tooltip';

interface IDisableableTooltipProps {
    children?: ReactNode;
    title: string;
    disabled: boolean;
    tooltipProps?: Omit<TooltipProps, 'children'>;
}

export const DisableableTooltip: FC<IDisableableTooltipProps> = ({
    children,
    title,
    disabled,
    tooltipProps = {} as Omit<TooltipProps, 'children'>,
}) => (
    <>
        {disabled ? (
            <>{children}</>
        ) : (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Tooltip {...tooltipProps} title={title}>
                {children as ReactElement}
            </Tooltip>
        )}
    </>
);
