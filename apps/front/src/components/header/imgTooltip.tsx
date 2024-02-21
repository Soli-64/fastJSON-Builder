// import React from "react";

interface ImageTooltipProps {
    src: string
    alt: string
    tooltipText: string
}

function ImageTooltip({ src, alt, tooltipText }: ImageTooltipProps) {

    return (
        <div className="image-container">
            <img className="header__link__img" src={src} alt={alt} />
            <div className="tooltip">{tooltipText}</div>
        </div>
    );
}

export default ImageTooltip;