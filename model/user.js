// ToDo : Explore Mongoose for type check
class User {
	constructor(id, token, email, name, provider) {
		this.id = id;
		this.token = token;
		this.email = email;
		this.name = name;
		this.providers = [
			{
				provider,
				id,

			},
		];
	}
}
module.exports = User; 
