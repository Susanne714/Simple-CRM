export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    address: string;
    postCode: number;
    city: string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : 0;
        this.address = obj ? obj.address : '';
        this.postCode = obj ? obj.postCode : 0;
        this.city = obj ? obj.city : '';
    }

    toPlainObject() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            address: this.address,
            postCode: this.postCode,
            city: this.city
        };
    }
}