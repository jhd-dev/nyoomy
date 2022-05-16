import type { FC, ReactElement } from 'react';
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import type { TooltipProps } from '@mui/material/Tooltip';

interface IDisableableTooltipProps {
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
