
export class User {
    id: number;
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    address: string;
    region: string;
    city: string;
    zipCode: string;
  
    constructor(
      id: number,
      firstName: string,
      secondName: string,
      email: string,
      password: string,
      address: string,
      region: string,
      city: string,
      zipCode: string
    ) {
      this.id = id;
      this.firstName = firstName;
      this.secondName = secondName;
      this.email = email;
      this.password = password;
      this.address = address;
      this.region = region;
      this.city = city;
      this.zipCode = zipCode;
    }
  }
  