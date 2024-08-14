
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
      zipCode: string,
      public editingFirstName?: boolean,
      public editingSecondName?: boolean,
      public editingEmail?: boolean,
      public editingAddress?: boolean,
      public editingRegion?: boolean,
      public editingCity?: boolean,
      public editingZipCode?: boolean
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
    [key: string]: any;
  }
  
  