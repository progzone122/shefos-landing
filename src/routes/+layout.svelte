<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>
<div class="mb-[20em]">
	{@render children()}
</div>
