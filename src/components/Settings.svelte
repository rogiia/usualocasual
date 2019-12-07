<script>
  import {
    slide
  } from 'svelte/transition';
  import {
    onDestroy
  } from 'svelte';
  import {
    getStore
  } from '../store';
  import {
    setZone,
    setJove,
    setReducedFare,
    setAtur,
    FARE_TYPES
  } from '../store/actions';

  const store = getStore();
  let state = store.getState();
  const unsubscribe = store.subscribe(() => {
    state = store.getState();
  });

  export let active = false;
  const zoneList = ['1', '2', '3', '4', '5', '6'];
  $: selectedZone = state.zone;
  $: jove = state.jove;
  $: isFMFNGeneral = state.fareType === FARE_TYPES.REDUCED;
  $: isFMFNSpecial = state.fareType === FARE_TYPES.SPECIAL_REDUCED;
  $: atur = state.atur;

  function updateSelectedZone(zoneNum) {
    return () => {
      store.dispatch(setZone(zoneNum));
    };
  }

  function updateJove(jove) {
    return () => {
      store.dispatch(setJove(jove));
    };
  }

  function updateFMFNGeneral() {
    if (state.fareType === FARE_TYPES.REDUCED) {
      store.dispatch(setReducedFare(FARE_TYPES.NORMAL));
    } else {
      store.dispatch(setReducedFare(FARE_TYPES.REDUCED));
    }
  }

  function updateFMFNSpecial() {
    if (state.fareType === FARE_TYPES.SPECIAL_REDUCED) {
      store.dispatch(setReducedFare(FARE_TYPES.NORMAL));
    } else {
      store.dispatch(setReducedFare(FARE_TYPES.SPECIAL_REDUCED));
    }
  }

  function updateAtur(isAtur) {
    return () => {
      store.dispatch(setAtur(isAtur));
    };
  }

  onDestroy(unsubscribe);

</script>

{#if active}
<div id="settingsContainer"
  transition:slide="{{}}">
  <label>Zones:</label>
  <div id="zones">
    {#each zoneList as zoneNum}
      <button aria-label="Zona {zoneNum}"
        active={selectedZone === zoneNum}
        on:click={updateSelectedZone(zoneNum)}>{zoneNum}</button>
    {/each}
  </div>
  <div id="jove">
    <input type="checkbox"
      aria-label="Ets jove? (25 anys o menys)"
      on:change={updateJove(!jove)}
      bind:checked={jove} /> <span>Jove (25 anys o menys)</span>
  </div>
  <div id="fmfn">
    <input type="checkbox"
      aria-label="Família nombrosa o monoparental general"
      on:change={updateFMFNGeneral}
      bind:checked={isFMFNGeneral}
    /> <span>Família nombrosa o monoparental general</span>
    <br />
    <input type="checkbox"
      aria-label="Família nombrosa o monoparental especial"
      on:change={updateFMFNSpecial}
      bind:checked={isFMFNSpecial}
    /> <span>Família nombrosa o monoparental especial</span>
  </div>
  <div id="atur">
    <input type="checkbox"
      aria-label="Aturat"
      on:change={updateAtur(!atur)}
      bind:checked={atur}
    /> <span>Atur</span>
  </div>
</div>
{/if}

<style>
  #settingsContainer {
    position: fixed;
    top: 50px;
    left: 0;
    height: 100vh;
    width: calc(100% - 4em);
    background: #009f94;
    color: white;
    padding: 4em 2em;
    font-size: 18px;
  }
  
  label {
    font-weight: bold;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    margin-left: 0.75em;
    vertical-align: top;
  }

  #zones {
    display: flex;
  }
  #zones button {
    flex-grow: 1;
    max-width: 60px;
  }
  #zones button[active=true] {
    background: lightskyblue;
    color: white;
  }

  #settingsContainer > div {
    margin-bottom: 2em;
  }
</style>