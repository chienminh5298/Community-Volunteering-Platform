// Helper functions to read and write profiles from/to JSON file
import fs from "fs/promises";

const profilesFilePath = "./profile.json";

export const readProfilesFromFile = async () => {
    try {
        // Check if the file exists
        await fs.access(profilesFilePath);
        // Read and parse the file
        const data = await fs.readFile(profilesFilePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        // If the file doesn't exist, return a default structure
        if (error.code === "ENOENT") {
            return { account: {} };
        }
        throw error; // Rethrow unexpected errors
    }
};

export const writeProfilesToFile = async ({ username, firstname, lastname, password }) => {
    try {
        // Read the JSON file
        const data = await readProfilesFromFile();
        // Add the new account
        data.account[username] = {
            firstname,
            lastname,
            password,
        };
        // Write the updated JSON back to the file
        await fs.writeFile(profilesFilePath, JSON.stringify(data, null, 4)); // Pretty-print with 4 spaces
        console.log(`Account for "${username}" added successfully.`);
    } catch (error) {
        console.error("Error writing profiles to file:", error.message);
    }
};

export const writePostToFile = async ({ title, donation, member, description }) => {
    try {
        // Read the JSON file
        const data = await readProfilesFromFile();
        // Add the new account
        const id = getRandomNumber();
        data.post[id] = {
            title,
            donateTarget: donation,
            memberTarget: member,
            member: 0,
            donateValue: 0,
            description,
            id,
            joiner: [],
            liker: [],
            comment: [],
        };
        // Write the updated JSON back to the file
        await fs.writeFile(profilesFilePath, JSON.stringify(data, null, 4)); // Pretty-print with 4 spaces
        return data.post[id];
    } catch (error) {
        console.error("Error writing profiles to file:", error.message);
    }
};

function addProfile(profile) {
    const profiles = readProfilesFromFile();
    profiles.push(profile);
    writeProfilesToFile(profiles);
}

function usernameExists(username) {
    const profiles = readProfilesFromFile();
    return profiles.some((profile) => profile.username === username);
}

export const getRandomNumber = () => {
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
};
