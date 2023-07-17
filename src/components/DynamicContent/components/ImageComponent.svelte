<script lang="ts">
	export let url: string, alt: string;
</script>

<div class="flex items-center h-fit md:h-full md:mt-auto mt-8">
	{#if url == ''}
		<iframe
			class="rounded-3xl"
			src="https://www.youtube.com/embed/xF1ok_WJt98"
			width="100%"
			height="100%"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	{:else}
		<img class="rounded-3xl" src={url} {alt} />
	{/if}
</div>
