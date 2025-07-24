export function useInView(node: HTMLElement, { threshold = 0.1 } = {}) {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('in-view');
				observer.unobserve(node);
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}