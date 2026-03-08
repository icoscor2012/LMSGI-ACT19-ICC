import './index.css'
import Header from './components/Header'
import Library from './pages/Library'
import type IBook from './types/Interfaces'

export default function App() {

  const books: IBook[] = [
        {
            ISBN: 1,
            title: "El Cuarto Mono",
            author: "J. D. Barker",
            published: "27/06/2017",
            cover: "https://m.media-amazon.com/images/I/61xfFSgNfBL._AC_UF1000,1000_QL80_.jpg",
            status: true,
            category: "Acción"
        },
        {
            ISBN: 2,
            title: "La chica de nieve",
            author: "Javier Castillo",
            published: "12/03/2020",
            cover: "https://m.media-amazon.com/images/I/91kKEdkx7oL._AC_UF1000,1000_QL80_.jpg",
            status: true,
            category: "Tragedia"
        },
        {
            ISBN: 3,
            title: "La asistencia",
            author: "Freida McFadden",
            published: "05/10/2023",
            cover: "https://imagessl3.casadellibro.com/a/l/s5/83/9788491294283.webp",
            status: false,
            category: "Comedia"
        }
    ]
  
  return (
    <>
      <Header />
      <Library books={books}/>
    </>
  )
}
