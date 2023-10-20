'use client';
import React from 'react';

interface TypographyProps {
    children: string
}

function Title(props: TypographyProps) {
    return (
        <h1>{props.children}</h1>
    )
}

export { Title }