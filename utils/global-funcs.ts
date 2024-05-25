export const API_KEY = "cc2bd8e2c6ee4a9fab7d5e7dd953b8a1"

export const colors = ["bg-[#4B68A1]", "bg-[#479CFF]", "bg-[#FF6D6D]", "bg-[#1EBD71]", 
                      "bg-[#B957D2]", "bg-[#FFB72C]", "bg-[#AA2424]", "bg-[#4B47E2]"]

export const funcRandom = (arr: string[]) => {
    return Math.floor(Math.random() * arr.length)
}