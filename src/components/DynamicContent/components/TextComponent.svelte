<script lang="ts">
	export let title: String, text: string;
</script>

<div class="h-fit">
	<h2 class="xl:text-5xl lg:text-3xl mb-3 md:text-2xl sm:text-2xl text-2xl font-semibold">
		{title}
	</h2>
	<p class="xl:text-xl lg:text-sm md:text-xs sm:text-sm text-xs text-justify">
		{text}
	</p>
</div>
