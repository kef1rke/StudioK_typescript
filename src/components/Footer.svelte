<script lang="ts">
	export let email: string;
	export let phone: string;
	export let address: string;

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div class="bg-bg2 w-full h-fit grid place-items-center p-5">
	<div
		class="grid grid-cols-2 xl:gap-16 lg:gap-16 md:gap-10 sm:gap-10 gap-0 xl:w-[1200px] lg:w-[850px] md:w-[700px]"
	>
		<div class="md:text-xl sm:text-sm text-xs">
			<h2>
				<span style="font-weight:bold;">Email:</span>
				<a href="mailto:{email}">{email}</a>
			</h2>
			<h2><span style="font-weight:bold;">Telefon:</span> <a href="tel:{phone}">{phone}</a></h2>
			<h2><span style="font-weight:bold;">Cím:</span> {address}</h2>
		</div>
		<div class="grid justify-end content-center">
			<h2
				class="font-semibold text-2xl md:text-4xl cursor-pointer"
				on:click={scrollToTop}
				tabindex="0"
				on:keydown={(event) => (event.key === 'Enter' ? scrollToTop() : null)}
				aria-label="Scroll to top"
				role="button"
			>
				StudioK
			</h2>
		</div>
	</div>
</div>
