import type { ContentProps } from "src/components/molecules/Content/Content";

// Tipi raw da Supabase
export interface CodiciRaw {
    id: number;
    nome: string | null;
    iban: string | null;
    created_at: string;
}

export function mapCodiciRawToContent(rawItems: CodiciRaw[]): ContentProps[] {
    return rawItems.map(item => ({
        id: item.id.toString(),
        title: item.nome ?? "Nome non disponibile",
        subtitle: "", 
        text: item.iban ?? "IBAN non disponibile",
        cta: undefined,
    }));
}

