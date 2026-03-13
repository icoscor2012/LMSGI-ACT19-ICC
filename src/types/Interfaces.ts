export default interface IBook {
    ISBN: number,
    title: string,
    author: string,
    published: string,
    cover: string,
    status: boolean,
    category?: string,
    isFavorite?: boolean
}