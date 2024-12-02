export class Dashboard {
    constructor(posts = []) {
        this.posts = posts; // holds an array of post objects
    }

    // Takes in an array of skills, either via profile skills or searched skills
    sort(skills){
        if(skills.length > 0 && this.posts.length > 0) {
            // look through every post
            let highestCount = 0;
            let skillsMap = new Map();
            for (const post of this.posts) {
                // for every post, iterate through list of skills and see how many matches
                let count = 0;
                for (const skill of skills) {
                    if (post.skills.has(skill)) {
                        count++;
                    }
                }

                if (!skillsMap.has(count)) {
                    skillsMap.set(count, [post]);
                }
                else {
                    skillsMap.get(count).push(post);
                }

                // Keep track of highest count (closest match)
                if (count > highestCount) {
                    highestCount = count;
                }
            }

            let sorted = [];
            // Prepare final sort starting from the best matches downward
            for (let i = highestCount; i >= 0; i--) {
                if (skillsMap.has(i)) {
                    for (const post of skillsMap.get(i)) {
                        sorted.push(post);
                    }
                }
            }

            this.posts = sorted;
        }
    }

    print() {
        for(const post of this.posts) {
            console.log(post.id);
        }
    }
}