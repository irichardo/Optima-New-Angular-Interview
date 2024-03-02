export interface User{
    id:number,
    first_name:string,
    last_name:string,
    age:number,
    city:string
}

export interface Formulario{
    first_name:string
    last_name:string
    city:string
    age:number
    birthday?:Date | null
    partnerBirthday?:Date | null
    actualBusiness?:string
    college?:string
    yearsOfExperience?:number | null
    lastSalary?:number | null
}