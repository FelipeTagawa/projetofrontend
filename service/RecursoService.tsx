import axios from "axios";
import { BaseService } from "./BaseService";

/* export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})
 */
export class RecursoService extends BaseService{
    constructor(){
        super("/recurso");
    }
}