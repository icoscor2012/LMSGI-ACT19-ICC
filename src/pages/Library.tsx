import Book from "../components/Book"
import type IBook from "../types/Interfaces"
import { useState, useEffect } from "react"

interface IProps {
    books: IBook[]
}

export default function Library({ books }: IProps) {

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1)
    const booksPerPage = 4
    const indexOfLastItem = currentPage * booksPerPage
    const indexOfFirstItem = indexOfLastItem - booksPerPage
    const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(books.length / booksPerPage)

    function nextPage() {
        setCurrentPage(currentPage + 1)
    }

    function previousPage() {
        setCurrentPage(currentPage - 1)
    }

    return (
        <>
            <div className="flex flex-col">

                <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {currentBooks.map((b) =>
                        <Book key={b.ISBN} book={b} />
                    )}
                </div>

                <div className="flex justify-center">
                    <div className="mt-10 w-60 mb-20 text-xl grid grid-cols-3 justify-items-center items-center">
                        <div className="w-[144]">
                            {
                                (currentPage === 1) ? '' :
                                    <button onClick={previousPage} className="bg-gray-300 rounded-xl px-4 py-2 hover:bg-gray-400 cursor-pointer">
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
                                    <button onClick={nextPage} className="bg-gray-300 rounded-xl px-4 py-2 hover:bg-gray-400 cursor-pointer">
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