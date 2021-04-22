export const heightDirective = {
	inserted: (el: any, binding: any): void => {
		el.style.height = binding.value + 'px';
	}
};

export const minheightDirective = {
	inserted: (el: any, binding: any): void => {
		el.style.minHeight = binding.value + 'px';
	}
};

export const widthDirective = {
	inserted: (el: any, binding: any): void => {
		el.style.width = binding.value + 'px';
	}
};

export const maxWidthDirective = {
	inserted: (el: any, binding: any): void => {
		el.style.maxWidth = binding.value + 'px';
	}
};

export const minWidthDirective = {
	inserted: (el: any, binding: any): void => {
		el.style.minWidth = binding.value + 'px';
	}
};
