<script>
	import Portal from "svelte-portal";

	export let src = '';
	export let alt = '';
	export let className = '';

	let isZoomed = false;

	function toggleZoom() {
		isZoomed = !isZoomed;
	}
</script>

<!-- Маленькое изображение-превью -->
<div class={`inline-block ${className}`}>
	<img
		src={src}
		alt={alt}
		class="rounded-xl cursor-pointer object-cover w-full h-full"
		on:click={toggleZoom}
	/>
</div>

<!-- Увеличенное изображение поверх всего, фиксировано к экрану -->
{#if isZoomed}
	<Portal>
		<div
			class="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center"
			on:click={toggleZoom}
		>
			<img
				src={src}
				alt={alt}
				class="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
			/>
		</div>
	</Portal>
{/if}