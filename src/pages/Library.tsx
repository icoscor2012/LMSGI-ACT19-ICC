import Book from "../Book"

export default function Library() {

    return (
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Book ISBN={1} title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" cover="https://m.media-amazon.com/images/I/61xfFSgNfBL._AC_UF1000,1000_QL80_.jpg" status={true} />
            <Book ISBN={1} title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" cover="https://m.media-amazon.com/images/I/61xfFSgNfBL._AC_UF1000,1000_QL80_.jpg" status={true} />
            <Book ISBN={1} title="El Cuarto Mono" author="J. D. Barker" published="27/06/2017" cover="https://m.media-amazon.com/images/I/61xfFSgNfBL._AC_UF1000,1000_QL80_.jpg" status={false} />
        </div>
    )
}