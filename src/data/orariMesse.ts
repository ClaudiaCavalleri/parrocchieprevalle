export interface MessaItem {
    title: string;
    text: string[];
}

export const tabHeadMesse: MessaItem =
    {
        title: 'Giorno della settimana',
        text: ['Ora e luogo'],
    }

export const messeData: MessaItem[] = [
    {
        title: 'Sabato',
        text: ['8:30 — San Zenone', '17:00 — San Zenone', '18:30 - San Michele'],
    },
    {
        title: 'Domenica',
        text: ['7:30 — San Michele', '9:00 — San Zenone', '10:30 - San Michele', '18:00 - San Michele'],
    },
    
    {
        title: 'Lunedì',
        text: ['8:30 — San Michele', '17:00 — San Zenone'],
    },
    {
        title: 'Martedì',
        text: ['8:30 — San Zenone', '17:00 — San Michele'],
    },
    {
        title: 'Mercoledì',
        text: ['8:30 — San Michele', '17:00 — San Zenone'],
    },
    {
        title: 'Giovedì',
        text: ['17:00 — San Zenone', '18:00 — San Michele'],
    },
    {
        title: 'Venerdì',
        text: ['8:30 — San Michele', '17:00 — San Zenone'],
    },    
];
