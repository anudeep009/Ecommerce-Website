import confi from '../confi';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client;
    account;

    constructor() {

        // Initialize the Appwrite client and account
        this.client = new Client();
        this.client
            .setEndpoint(confi.appwriteurl)
            .setProject(confi.appwriteprojectid);
        this.account = new Account(this.client);
    }

    // Generate a valid user ID
    generateUserId() {
        // Manually generate a valid user ID
        return 'user_' + Math.random().toString(36).substring(2, 12); // 10 random alphanumeric characters prefixed with 'user_'
    }

    // Create a new account and log in the user
    async createAccount({ email, password, name }) {
        try {
            // Validate input
            if (!email || !password || !name) {
                throw new Error("All fields (email, password, name) are required.");
            }

            // Generate user ID
            const userId = this.generateUserId();
            console.log("Generated User ID:", userId);

            // Create user account
            const userAccount = await this.account.create(userId, email, password, name);
            console.log("User Account Created:", userAccount);

            // If account creation is successful, log in the user
            if (userAccount) {
                const session = await this.login({ email, password });
                console.log("User Logged In:", session);
                return session;
            }
            return userAccount;
        } catch (error) {
            // Provide a more detailed error message
            console.error("Error creating account:", error.message, error.response ? error.response : '');
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
            console.log("Logging in with email:", email);
            // Create an email session for the user
            const session = await this.account.createSession(email, password);
            console.log("Session Created:", session);
            return session;
        } catch (error) {
            // Provide a more detailed error message
            console.error("Error logging in:", error.message, error.response ? error.response : '');
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
            console.error("Appwrite service :: getCurrentUser :: error", error.message, error.response ? error.response : '');
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
            console.error("Appwrite service :: logout :: error", error.message, error.response ? error.response : '');
        }
    }
}

// Create an instance of AuthService and export it as the default export
const authService = new AuthService();
export default authService;
