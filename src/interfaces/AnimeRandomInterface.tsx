// Generated by https://quicktype.io

export interface AnimeRandomInterface {
    data: Data;
}

export interface Data {
    mal_id:          number;
    url:             string;
    images:          { [key: string]: Image };
    trailer:         Trailer;
    approved:        boolean;
    titles:          Title[];
    title:           string;
    title_english:   string;
    title_japanese:  string;
    title_synonyms:  string[];
    type:            string;
    source:          string;
    episodes:        number;
    status:          string;
    airing:          boolean;
    aired:           Aired;
    duration:        string;
    rating:          string;
    score:           number;
    scored_by:       number;
    rank:            number;
    popularity:      number;
    members:         number;
    favorites:       number;
    synopsis:        string;
    background:      null;
    season:          null;
    year:            null;
    broadcast:       Broadcast;
    producers:       Demographic[];
    licensors:       Demographic[];
    studios:         Demographic[];
    genres:          Demographic[];
    explicit_genres: any[];
    themes:          any[];
    demographics:    Demographic[];
}

export interface Aired {
    from:   string;
    to:     null;
    prop:   Prop;
    string: string;
}

export interface Prop {
    from: From;
    to:   From;
}

export interface From {
    day:   number | null;
    month: number | null;
    year:  number | null;
}

export interface Broadcast {
    day:      null;
    time:     null;
    timezone: null;
    string:   null;
}

export interface Demographic {
    mal_id: number;
    type:   string;
    name:   string;
    url:    string;
}

export interface Image {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}

export interface Title {
    type:  string;
    title: string;
}

export interface Trailer {
    youtube_id: null;
    url:        null;
    embed_url:  null;
    images:     Images;
}

export interface Images {
    image_url:         null;
    small_image_url:   null;
    medium_image_url:  null;
    large_image_url:   null;
    maximum_image_url: null;
}
