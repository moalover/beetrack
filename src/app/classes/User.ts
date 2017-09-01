/*
 *	Esta clase representa a un usuario
 */
export class User {
	id: number;
	name: string;
	description: string;
	photo: string;
	
	constructor (data: any) {
		this.id = data.id;
		this.name = data.name;
		this.description = data.description;
		this.photo = data.photo;
	}
}