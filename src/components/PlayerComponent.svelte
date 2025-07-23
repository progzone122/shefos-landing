<script>
	import MuteIcon from '../icons/MuteIcon.svelte';

	let videoRef;
	let isMuted = true;

	export let src = '';
	export let poster = '';
	export let className = '';

	function toggleMute() {
		if (videoRef) {
			videoRef.muted = !videoRef.muted;
			isMuted = videoRef.muted;
		}
	}

	// При монтировании убеждаемся, что видео в muted
	import { onMount } from 'svelte';
	onMount(() => {
		if (videoRef) {
			videoRef.muted = true;
			isMuted = true;
		}
	});
</script>

<div class="relative inline-block w-full h-full">
	<video
		bind:this={videoRef}
		src={src}
		poster={poster}
		autoplay
		loop
		muted
		playsinline
		on:click={toggleMute}
		class={`cursor-pointer ${className}`}
	/>

	{#if isMuted}
		<div
			class="absolute bottom-4 right-4 bg-black/50 rounded-full p-2 cursor-pointer"
			on:click|stopPropagation={toggleMute}
			aria-label="Включить звук"
			title="Включить звук"
		>
			<MuteIcon size={32} fill="#fff" />
		</div>
	{/if}
</div>