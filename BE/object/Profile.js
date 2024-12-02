export class Profile {
    constructor(
        username = null,
        password = null,
        firstName = '',
        lastName = '',
        location = '',
        skills = [],
        likes = [],
        type = 'volunteer'
    ) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.skills = skills;
        this.likes = likes;
        this.type = type;
    }
    print() {
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Location: ${this.location}`);

        let skillString = '';
        if (this.skills.length === 0) {
            console.log("No skills");
        }
        else if (this.skills.length > 0) {
            this.skills.forEach(skill => {
                skillString += skill;
                skillString += ' ';
            });
            console.log(`Skills: ${skillString}`);
        }

        let likesString = '';
        if (this.likes.length === 0) {
            console.log("No likes");
        }
        else if (this.likes.length > 0) {
            this.likes.forEach(like => {
                likesString += like;
                likesString += ' ';
            });
            console.log(`Liked posts: ${likesString}`);
        }
    }

    // Setter functions
    setUsername(username) {
        this.username = username;
    }
    setPassword(password) {
        this.password = password;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setLocation(location) {
        this.location = location;
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
    addLike(like) {
        this.likes.push(like);
    }

    // Getter functions
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getType() {
        return this.type;
    }
}


