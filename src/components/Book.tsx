

interface IProps {
    title: string,
    author: string,
    published: string,
    cover: string,
    status: boolean,
    category: string
}

export default function Book(props: IProps) {
    const leido = <p className="bg-green-100 text-green-800 mt-4 font-medium px-2.5 py-0.5 rounded-lg size-fit">Leido</p>;
    const pendiente = <p className="bg-amber-100 text-amber-800 mt-4 font-medium px-2.5 py-0.5 rounded-lg size-fit">Pendiente</p>;

    return (
        <article className="w-75 shadow-2xl/30 place-items-center rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl/50 duration-300">
            <div className="h-64 overflow-hidden">
                <img
                    className="w-100 h-full object-cover"
                    src={props.cover}
                    alt={props.title}
                />
            </div>

            <div className="p-5 w-full leading-7">
                <h3 className="font-medium text-xl my-1">{props.title}</h3>
                <p>{props.author}</p>
                <p className="text-gray-500">Publicado: {props.published}</p>
                <p>{props.category}</p>
                {props.status ? leido : pendiente}
            </div>
        </article>
    )
}