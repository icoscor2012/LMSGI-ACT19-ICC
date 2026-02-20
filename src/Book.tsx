

interface IProps {
    ISBN: number
    title: string
    author: string
    published: string
    cover: string
    status: boolean
}

export default function Book(props: IProps) {
    return (
        <article className="bg-amber-300 w-xs shadow-2xl">
            <img className="w-fit" src={props.cover} alt={props.title} />
            <div className="p-4">
                <h3 className="font-bold">{props.title}</h3>
                <p>{props.author}</p>
                <p>Publicaco: {props.published}</p>
                <p>{props.status ? "Leído" : "Pendiente"}</p>
            </div>
        </article>
    )
}