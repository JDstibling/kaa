// export class citation {
//     citation!: string;
//     infos!: Infos[];
//     id!: number;
// }

// export class Infos {
//     auteur!: string;
//     acteur!: string;
//     personnage!: string;
//     saison!: string;
//     episode!: number;
// }

export interface citation {
    citation: string;
    infos: Infos[];
    id: number;
}

export interface Infos {
    auteur: string;
    acteur: string;
    personnage: string;
    saison: string;
    episode: number;
}