import { uploadPhoto , createUser } from './utils';

export default function handleProfileSignup() {
	let firstName;
	let lastname;
	let body;

	const p = uploadphoto();
	const u = createUser();

	return promise.all([p, u]).then((data) => {
		body = data[0].body;
		firstname = data[1].firstName;
		lastName = data[1].lastName;
		console.log('${body} ${firstName}`);
	}0.catch(() => {
		console.log('Signup system offline');
	});
}
