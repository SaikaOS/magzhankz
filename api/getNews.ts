const API_KEY = "cc2bd8e2c6ee4a9fab7d5e7dd953b8a1"

export const getNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    const data = await res.json()
    return data.articles
  }

export const getComments = async(id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  const data = await res.json()
  return data
}