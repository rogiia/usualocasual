<script>
	import {
		onMount,
		onDestroy
	} from 'svelte';
	import Ticket from './Ticket.svelte';
	import Settings from './Settings.svelte';
  import {
    getStore
	} from '../store';
	import {
		FARE_TYPES
	} from '../store/actions';
	const store = getStore();
  let state = store.getState();
  const unsubscribe = store.subscribe(() => {
    state = store.getState();
  });

	let items = [];
	let settingsActive = false;

	$: filteredItems = settingsActive ? [] : items.filter((item) => {
		if (item.onlyJove) {
			return !!state.jove;
		} else if (state.fareType === FARE_TYPES.NORMAL && !item.price) {
			return false;
		} else if (state.fareType === FARE_TYPES.REDUCED && !item.reducedPrice && !item.price) {
			return false;
		} else if (state.fareType === FARE_TYPES.SPECIAL_REDUCED && !item.specialReducedPrice && !item.price) {
			return false;
		}
		return true;
	});

	onMount(async() => {
		const response = await fetch('data.json');
		const body = await response.json();
		if (body && body.length) {
			items = body;
		}
	});

	onDestroy(unsubscribe);
</script>

<header>
	<h1>USUAL O CASUAL?</h1>
	<button on:click={() => settingsActive = !settingsActive} aria-label="Paràmetres">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
	</button>
</header>
<main>
	<ul>
		{#each filteredItems as item, index}
		<li>
			<Ticket data={item} />
		</li>
		{/each}
	</ul>
</main>
<Settings active={settingsActive} />

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0;
	}

	header {
		background: #009f94;
		width: 100vw;
		height: 50px;
		text-align: center;
	}

	header h1 {
		display: inline;
		color: white;
		line-height: 50px;
		font-weight: 300;
		margin-left: 4px;
	}

	header button {
		background: none;
		border: none;
		height: 50px;
		float: right;
		margin-right: 8px;
	}

	header button svg {
		fill: white;
		padding-top: 5px;
	}

	ul {
		list-style: none;
		display: flex;
		padding: 0;
		scroll-snap-type: x mandatory;
		scroll-snap-stop: always;
		overflow-x: scroll;
		width: 100vw;
		padding-bottom: 0.5em;
	}

	ul > li {
		flex: 1;
		background: #F5FFFA;
		margin-right: 1em;
		min-width: 300px;
		scroll-snap-align: center;
		box-shadow: 1px 1px 3px #aaa;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>