<script>
  import {setContext} from "svelte";
  import {DonationService} from "./services/donation-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Candidates from "./pages/Candidates.svelte";
  import Donations from "./pages/Donations.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("DonationService", new DonationService("http://localhost:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/candidates": Candidates,
    "/donations": Donations,
    "/logout" : Main
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>
