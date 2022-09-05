import { Time } from "@angular/common";

export interface Plan {
    ID_PLAN: number,
    ID_MEDICO: number,
    DIA: string,
    MODALIDAD: string,
    DIRECCION: string,
    HORA_INICIO: Time,
    HORA_FIN: Time,
    PRECIO: number,
    DESCUENTO: number,
}
