const confi = {
    appwriteurl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojectid : String(import.meta.env.VITE_APPWRITE_PROJECTID),
    appwritedatabaseid : String(import.meta.env.VITE_APPWRITE_DATABASEID),
    appwritecollectionid : String(import.meta.env.VITE_APPWRITE_COLLECTIONID)
}

export default confi

