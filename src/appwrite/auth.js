import confi from '../confi';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client;
    account;

    constructor() {
        console.log("Appwrite URL:", confi.appwriteurl);
        console.log("Appwrite Project ID:", confi.appwriteprojectid); 

        // Initialize the Appwrite client and account
        this.client = new Client();
        this.client
            .setEndpoint(confi.appwriteurl)
            .setProject(confi.appwriteprojectid);
        this.account = new Account(this.client);
    }

    // Create a new account and log in the user
    async createAccount({ email, password, name }) {
        try {
            // Validate input
            if (!email || !password || !name) {
                throw new Error("All fields (email, password, name) are required.");
            }
            // Create user account
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            // If account creation is successful, log in the user
            if (userAccount) {
                return this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            // Provide a more detailed error message
            console.error("Error creating account:", error);
            throw error;
        }
    }

    // Log in the user
    async login({ email, password }) {
        try {
            // Validate input
            if (!email || !password) {
                throw new Error("Both email and password are required.");
            }
            // Create an email session for the user
            return await this.account.createSession(email, password);
        } catch (error) {
            // Provide a more detailed error message
            console.error("Error logging in:", error);
            throw error;
        }
    }

    // Get the current logged-in user
    async getCurrentUser() {
        try {
            // Retrieve the current user account
            return await this.account.get();
        } catch (error) {
            // Provide a more detailed error message
            console.error("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    // Log out the current user
    async logout() {
        try {
            // Delete all sessions for the user
            await this.account.deleteSessions();
        } catch (error) {
            // Provide a more detailed error message
            console.error("Appwrite service :: logout :: error", error);
        }
    }
}

// Create an instance of AuthService and export it as the default export
const authService = new AuthService();
export default authService;
