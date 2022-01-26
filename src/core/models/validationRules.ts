export default {
	required: (value: any): any => !!value || 'Field required',
	length: (value: any): any => (!!value && value.length <= 20) || 'Max 20 characters',
	email: (value: any): any => {
		const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return pattern.test(value) || 'E-mail invalid';
	}
};
