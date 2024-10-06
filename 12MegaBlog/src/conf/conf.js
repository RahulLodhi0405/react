const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteDatabase_ID: String(import.meta.env.VITE_DATABASE_URL),
    appwriteCollection_ID: String(import.meta.env.VITE_COLLECTION_URL),
    appwriteBucket_ID: String(import.meta.env.VITE_BUCKET_URL),

}

export default conf