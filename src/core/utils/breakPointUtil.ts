export function getCurrentBreakpoint(component: any): string {
	if (component.$vuetify.breakpoint.xsOnly) {
		return 'xs';
	} else if (component.$vuetify.breakpoint.smOnly) {
		return 'sm';
	} else if (component.$vuetify.breakpoint.mdOnly) {
		return 'md';
	} else if (component.$vuetify.breakpoint.lgOnly) {
		return 'lg';
	} else {
		return 'xl';
	}
}
