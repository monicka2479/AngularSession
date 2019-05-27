export class User {
  constructor(
    public userName: string,
    public email: string,
    public phone: string,
    public topic: string,
    public timePreference: string,
    public promo: boolean
  ) {}
}
