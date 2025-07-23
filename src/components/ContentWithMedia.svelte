<script>
	export let reverse = false;
	export let wrapperClass = '';
	export let mediaClass = '';
</script>

<div class={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} ${wrapperClass}`}>
	<div class={`w-full md:w-1/2 ${mediaClass}`}>
		<slot name="media" />
	</div>
	<div class="w-full md:w-1/2 px-0 md:px-12 py-4 flex flex-col justify-center">
		<slot name="content" />
	</div>
</div>