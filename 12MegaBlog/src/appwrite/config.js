import conf from "../conf.js";
import { client, Account, ID, Database, Storage, Query } from "appwrite";

export class service {
    client = new Client();
    Databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectId);
        this.Databases = new Storage(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            async updatePost(slug, { title, content, featuredImage, status })
              try {
                return await this.Databases.updateDocument(
                   conf.appwriteDatabaseId,
                   conf.appwriteCollectionId,
                   slug, 
                   {
                    title,
                    content,
                    featuredImage,
                    status,
                   }
                )
                
              } catch (error) {
                
              
            }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)

        }
    }
}