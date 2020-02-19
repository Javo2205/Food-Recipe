import { HorarioComida } from './objetos/horarioComida';
import { TiempoComida } from './objetos/tiempoComida';

export class Receta {

    receta_id: number;
	nombre: string;
	imagen: string;
	video: string;
	ingredientes: string;
	fecha_creacion: string;
	fecha_modificacion: string;
	horarioComida: HorarioComida;
	tiempoComida: TiempoComida;
	proteina: string;
	tiempoPreparacion: string;
	tipoCoccion: string;
	porciones: string;
	tipoCocina: string;
	usuario: string;    

}