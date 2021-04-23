<script>
  import {setContext} from "svelte";
  import {DonationService} from "./services/donation-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Candidates from "./pages/Candidates.svelte";
  import Donations from "./pages/Donations.svelte";
  import Donate from "./pages/Donate.svelte";
  import Settings from "./pages/Settings.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("DonationService", new DonationService("http://localhost:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/signup" : Signup,
    "/candidates": Candidates,
    "/donations": Donations,
    "/donate": Donate,
    "/settings" : Settings,
    "/logout" : Main
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>
