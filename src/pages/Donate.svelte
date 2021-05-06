<script>
  import 'leaflet/dist/leaflet.css';
  import {mainBar, navBar, subTitle, title} from "../stores"
  import DonateForm from "../components/DonateForm.svelte";
  import {LeafletMap} from '../services/leaflet-map';
  import {onMount} from "svelte";

  let lat = 52.160858;
  let lng = -7.152420;

  let map;
  onMount(async () => {
    const mapConfig = {
      location: {lat: lat, lng: lng},
      zoom: 8,
      minZoom: 7,
    };
    map = new LeafletMap("donation-map", mapConfig, 'Terrain');
    map.showZoomControl();
  });

  title.set("Donation Services Inc.");
  subTitle.set("Make a Donation!");
  navBar.set({
    bar: mainBar
  });

  function justDonated(amount, candidate) {
    const donationStr = `${candidate.firstName} ${candidate.lastName} €${amount.toString()}`;
    map.addMarker({lat: lat, lng: lng}, donationStr);
    map.moveTo(12, {lat: lat, lng: lng})
  }
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <div id="donation-map" class="ui embed" style="height:600px"></div>
    </div>
  </div>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <DonateForm {justDonated} bind:lat={lat} bind:lng={lng}/>
    </div>
  </div>
</div>
