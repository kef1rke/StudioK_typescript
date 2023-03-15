<script lang="ts">
	import ImageComponent from './components/ImageComponent.svelte';
	import TextComponent from './components/TextComponent.svelte';

	export let bg: string;
	export let title: string;
	export let text: string;
	export let ImageUrl: string, ImageAlt: string;
	export let order: string;

	const bgColor = (backgroundType: string) => {
		switch (backgroundType) {
			case 'bg1':
				return '#4A3724';
			case 'bg2':
				return '#61472F';
			case 'bg3':
				return '#8B7450';
			default:
				return '#4A3724';
		}
	};

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div style="background-color: {bgColor(bg)}" class="w-full h-fit grid place-items-center p-11">
	{#if innerWidth <= 768}
		<div class="grid-flow-row auto-rows-max sm:gap-0 gap-10 max-w-fit h-min] ">
			<TextComponent {title} {text} />
			<ImageComponent url={ImageUrl} alt={ImageAlt} />
		</div>
	{:else}
		<div
			class="grid grid-cols-2 xl:gap-16 lg:gap-16 md:gap-10 sm:gap-10 gap-5 max-w-fit xl:w-[1200px] lg:w-[850px] md:w-[700px] "
		>
			{#if order == 'right'}
				<TextComponent {title} {text} />
				<ImageComponent url={ImageUrl} alt={ImageAlt} />
			{:else}
				<ImageComponent url={ImageUrl} alt={ImageAlt} />
				<TextComponent {title} {text} />
			{/if}
		</div>
	{/if}
</div>
