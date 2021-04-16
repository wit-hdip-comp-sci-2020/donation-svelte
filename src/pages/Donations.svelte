<script>
  import DonationList from "../components/DonationList.svelte";
  import homer5 from "/src/assets/homer5.jpg";
  import {navBar, mainBar, subTitle, title} from "../stores"

  title.set("Donation Services Inc.");
  subTitle.set("Latest Donations");
  navBar.set({
    bar: mainBar
  });
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <DonationList/>
    </div>
  </div>
  <div class="uk-width-1-2@m">
    <img width="300" src="{homer5}" alt="homer">
  </div>
</div>
