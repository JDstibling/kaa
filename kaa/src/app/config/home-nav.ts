export const homeNav: Array<homeNavInterface> = [
    {
        name: 'Personnages',
        image: 'http://img.xooimage.com/files42/2/c/0/perceval-72f7f2.jpg',
        description: 'personnage !!!...',
    },
    {
        name: 'citations',
        image: 'http://www.onenagros.org/wordpress/wp-content/uploads/persos/DameS%C3%A9li.jpg',
        description: 'citation ...',
    },
    {
        name: 'quiz',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoy-XoO-pXk6IPUBxtDOblT1fQR2tsE00qg&usqp=CAU',
        description: 'quiz ...',
    },
    {
        name: 'FaQ',
        image: 'https://www.jokeme.fr/images/Karadoc.jpg',
        description: 'réunion ...',
    }
]

export interface homeNavInterface {
    name: string;
    image: string;
    description: string;
}


