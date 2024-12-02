export class Post {
  constructor(id, title, description, image, organization, tags, skills, created_at) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image || null; // Default to null if no image
    this.organization = organization;
    this.tags = tags || [];
    this.skills = skills || new Set();
    this.created_at = created_at || new Date().toISOString(); // Default to now
  }

  validate() {
    if (!this.id || !this.title || !this.description || !this.organization) {
      throw new Error("Missing required fields: id, title, description, or organization.");
    }
    return true;
  }
}
