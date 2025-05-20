import React, { DOMAttributes, useState } from 'react';

export interface MapProps extends DOMAttributes<HTMLOrSVGElement> {
    src: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    wrapperClassName?: string;
};

const Map: React.FC<MapProps> = ({
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4256.628010469242!2d10.415030141616315!3d45.54842884779589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPrevalle%20Parrocchia%20San%20Michele%2C%20Prevalle%20Parrocchia%20San%20Zenone!5e1!3m2!1sit!2sit!4v1747603559630!5m2!1sit!2sit",
    width = 600,
    height = 800,
    className = '',
    wrapperClassName = '',
}) => {
    return (
        <div className={`map-wrapper ${wrapperClassName}`}>
            <a
                href="https://maps.app.goo.gl/1vXM3g8BJUft9Dep9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apri la mappa su Google Maps"
            >
                <iframe
                    className={`map ${className}`}
                    src={src}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mappa delle parrocchie di Prevalle`}
                ></iframe>
            </a>
        </div>
    );
};

export default Map;
