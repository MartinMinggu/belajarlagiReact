import { createContext } from "react"
const CinemaContext = createContext({})
const CinemaProvider = () => {
    return (
        <CinemaContext.Provider>

        </CinemaContext.Provider>
    )
}
export { CinemaContext, CinemaProvider };