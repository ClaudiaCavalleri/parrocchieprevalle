import { createClient } from "@supabase/supabase-js";

import type { ContentProps } from "../components/molecules/Content/Content";
import type { TextRowProps } from "../components/molecules/TextRow/TextRow";
import type { CodiciRaw } from "../helpers/codici";
import type { MesseRaw } from "../helpers/messe";

import { mapCodiciRawToContent,} from "../helpers/codici";
import { mapMesseToTabs } from "../helpers/messe";


type ResultType = {
    iban: CodiciRaw[];
    contentList: ContentProps[];
    messe: MesseRaw[];
    tabData: TextRowProps[];
};

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export async function fetchData(): Promise<{
    iban: CodiciRaw[];
    contentList: ContentProps[];
    messe: MesseRaw[];
    tabData: TextRowProps[];
}> {
    const result: ResultType = {
        iban: [],
        contentList: [],
        messe: [],
        tabData: [],
    };

    const { data, error } = await supabase
        .from('codici')
        .select()
        .order('id', { ascending: true });

    if (error) {
        console.error("Errore fetching codici:", error);
    } else if (data) {
        result.iban = data;
        result.contentList = mapCodiciRawToContent(data);
    }

    const { data: messeData, error: messeError } = await supabase
        .from('messe')
        .select();

    if (messeError) {
        console.error("Errore fetching messe:", messeError);
    } else if (messeData) {
        result.messe = messeData;
        result.tabData = mapMesseToTabs(messeData);
    }

    return result;
}