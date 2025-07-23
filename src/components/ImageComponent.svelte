<script>
	export let src = '';
	export let alt = '';
	export let className = '';

	let isZoomed = false;

	function toggleZoom() {
		isZoomed = !isZoomed;
	}
</script>

<style>
    .image-container {
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 1rem;
        cursor: pointer;
        user-select: none;

        /* По умолчанию размер под изображение */
        display: inline-block;
        background-size: cover;
        /* Чтобы было место по высоте, задаём min-height */
        min-height: 150px;
        min-width: 150px;
    }

    .zoom-button {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        background: rgba(31, 41, 55, 0.75);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 0.375rem;
        font-weight: 600;
        backdrop-filter: blur(4px);
        transition: background-color 0.2s ease;
        user-select: none;
    }

    .zoom-button:hover {
        background: rgba(31, 41, 55, 0.95);
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .zoomed-image {
        max-width: 90vw;
        max-height: 90vh;
        border-radius: 1rem;
        box-shadow: 0 0 20px black;
    }
</style>

<div
	class={`image-container ${className}`}
	style="background-image: url({src});"
	aria-label={alt}
	role="img"
>
	<button class="zoom-button" on:click|stopPropagation={toggleZoom}>
		{isZoomed ? 'Закрыть' : 'Увеличить'}
	</button>
</div>

{#if isZoomed}
	<div class="overlay" on:click={toggleZoom}>
		<img src={src} alt={alt} class="zoomed-image" />
	</div>
{/if}
