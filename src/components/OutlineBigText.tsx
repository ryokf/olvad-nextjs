import React, { forwardRef } from 'react';

interface OutlineBigTextProps {
    children: string;
    className?: string;
}

const OutlineBigText = forwardRef<HTMLHeadingElement, OutlineBigTextProps>(({ children, className }, ref) => {
    return (
        <h1 ref={ref} className={`text-[20rem] text-outline absolute -z-10 ${className}`}>
            {children}
        </h1>
    );

});

OutlineBigText.displayName = 'OutlineBigText';

export default OutlineBigText;