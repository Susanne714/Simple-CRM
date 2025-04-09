export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    address: string;
    postCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : 0;
        this.address = obj ? obj.street : '';
        this.postCode = obj ? obj.postCode : 0;
        this.city = obj ? obj.city : '';
    }

    toPlainObject() {
        return {
            fistName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            address: this.address,
            postCode: this.postCode,
            city: this.city
        };
    }
}