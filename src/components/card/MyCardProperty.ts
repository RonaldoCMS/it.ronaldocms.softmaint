import { To } from "react-router-dom"

export default interface MyCardProperty {
    logo: string,
    title: string,
    descr: string,
    subDescr?: string
    path?: To
}