export interface ISelectedItem {
    label:string,
    value:any
}

export interface IForm {
    field_seq: number,
    field_type:number,
    field_name:string,
    is_mandatory:boolean,
    select_values: string | ISelectedItem[],
    id?:number
}
export interface IFormData {
    document_name:string,
    form_values:IForm[]
}

export interface IDocInfoDTO {
    document_name:string,
    fields:IForm[]
}
