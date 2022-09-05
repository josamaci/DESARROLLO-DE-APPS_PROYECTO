import { Time } from "@angular/common";

export interface Cita {
    ID_CITA: number,
    ID_MEDICO: number,
    ID_PACIENTE: number,
    MODALIDAD: string,
    DIRECCION: string,
    FECHA: Date,
    HORA_INICIO: Time,
    HORA_FIN: Time,
    ESTADO: string,
    PRECIO: number,
    DESCUENTO: number,
    PAGO_REGISTRADO: string,
}
