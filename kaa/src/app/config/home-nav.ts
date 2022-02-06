export const homeNav: Array<homeNavInterface> = [
    {
        name: 'Personnages',
        image: 'http://img.xooimage.com/files42/2/c/0/perceval-72f7f2.jpg',
        description: 'personnage ...',
        mouseOn: false,
        selected: false,
    },
    {
        name: 'citation',
        image: 'http://www.onenagros.org/wordpress/wp-content/uploads/persos/DameS%C3%A9li.jpg',
        description: 'citation ...',
        mouseOn: false,
        selected: false,
    },
    {
        name: 'réunion',
        image: 'https://www.jokeme.fr/images/Karadoc.jpg',
        description: 'réunion ...',
        mouseOn: false,
        selected: false,
    },
    {
        name: 'concours',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoy-XoO-pXk6IPUBxtDOblT1fQR2tsE00qg&usqp=CAU',
        description: 'concours ...',
        mouseOn: false,
        selected: false,
    }
]

export interface homeNavInterface {
    name: string;
    image: string;
    description: string;
    mouseOn: boolean;
    selected: boolean;
}


