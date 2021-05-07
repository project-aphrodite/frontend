import Creator from '../models/creator';
import User from '../models/user';

export function toUser(data: { user?: any; creator: any }): User {
	if (data.user) {
		const creator = new Creator(data);
		const user = new User(data.user);
		user.creator = creator;

		return user;
	} else if (data.creator) {
		const creator = new Creator(data.creator);
		const user = new User(data);
		user.creator = creator;

		return user;
	} else {
		const user = new User(data);
		return user;
	}
}
