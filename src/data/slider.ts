import type { ImageProps } from "../components/atoms/Image/Image";

import facciataSMichele from "src/assets/img/facciata-san-michele.jpg";
import interniSMichele from "src/assets/img/interni-san-michele.jpg";
import facciataSZenone from "src/assets/img/facciata-san-zenone.jpg";
import interniSZenone from "src/assets/img/interni-san-zenone.jpg";
import facciataSCarlo from "src/assets/img/facciata-san-carlo-celle.jpg";
import interniSCarlo from "src/assets/img/interni-san-carlo-celle.jpg";
import facciataCarrozzone from "src/assets/img/facciata-carrozzone.jpg";
import interniCarrozzone from "src/assets/img/interni-carrozzone.jpg";
import campanile from "src/assets/img/fiancata-campanile-san-zenone.jpg";

export const slider: ImageProps[] = [
    {
        alt: 'Facciata chiesa di S. Michele',
        src: facciataSMichele,
    }, 
    {
        alt: 'Interni chiesa di S. Michele',
        src: interniSMichele,
    }, 
    {
        alt: 'Facciata chiesa di S. Zenone',
        src: facciataSZenone,
    }, 
    {
        alt: 'Interni chiesa di S. Zenone',
        src: interniSZenone,
    }, 
    {
        alt: 'Facciata chiesa di S. Carlo (fraz. Celle)',
        src: facciataSCarlo,
    }, 
    {
        alt: 'Interni chiesa di S. Carlo (fraz. Celle)',
        src: interniSCarlo,
    }, 
    {
        alt: 'Facciata Santuario della Madonna del Carrozzone',
        src: facciataCarrozzone,
    }, 
    {
        alt: 'Interni Santuario della Madonna del Carrozzone',
        src: interniCarrozzone,
    }, 
    {
        alt: 'Fianco chiesa di S. Zenone e campanile',
        src: campanile,
    },
];
