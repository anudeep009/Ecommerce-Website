import confi from '../confi';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client;
    account;

    constructor() {
        console.log("Appwrite URL:", confi.appwriteurl);
        console.log("Appwrite Project ID:", confi.appwriteprojectid); 

        this.client = new Client();
        this.client
            .setEndpoint(confi.appwriteurl)
            .setProject(confi.appwriteprojectid);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;
