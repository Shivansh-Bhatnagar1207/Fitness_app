import { Account, Client, ID } from "react-native-appwrite";


export const config = {
    endpoint: process.env.APPWRITE_ENDPOINT,
    plafrom: 'com.Shivansh.Fitness',
    projectId: process.env.PROJECT_ID,
    databaseID: process.env.APPWREITE_DATABASE_ID,
    userCollectionID: process.env.APPWRITE_USER_COLLECTION_ID,
    storageId: process.env.APPWRITE_BUCKET_ID
}

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.plafrom)

;
