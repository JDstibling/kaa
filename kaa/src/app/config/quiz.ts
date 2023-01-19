export const quiz: Array<quizInterface> = [
    {
        citation: '',
        persoAtRandomCitation: '',
        picture: [],
        result: false,
        id :1
    },
    {
        citation: '',
        persoAtRandomCitation: '',
        picture: [],
        result: false,
        id :2
    },
    {
        citation: '',
        persoAtRandomCitation: '',
        picture: [],
        result: false,
        id :3
    },
    {
        citation: '',
        persoAtRandomCitation: '',
        picture: [],
        result: false,
        id :4
    },
    {
        citation: '',
        persoAtRandomCitation: '',
        picture: [],
        result: false,
        id :5
    },
    {
        citation: '',
        persoAtRandomCitation: '',
        picture: [],
        result: false,
        id :6
    },
    {
        citation: '',
        persoAtRandomCitation: '',
        picture: [],
        result: false,
        id :7
    },
    {
        citation: '',
        persoAtRandomCitation: '',
        picture: [],
        result: false,
        id :8
    },
    {
        citation: '',
        persoAtRandomCitation: '',
        picture: [],
        result: false,
        id :9
    },
    {
        citation: '',
        persoAtRandomCitation: '',
        picture: [],
        result: false,
        id :10
    }
   


]

export interface quizInterface {
    citation: string;
    persoAtRandomCitation: string | null;
    picture: Array<pictureInterface> | any;
    result: boolean;
    id: number;
}

export interface pictureInterface {
    goodPicture: string | any;
    noGoodPicture1: string | any;
    noGoodPicture2: string | any;
}