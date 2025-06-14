import type { TextRowProps } from "src/components/molecules/TextRow/TextRow";

export const contatti: TextRowProps[] = [

    {
        subtitle: 'Lunedì e Venerdì',
        text: '9:00 - 11:00',
    },
    {
        subtitle: 'Mecoledì',
        text: '15:00 - 17:00',
    },
    {
        subtitle: <a href="tel:+393485876125"><h3>Telefono: 348 5876125</h3></a>,
        text: 'N.B: La segreteria è reperibile telefonicamente solo durante gli orari di apertura.',
    },
    {
        subtitle: <a href="mailto:segreteria@parrocchieprevalle.it"><h3>Email: segreteria@parrocchieprevalle.it</h3></a>,
        text: 'Puoi contattarci anche tramite email.',
    },
    
    // {
    //     subtitle: 'Parroco don Fabrizio Gobbi',
    //     text: <a href="tel:+393384350441">338 43 50 441</a>,
    // },
    // {
    //     subtitle: 'Canonica',
    //     text: <a href="tel:+39030603635">030 60 36 35</a>,
    // },   
];
