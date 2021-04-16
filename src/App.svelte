<script>
  import { setContext } from "svelte";
  import CandidateList from "./CandidateList.svelte"
  import {DonationService} from "./donation-service";

  setContext("DonationService", new DonationService("http://localhost:4000"));
</script>

<div class="uk-container">
  <h1> Donation Client Application </h1>
  <CandidateList/>
</div>
