import type { TextRowProps } from "src/components/molecules/TextRow/TextRow";

export interface MesseRaw {
    id: number
    created_at: string
    giorno: string
    luogo: string | null
    messa_festiva: boolean
    orario: string | null
    "valido_dal": string | null
    "valido_fino_al": string | null
    "valido_tutto_l'anno": boolean | null
}

const GIORNI_SETTIMANA: string[] = [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica",
];

function parseTime(time: string): number {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}

function formatOrario(orario: string): string {
    const [hours, minutes] = orario.split(":");
    const hoursWithoutZero = parseInt(hours, 10);

    return `${hoursWithoutZero}:${minutes}`;
}

const today = new Date();

const giorno = today.getDate();
const mese = today.toLocaleString("it-IT", { month: "long" });
const anno = today.toLocaleString("it-IT", { year: "2-digit" });

export const dataFormattata = `${giorno} ${mese} '${anno}`;

export function mapMesseToTabs(messe: MesseRaw[]): TextRowProps[] {
    
    const grouped: Record<string, { orario: string; dettaglio: string }[]> = {};

    messe.forEach((entry) => {
        const validoDal = entry.valido_dal ? new Date(entry.valido_dal) : null;
        const validoFino = entry.valido_fino_al ? new Date(entry.valido_fino_al) : null;
        const validoTuttoAnno = entry["valido_tutto_l'anno"] === true;

        const isInRange =
            validoTuttoAnno ||
            (validoDal && validoFino && today >= validoDal && today <= validoFino);

        if (isInRange) {
            const day = entry.giorno?.trim();
            const orarioRaw = entry.orario ?? "00:00"; 
            const orario = formatOrario(orarioRaw); 
            const dettaglio = `${orario} | ${entry.luogo ?? "Luogo non disponibile"}`;

            if (day) {
                if (!grouped[day]) {
                    grouped[day] = [];
                }
                grouped[day].push({ orario, dettaglio });
            }
        }
    });

    const result: TextRowProps[] = GIORNI_SETTIMANA
        .filter((day) => grouped[day])
        .map((day) => {
            const sortedTimes = grouped[day].sort((a, b) =>
                parseTime(a.orario) - parseTime(b.orario)
            );

            return {
                subtitle: day,
                text: sortedTimes.map((item) => item.dettaglio),
            };
        });

    return result;
}

