const bcrypt = require('bcrypt');
const Profile = require('../models/profile');
const { readProfilesFromFile, writeProfilesToFile, usernameExists } = require('../utils/fileUtils');


async function registerProfile(username, password, firstName, lastName, location, skills = [], likes = [], type = 'volunteer') {
    if (usernameExists(username)) {
        return "Username already exists!";
    }

    // Hashing the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);  

    const newProfile = new Profile(username, hashedPassword, firstName, lastName, location, skills, likes, type);
    const profiles = readProfilesFromFile();
    profiles.push(newProfile);
    writeProfilesToFile(profiles);

    return `Profile for ${username} (${type}) has been created successfully!`;
}


async function login(username, password) {
    const profiles = readProfilesFromFile();
    const userProfile = profiles.find(profile => profile.username === username);

    if (!userProfile) {
        return "Username not found!";
    }

    // Compare the hashed password with the provided password
    const isPasswordCorrect = await bcrypt.compare(password, userProfile.password);

    if (isPasswordCorrect) {
        return `Login successful for ${username} (${userProfile.type})`;
    } else {
        return "Incorrect password!";
    }
}

module.exports = {
    registerProfile,
    login
};
