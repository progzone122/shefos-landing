<script>
	import ImageComponent from './ImageComponent.svelte';
	import { useInView } from '$lib/useInView.ts';

	const companyImages = [
		'/companies/google_sup.png',
		'/companies/apple_sup.png',
		'/companies/thinkpad_sup.png',
		'/companies/haier_sup.png'
	];

	const companyNames = [
		'Google. Pixel Watch 3',
		'Apple. Macbook, iMac',
		'Lenovo. Линейка ноутбуков Thinkpad',
		'Haier. Линейка холодильников HB25'
	];

	// const companyClasses = [
	// 	'w-[100%] lg:w-[65em] h-[50vw] lg:h-[32em] shadow-lg dark:shadow-black',
	// 	'w-[100%] lg:w-[65em] h-[50vw] lg:h-[50em] shadow-lg dark:shadow-black',
	// 	'w-[100%] lg:w-[60em] h-[50vw] lg:h-[50em] shadow-lg dark:shadow-black',
	// 	'w-[100%] lg:w-[93em] h-[50vw] lg:h-[50em] shadow-lg dark:shadow-black'
	// ];
</script>

<div class="flex w-full flex-col items-center px-8">
	<h2 use:useInView class="animate-slide-in mb-2 text-center text-2xl font-bold">
		Компании, сделавшие свой выбор в пользу ShefOS
	</h2>
	<div class="mt-8 flex w-full flex-col items-center gap-4">
		{#each companyImages as image, i}
			<h3 use:useInView class="animate-slide-in mb-2 text-center text-2xl font-bold">
				{companyNames[i]}
			</h3>
			<ImageComponent src={image} alt={companyNames[i]} className="w-[100%] lg:w-[65em] h-[50vw] lg:h-[50em] shadow-lg dark:shadow-black" />
		{/each}
	</div>
</div>
