import { faker } from "@faker-js/faker";

export default class User {

    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private access_token?: string;
    private userID?: string;

    constructor() {
        this.firstName =  faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.email = faker.internet.email();
        this.password = 'Test1234';
    }

    // ===== First Name =====
    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    // ===== Last Name =====
    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    // ===== Email =====
    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    // ===== Password =====
    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    // ===== Access Token =====
    getAccessToken(): string | undefined {
        return this.access_token;
    }

    setAccessToken(token: string): void {
        this.access_token = token;
    }

    // ===== User ID =====
    getUserID(): string | undefined {
        return this.userID;
    }

    setUserID(id: string): void {
        this.userID = id;
    }
}
