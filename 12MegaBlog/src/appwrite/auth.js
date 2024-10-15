import conf from "../conf.js";
import { client, Account, ID } from "appwrite";

export class AuthService {
    client = new client();
    Account;

    

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setproject(conf.appwriteProjectId);
        this.Account = new Account(this.client);

        
    }
    async createAccount({email , password , name}){
        try {
            await this.Account.create(ID.unique () , email ,password , name)
            if (userAccount) {
                return this.login ({ email , pasword});
            }else {
                return userAccount;
            }
        } catch (error) {
            throw error;
            
        }
    }

    async login ({ email , password})
    {
        try {
          return  await this.Account.createEmailSession(email , password) ;
        }
    }

    async getCurrentUser(){
        try {
            await this.Account.deleteSessions();
            return await this.Account.get ();
            
        } catch (error) {
            console.log ("Appwrite service :: getCurrentUser :: error" , error);
            
        }

        return null ;

    }

    async logout (){
        try {
            
        } catch (error) {
            console.log("Appwrite service :: logout :: error" , error);
            
        }

    }
}

const AuthService = new AuthService();

export default AuthService;