import React from "react";

interface ButtonProps {
    border?: string;
    color?: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    width?: string;
}

const Button = ({
    border,
    color,
    children,
    height,
    onClick,
    width
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                border: "none",
                borderRadius: 10,
                height,
                width,
                color: "white",
                letterSpacing: "4px",
                fontSize: "20px",
                fontFamily: "inter",
            }}
        >
            {children}
        </button>
    );
}

export default Button;