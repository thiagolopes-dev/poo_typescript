export class Util {

    public static randomizar(inicio: number, fim:number){
        return Number((inicio + Math.random() * (fim - inicio)).toFixed(2));
    }
}