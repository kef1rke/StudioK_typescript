<script lang="ts">
	import { onMount } from 'svelte';
	let arrowVisible = false;

	onMount(() => {
		setTimeout(() => {
			arrowVisible = true;
		}, 800);

		const handleScroll = () => {
			if (window.scrollY > 10) {
				arrowVisible = false;
			} else {
				arrowVisible = true;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToContent() {
		window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			scrollToContent();
		}
	}
</script>

<div class="relative m-0 bg-hero-header bg-cover bg-center grid place-items-center h-screen w-full">
	<div class="text-center">
		<h1 class="text-white font-semibold text-5xl md:text-[120px] lg:text-[144px] xl:text-[200px]">
			StudioK
		</h1>
	</div>

	<button
		class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center gap-2 px-4 py-2 bg-transparent border-none cursor-pointer opacity-0 transition-opacity duration-500 ease-in-out"
		aria-label="Görgess a részletes adatokért"
		title="Görgess a részletes adatokért"
		tabindex="0"
		on:click={scrollToContent}
		on:keydown={handleKeyDown}
		class:opacity-100={arrowVisible}
	>
		<div class="w-6 h-6">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="white"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="w-full h-full animate-bounce"
			>
				<path
					fill-rule="evenodd"
					d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	</button>
</div>

<style>
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}
</style>
