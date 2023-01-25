export const score: Array<scoreInterface> = [
    {
        Pseudo: '',
        Score: 0,
        Date: ''
    }
]

export interface scoreInterface {
    Pseudo: string;
    Score: number;
    Date: Date | string;
}