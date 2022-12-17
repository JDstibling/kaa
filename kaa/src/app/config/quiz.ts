export const quiz: Array<quizInterface> = [
    {
        citation: '',
        picture: [],
        result: false,
        id :1
    },
    {
        citation: '',
        picture: [],
        result: false,
        id :2
    },
    {
        citation: '',
        picture: [],
        result: false,
        id :3
    },
    {
        citation: '',
        picture: [],
        result: false,
        id :4
    },
    {
        citation: '',
        picture: [],
        result: false,
        id :5
    },
    {
        citation: '',
        picture: [],
        result: false,
        id :6
    },
    {
        citation: '',
        picture: [],
        result: false,
        id :7
    },
    {
        citation: '',
        picture: [],
        result: false,
        id :8
    },
    {
        citation: '',
        picture: [],
        result: false,
        id :9
    },
    {
        citation: '',
        picture: [],
        result: false,
        id :10
    }
   


]

export interface quizInterface {
    citation: string;
    picture: Array<pictureInterface> | any;
    result: boolean;
    id: number
}

export interface pictureInterface {
    goodPicture: string | any;
    noGoodPicture1: string | any;
    noGoodPicture2: string | any;
}
