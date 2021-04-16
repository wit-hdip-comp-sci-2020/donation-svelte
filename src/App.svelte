<script>
  import {setContext} from "svelte";
  import CandidateList from "./components/CandidateList.svelte"
  import {DonationService} from "./services/donation-service";
  import DonationList from "./components/DonationList.svelte";

  setContext("DonationService", new DonationService("http://localhost:4000"));
</script>

<div class="uk-container">
  <h1> Donation Client Application </h1>
  <CandidateList/>
  <DonationList/>
</div>
