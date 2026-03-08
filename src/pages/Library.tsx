import Book from "../components/Book"
import type IBook from "../types/Interfaces"

interface IProps {
    books: IBook[]
}

export default function Library(props: IProps) {

    return (
        <section className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {props.books.map((b) => 
                <Book key={b.ISBN} title={b.title} author={b.author} published={b.published} cover={b.cover} status={b.status} category={b.category} />
            )}
        </section>
    )
}