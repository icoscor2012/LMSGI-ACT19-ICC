import Book from "../components/Book"
import type IBook from "../types/Interfaces"
import React, { useState, useEffect } from "react"

interface IProps {
    books: IBook[]
}

export default function Library({ books }: IProps) {

    // Filtrado por estado
    const [filteredBooks, setFilteredBooks] = useState(books)
    const [stateFilter, setStateFilter] = useState('')

    const handleStatusFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setStateFilter(value)

        if (stateFilter === 'leidos') setFilteredBooks(books.filter((b) => b.status))
        else if (stateFilter === 'pendientes') setFilteredBooks(books.filter((b) => !b.status))
        else setFilteredBooks(books)

        setCurrentPage(1)
    }

    // Filtrar por texto
    const [textFilter, setTextFilter] = useState('')

    const handleTextFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setTextFilter(value)

        filteredBooks.filter((b) => {
            b.title.toLowerCase().includes(value)
            console.log(b.title.toLowerCase().includes(value))
        })
        
        setCurrentPage(1)
    }

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1)
    const booksPerPage = 4
    const indexOfLastItem = currentPage * booksPerPage
    const indexOfFirstItem = indexOfLastItem - booksPerPage
    const currentBooks = filteredBooks.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage)

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const previousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    // Efecto de carga
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => setIsLoading(false), 400)

        return () => clearTimeout(timer)
    }, [currentPage, stateFilter, textFilter])

    return (
        <>
            <div className="flex flex-col">
                <form className="my-5">
                    <h3 className="text-3xl py-2">Filtrar por estado</h3>
                    <label>
                        <input type="radio" name="filtrarEstado" value="todos" defaultChecked={true} className="mx-2" onChange={handleStatusFilter} />
                        Mostrar todos
                    </label>
                    <label>
                        <input type="radio" name="filtrarEstado" value="leidos" className="mx-2" onChange={handleStatusFilter} />
                        Mostrar leídos
                    </label>
                    <label>
                        <input type="radio" name="filtrarEstado" value="pendientes" className="mx-2" onChange={handleStatusFilter} />
                        Mostrar pendientes
                    </label>
                    <h3 className="text-3xl py-2">Filtrar por texto</h3>
                    <label>
                        <input name="filtradoTexto" type="text" className="bg-white text-xl px-3 h-15 border-2 rounded-xl w-full" placeholder="Nombre del libro" onChange={handleTextFilter}/>
                    </label>
                </form>

                {(isLoading) ? (
                    <div id="loader" className="flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="mb-10 grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {currentBooks.map((b) =>
                            <Book key={b.ISBN} book={b} />
                        )}
                    </div>
                )}

                <div className="flex justify-center">
                    <div className="mt-10 w-60 mb-20 text-xl grid grid-cols-3 justify-items-center items-center">
                        <div className="w-[144]">
                            {
                                (currentPage === 1) ? '' :
                                    <button onClick={previousPage} className="bg-gray-400 rounded-xl px-4 py-2 hover:bg-gray-500 cursor-pointer">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                            }
                        </div>
                        <div className="w-fit">
                            <p className="size-full items-center">{`${currentPage} de ${totalPages}`}</p>
                        </div>
                        <div className="w-fit">
                            {
                                (currentPage === totalPages) ? '' :
                                    <button onClick={nextPage} className="bg-gray-400 rounded-xl px-4 py-2 hover:bg-gray-500 cursor-pointer">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}