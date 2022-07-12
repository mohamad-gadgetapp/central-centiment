import React from 'react'


interface SocialButtonProps {
    children?: React.ReactNode;
    // height: string;
    onClick: () => void;
    // width?: string;
    socialBtn?: string;
    // fontSizeClass?: string;
    img_url?: string;
}



const SocialButton = ({
    children,
    onClick,
    socialBtn,
    img_url
}: SocialButtonProps) => {
    return (
        <button
            className={socialBtn}
            onClick={onClick}
        // style={{
        //     backgroundColor: 'white',
        //     border: "none",
        //     borderRadius: 5,
        //     height,
        //     width,
        //     letterSpacing: "4px",
        //     fontFamily: "inter",
        //     color: "#2F64B4"
        // }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{ height: "1.95rem", width: "1.95rem" }} src={img_url} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {children}
                </div>
                <div></div>
            </div>

        </button>
    )
}

export default SocialButton