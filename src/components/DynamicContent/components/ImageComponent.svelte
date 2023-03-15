<script lang="ts">
	export let url: string, alt: string;
</script>

<div class="flex items-center h-fit md:h-full md:mt-auto mt-8">
	<img class="rounded-3xl" src={url} {alt} />
</div>
