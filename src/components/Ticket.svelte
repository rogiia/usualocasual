<script>
  import {
    onDestroy
  } from 'svelte';
  import {
    getStore
  } from '../store';
  import {
    FARE_TYPES
  } from '../store/actions';
  export let data;
  const store = getStore();
  let state = store.getState();
  const unsubscribe = store.subscribe(() => {
    state = store.getState();
  });
  let uses = data.maxUses ? data.maxUses : data.maxDays;

  function getPrice() {
    if (state.atur) {
      if (data.bonifiedPrice && data.bonifiedPrice[state.zone]) {
        return data.bonifiedPrice[state.zone];
      } else if (data.price && data.price[state.zone]) {
        return data.price[state.zone];
      }
    } else if (state.fareType === FARE_TYPES.REDUCED) {
      if (data.reducedPrice && data.reducedPrice[state.zone]) {
        return data.reducedPrice[state.zone];
      } else if (data.price && data.price[state.zone]) {
        return data.price[state.zone];
      }
    } else if (state.fareType === FARE_TYPES.SPECIAL_REDUCED) {
      if (data.specialReducedPrice && data.specialReducedPrice[state.zone]) {
        return data.specialReducedPrice[state.zone];
      } else if (data.price && data.price[state.zone]) {
        return data.price[state.zone];
      }
    } else if (data.price && data.price[state.zone]) {
      return data.price[state.zone];
    }
    return null;
  }

  $: currentZone = state.zone.toString();
  $: pricePerUse = parseFloat(getPrice() / uses).toFixed(2);
  
  onDestroy(unsubscribe);
</script>

<div class="ticket-content">
  <section>
    <picture>
      <img src="{data.imageUrl}" alt="{data.name}" />
    </picture>
    <h3>{data.name}</h3>
    <h4>{getPrice()}€</h4>
    {#if data.description}<p>{data.description}</p>{/if}
    {#if data.maxDays}
      <div class="usesSelector">
        <input type="range"
          aria-label="Uses for this ticket"
          bind:value={uses}
          min="1"
          max="{data.maxUses ? data.maxUses : data.maxDays * 4}"
          step="1"
        />
        <label>{uses} usos{#if data.maxDays}&nbsp;durant {data.maxDays} dies{/if}</label>
      </div>
    {/if}
  </section>
  <section class="price">
    <strong>{pricePerUse}€</strong>
    <br />
    preu per viatge
  </section>
</div>

<style>
  div.ticket-content {
    display: flex;
    flex-direction: column;
    height: 520px;
  }

  picture > img {
		width: 100%;
	}

	section {
		padding: 1em;
		flex-grow: 1;
		flex-basis: 0;
	}

	section.price {
		width: 100%;
		flex-basis: 60px;
		max-height: 60px;
		background: #009f94;
		color: white;
		padding: 1em 0;
    padding-bottom: 0.25em;
	}
	section.price strong {
		font-size: 1.5em;
		font-weight: bold;
	}

</style>