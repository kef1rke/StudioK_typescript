<script lang="ts">
	import TitleComponent from '../components/TitleComponent.svelte';
	import DynamicContent from '../components/DynamicContent/DynamicContent.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import content from '../content/content.json';

	let ready: boolean = false;
	let sections: HTMLElement[] = [];
	let currentIndex = 0;

	// IntersectionObserver instance
	let observer: IntersectionObserver;

	function scrollToSection(index: number) {
		if (sections.length > 0 && sections[index]) {
			// Debugging: Log the section and index to verify
			console.log(`Scrolling to section index ${index}:`, sections[index]);

			// Smooth scroll to the section
			sections[index].scrollIntoView({ behavior: 'smooth' });

			// Update currentIndex after scrolling
			currentIndex = index;
		} else {
			console.error(`Section at index ${index} not found or sections array not ready.`);
		}
	}

	// Function to handle intersection observer changes
	function handleIntersect(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				currentIndex = sections.indexOf(entry.target as HTMLElement);

				console.log(
					`Currently viewing section ${currentIndex}`,
					content.dynamicContent[currentIndex]
				);
			}
		});
	}

	onMount(() => {
		// Initialize the IntersectionObserver
		observer = new IntersectionObserver(handleIntersect, {
			threshold: 0.5 // 50% of the section should be visible
		});

		// Attach the keydown event listener
		window.addEventListener('keydown', handleKeydown);

		ready = true;
	});

	// After the component updates, ensure all sections are observed
	afterUpdate(() => {
		// Observe each section
		sections.forEach((section) => {
			if (section) {
				observer.observe(section);
			}
		});
	});

	onDestroy(() => {
		// Cleanup the observer and event listeners on unmount
		observer.disconnect();
		window.removeEventListener('keydown', handleKeydown);
	});

	// Listen for keydown events to detect arrow key presses
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowDown' && currentIndex < sections.length - 1) {
			// Scroll to the next section if down arrow is pressed
			scrollToSection(currentIndex + 1);
		} else if (event.key === 'ArrowUp' && currentIndex > 0) {
			// Scroll to the previous section if up arrow is pressed
			scrollToSection(currentIndex - 1);
		}
	}
</script>

<TitleComponent />

{#each content.dynamicContent as section, index (section.title)}
	<!-- Wrap DynamicContent in a div and bind this div to the sections array -->
	<div bind:this={sections[index]} class="min-h-screen flex flex-col justify-center scroll-mt-0">
		<DynamicContent
			bg={section.bg}
			order={section.order}
			ImageUrl={section.ImageUrl}
			ImageAlt={section.ImageAlt}
			title={section.title}
			text={section.text}
		/>
	</div>
{/each}

<Footer
	email={content.footer.email}
	phone={content.footer.phone}
	address={content.footer.address}
/>
