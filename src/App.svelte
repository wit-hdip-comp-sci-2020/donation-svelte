<script>
  import {onMount} from 'svelte'
  import CandidateList from "./CandidateList.svelte"
  import { DonationService } from "./donation-service";

  const donationService = new DonationService("http://localhost:4000");

  let candidateList;
  onMount(async () => {
    candidateList = await donationService.getCandidates()
  })
</script>

<div class="uk-container">
  <h1> Donation Client Application </h1>
  <CandidateList candidateList="{candidateList}"/>
</div>
