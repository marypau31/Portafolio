import { SubCapitulo } from "./subcapitulo";

export interface Capitulo {
    numero: number;
    titulo: string;
    texto?: string[];
    imagen?: string;
    subcapitulo?: SubCapitulo[];
}