import { Rom } from "./rom";

export interface Console {
    id?: number, 
    name: String,
    logo: string,
    slug: string,
    roms?: Rom[]
}