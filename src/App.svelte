<script>
  import {setContext} from "svelte";
  import {DonationService} from "./services/donation-service";
  import Candidates from "./pages/Candidates.svelte";
  import Donations from "./pages/Donations.svelte";
  import Navigator from "./components/Navigator.svelte";

  setContext("DonationService", new DonationService("http://localhost:4000"));
</script>

<div class="uk-container">
  <Navigator/>
  <Candidates/>
  <Donations/>
</div>
