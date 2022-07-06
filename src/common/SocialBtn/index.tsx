import React from 'react'


interface SocialButtonProps {
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    width?: string;
    img_url?: string;
}



const SocialButton = ({
    children,
    height,
    onClick,
    width,
    img_url
}: SocialButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'white',
                border: "none",
                borderRadius: 5,
                height,
                width,
                letterSpacing: "4px",
                fontSize: "14px",
                fontFamily: "inter",
                color: "#2F64B4"
            }}
        >
            <div style={{ display: 'flex' }}>
                <div style={{ marginLeft: "10px", display: 'flex', alignItems: 'center' }}>
                    <img style={{ height: "25px", width: "25px" }} src={img_url} />
                </div>
                <div style={{ marginLeft: "25px", display: 'flex', alignItems: 'center' }}>
                    {children}
                </div>
            </div>

        </button>
    )
}

export default SocialButton