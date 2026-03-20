import { useState } from "react"
import IconButton from "./IconButton"
import type IBook from "../types/Interfaces"

interface IProps {
    book: IBook
}

export default function Book({ book }: IProps) {

    const [status, setStatus] = useState(book.status)
    const [statusFav, setStatusFav] = useState(book.isFavorite || false)
    
    // Estado del libro (leído | pendiente)
    function toggleStatus() {
        setStatus(!status)
        book.status = !book.status
    }
    
    // Estado isFavorite
    function toggleFavorite() {
        setStatusFav(!statusFav)
        book.isFavorite = !book.isFavorite
    }

    return (
        <article className="bg-white w-75 shadow-2xl/30 place-items-center rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl/50 duration-300 group">
            <div className="h-64 overflow-hidden">
                <img
                    className="w-100 h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={book.cover}
                    alt={book.title}
                />
            </div>

            <div className="p-4 leading-7 w-full">
                <h3 className="font-medium text-xl my-1">{book.title}</h3>
                <p>{book.author}</p>
                <p className="text-gray-500">Publicado: {book.published}</p>
                <p className="bg-gray-200 rounded-xl w-fit px-3 py-1 my-2 text-gray-600">{book.category}</p>
                <div className="flex flex-row justify-between mt-auto">
                    <button onClick={toggleStatus}
                        className={`${status ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"} font-medium px-2.5 py-0.5 rounded-lg size-fit cursor-pointer`}>
                        {status ? "Leído" : "Pendiente"}
                    </button>
                    <IconButton status={statusFav} callback={toggleFavorite} />
                </div>
            </div>
        </article>
    )
}