export interface MessaItem {
    title: string;
    text: string[];
}

export const messeData: MessaItem[] = [
    {
        title: 'Lunedì',
        text: ['8:00 — Santa Messa', '20:00 — Rosario'],
    },
    {
        title: 'Martedì',
        text: ['8:00 — Santa Messa', '18:30 — Adorazione'],
    },
    // ...altri giorni
];
