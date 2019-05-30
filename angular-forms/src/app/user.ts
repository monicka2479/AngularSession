// export class User {
//   constructor(
//     public userName: string,
//     public email: string,
//     public phone: string,
//     public topic: string,
//     public timePreference: string,
//     public promo: boolean
//   ) {}
// }


export class User{
  constructor(
  public userName: string,
  public taskDate: string,
  public fromTime: string,
  public toTime: string,
  public plannedTask: string,
  public remarks: string
  ){}
}
