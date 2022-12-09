import api from "@/api/axios";
import {IFormData} from "@/types/form.interface";


export const DocumentService =  {
    create : async (formData:IFormData)=>{
        return api.post('/api/v1/documents/create',formData)
    },
    getAll : async ()=>{
        return api.get('/api/v1/documents',)
    },
    viewById : async (id:string)=>{
        return api.get(`/api/v1/document/${id}`,)
    },
}