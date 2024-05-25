export interface News {
    title: string
    urlToImage: string
    publishedAt: Date
    description: string
    id: number
    tag: string
}

export interface CommentType {
    id?: number
    email: string
    body: string
  }