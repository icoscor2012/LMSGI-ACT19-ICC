import './index.css'
import Header from './components/Header'
import Library from './pages/Library'
import type IBook from './types/Interfaces'

export default function App() {

    /*
    const books: IBook[] = [
        {
            ISBN: 1,
            title: "Mi lucha",
            author: "Pintor austriaco",
            published: "19/06/1925",
            cover: "https://m.media-amazon.com/images/I/71b2Mr1ea8L._AC_UF894,1000_QL80_.jpg",
            status: true,
            category: "Acción",
            isFavorite: false
        },
        {
            ISBN: 2,
            title: "La chica de nieve",
            author: "Javier Castillo",
            published: "12/03/2020",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPw04QeTgyo1_4tS9ImjtNbmVWOsQdp0K-vw&s",
            status: true,
            category: "Tragedia",
            isFavorite: false
        },
        {
            ISBN: 3,
            title: "La asistencia",
            author: "Freida McFadden",
            published: "05/10/2023",
            cover: "https://pbs.twimg.com/media/GrvvctEXIAACuwt.jpg",
            status: false,
            category: "Comedia",
            isFavorite: false
        },
        {
            ISBN: 4,
            title: "El silencio",
            author: "Eva García Sáenz de Urturi",
            published: "25/01/2016",
            cover: "https://preview.redd.it/help-me-find-the-origin-of-this-goofy-ahh-meme-image-v0-54d1hl17t5te1.jpeg?width=640&crop=smart&auto=webp&s=7e9f6c78a615d7b4071a7d929102abe0692b6f52",
            status: true,
            category: "Misterio",
            isFavorite: true
        },
        {
            ISBN: 5,
            title: "Reina Roja",
            author: "Juan Gómez-Jurado",
            published: "08/11/2018",
            cover: "https://cdn-images.dzcdn.net/images/cover/3cd8046a8aabd47e1c795fa8319b40ea/0x1900-000000-80-0-0.jpg",
            status: true,
            category: "Thriller",
            isFavorite: false
        },
        {
            ISBN: 6,
            title: "La sombra del viento",
            author: "Carlos Ruiz Zafón",
            published: "06/04/2001",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXCmKW8PVTlmYiK-nVJGaiiY6MYpY0446ww&s",
            status: false,
            category: "Drama",
            isFavorite: false
        },
        {
            ISBN: 7,
            title: "El juego del alma",
            author: "Javier Castillo",
            published: "19/01/2023",
            cover: "https://m.media-amazon.com/images/I/31KSE9Nmq8L.jpg",
            status: true,
            category: "Suspense",
            isFavorite: false
        },
        {
            ISBN: 8,
            title: "Los ritos del agua",
            author: "Eva García Sáenz de Urturi",
            published: "07/03/2017",
            cover: "https://i.pinimg.com/236x/a9/93/8b/a9938b38b0d6da0d11bc50b7762790c5.jpg",
            status: false,
            category: "Misterio",
            isFavorite: false
        },
        {
            ISBN: 9,
            title: "Todo arde",
            author: "Juan Gómez-Jurado",
            published: "18/10/2022",
            cover: "https://i.pinimg.com/236x/23/b7/3b/23b73bedce4e910b48b2c9da776047f0.jpg",
            status: true,
            category: "Acción",
            isFavorite: true
        },
        {
            ISBN: 10,
            title: "El paciente",
            author: "Juan Gómez-Jurado",
            published: "15/11/2014",
            cover: "https://picfiles.alphacoders.com/656/thumb-1920-656628.jpg",
            status: false,
            category: "Thriller",
            isFavorite: false
        },
        {
            ISBN: 11,
            title: "La casa de los espíritus",
            author: "Isabel Allende",
            published: "01/01/1982",
            cover: "https://m.media-amazon.com/images/I/41nzOsnKBTL._UXNaN_FMjpg_QL85_.jpg",
            status: true,
            category: "Drama",
            isFavorite: false
        },
        {
            ISBN: 12,
            title: "El código Da Vinci",
            author: "Dan Brown",
            published: "18/03/2003",
            cover: "https://media.tenor.com/ZMHdDtLGERkAAAAe/goofy-ahh.png",
            status: true,
            category: "Misterio",
            isFavorite: true
        },
        {
            ISBN: 13,
            title: "Inferno",
            author: "Dan Brown",
            published: "14/05/2013",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAR6IZ6VuBJPhUKTUDTYxfZcuru3dQyuM7HQ&s",
            status: false,
            category: "Acción",
            isFavorite: false
        },
        {
            ISBN: 14,
            title: "El psicoanalista",
            author: "John Katzenbach",
            published: "01/01/2002",
            cover: "https://img.wattpad.com/cover/335386453-256-k370708.jpg",
            status: true,
            category: "Suspense",
            isFavorite: false
        },
        {
            ISBN: 15,
            title: "La historia interminable",
            author: "Michael Ende",
            published: "01/09/1979",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7md15odMH5hevnykxp4hvnVA4x8O2ftUpTw&s",
            status: false,
            category: "Fantasía",
            isFavorite: true
        },
        {
            ISBN: 16,
            title: "El nombre del viento",
            author: "Patrick Rothfuss",
            published: "27/03/2007",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuAEK8_eMM06DYCjM0vuoF_Y7MP5O4MePHA&s",
            status: true,
            category: "Fantasía",
            isFavorite: false
        }
    ];
    */

    const books: IBook[] = Array.from({ length: 16 }, (_, i) => ({
        ISBN: i + 1,
        title: `Libro ${i + 1}`,
        author: ["Pablo motos", "Iker Pajillas", "Kiko Matamoros", "Pistacho Salvamusulmanes"][i % 4],
        published: ["05/64/1375" ,"78/12/7984", "23/78/5412", "98/56/1256"][i % 4],
        cover: `https://picsum.photos/seed/${i + 1}/300/256`,
        status: [true, false][Math.floor(Math.random() * 2)],
        category: ["Acción", "Comedia", "Tragedia", "Suspense"][i % 4],
        isFavorite: [true, false][Math.floor(Math.random() * 2)]
    }))

    return (
        <>
            <Header />
            <Library books={books} />
        </>
    )
}
