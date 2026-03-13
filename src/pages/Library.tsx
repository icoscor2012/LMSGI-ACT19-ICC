import Book from "../components/Book"
import type IBook from "../types/Interfaces"

interface IProps {
    books: IBook[]
}

export default function Library({ books }: IProps) {

    return (
        <>
            <div className="flex flex-col">

                <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {books.map((b) =>
                        <Book key={b.ISBN} book={b} />
                    )}
                </div>

                <div className="mt-10 mb-20 flex flex-row text-xl justify-center">
                    <button className="bg-gray-300 rounded-xl px-4 py-3 hover:bg-gray-400">Anterior</button>
                    <p className="px-4 py-3">paginas</p>
                    <button className="bg-gray-300 rounded-xl px-4 py-3 hover:bg-gray-400">Siguiente</button>
                </div>
            </div>
        </>
    )
}