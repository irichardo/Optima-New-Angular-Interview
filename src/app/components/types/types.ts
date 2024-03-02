export interface Formulario{
    first_name:string
    last_name:string
    city:string
    age:number
    birthday?:Date | null
    partnerBirthday?:Date | null
    actualBusiness?:string
    university?:string
    yearsOfExperience?:number | null
    lastSalary?:number | null
}