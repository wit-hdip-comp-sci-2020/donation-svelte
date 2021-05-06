<script lang="ts">
  import {getContext, onMount} from "svelte";
  import Coordinates from "./Coordinates.svelte";

  const donationService = getContext("DonationService");

  export let justDonated;

  let candidateList = [];
  let amount = 0;
  let selectedMethod = 0;
  let selectedCandidate = 0;
  let methods = ["paypal", "direct"]
  let errorMessage = "";

  export let lat = 0.0;
  export let lng = 0.0;

  onMount(async () => {
    candidateList = await donationService.getCandidates()
  });

  async function donate() {
    const success = await donationService.donate(amount, methods[selectedMethod], candidateList[selectedCandidate])
    if (success) {
      if (justDonated) justDonated(amount, candidateList[selectedCandidate]);
    } else {
      errorMessage = "Donation not completed - some error occurred";
    }
  }
</script>

<form on:submit|preventDefault={donate} class="uk-form-stacked uk-text-left">
  <div class="uk-grid uk-grid-stack">
    <div class="uk-width-1-2@m">
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Enter amount</label>
        <div class="uk-form-controls">
          <input bind:value={amount} class="uk-input" id="form-stacked-text" type="number" name="amount"
                 placeholder="Euros">
        </div>
      </div>
      <div class="uk-margin">
        <div class="uk-form-label">Payment</div>
        <div class="uk-form-controls">
          <label><input bind:group={selectedMethod} value={0} class="uk-radio" type="radio" name="method"> {methods[0]}
          </label><br> <label><input bind:group={selectedMethod} value={1} class="uk-radio" type="radio"
                                     name="method"> {methods[1]} </label>
        </div>
      </div>
    </div>
    <div class=" uk-width-1-2@m">
      <div class="uk-margin uk-text-left">
        <div class="uk-form-label">Select Candidate</div>
        <div class="uk-form-controls ">
          {#each candidateList as candidate, i}
            <label> <input bind:group={selectedCandidate} value={i} class="uk-radio" type="radio" name="candidate"/>
              {candidate.lastName}, {candidate.firstName}
            </label> <br>
          {/each}
        </div>
      </div>
      <div class="uk-margin">
        <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Donate</button>
      </div>
      {#if errorMessage}
        <div class="uk-text-left uk-text-small">
          {errorMessage}
        </div>
      {/if}
    </div>
  </div>
  <Coordinates bind:lat={lat} bind:lng={lng}/>
</form>
