import type { TextRowProps } from "src/components/molecules/TextRow/TextRow";

export interface MesseRaw {
    id: number;
    created_at: string;
    giorno: string;
    luogo: string | null;
    messa_festiva: boolean;
    orario: string | null;
    "valido_dal": string | null;
    "valido_fino_al": string | null;
    "valido_tutto_l'anno": boolean | null;
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

// Funzione che ignora l’anno nei controlli di validità
function isDateInRangeIgnoringYear(
    today: Date,
    validoDal: Date | null,
    validoFino: Date | null,
    validoTuttoAnno: boolean
): boolean {
    if (validoTuttoAnno) return true;
    if (!validoDal || !validoFino) return true; // la considera sempre valida se manca uno dei due

    const todayMonthDay = today.getMonth() * 100 + today.getDate();
    const startMonthDay = validoDal.getMonth() * 100 + validoDal.getDate();
    const endMonthDay = validoFino.getMonth() * 100 + validoFino.getDate();

    if (startMonthDay <= endMonthDay) {
        // Intervallo nello stesso anno (es. 1 maggio - 30 settembre)
        return todayMonthDay >= startMonthDay && todayMonthDay <= endMonthDay;
    } else {
        // Intervallo che attraversa l’anno (es. 1 settembre - 31 maggio)
        return todayMonthDay >= startMonthDay || todayMonthDay <= endMonthDay;
    }
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

        const isInRange = isDateInRangeIgnoringYear(today, validoDal, validoFino, validoTuttoAnno);

        if (isInRange) {
            const day = entry.giorno?.trim();
            const orarioRaw = entry.orario ?? "00:00";
            const orario = formatOrario(orarioRaw);
            const dettaglio = `${orario} | ${entry.luogo ?? "Luogo non disponibile"}`;

            if (day) {
                if (!grouped[day]) grouped[day] = [];
                grouped[day].push({ orario, dettaglio });
            }
        }
    });

    const result: TextRowProps[] = GIORNI_SETTIMANA
        .filter((day) => grouped[day])
        .map((day) => {
            const sortedTimes = grouped[day].sort((a, b) => parseTime(a.orario) - parseTime(b.orario));

            return {
                subtitle: day,
                text: sortedTimes.map((item) => item.dettaglio),
            };
        });

    return result;
}
