<script>
  import homer from "/src/assets/homer.png";
  import {navBar, mainBar, subTitle, title} from "../stores"
  import DonateForm from "../components/DonateForm.svelte";

  title.set("Donation Services Inc.");
  subTitle.set("Make a Donation!");
  navBar.set({
    bar: mainBar
  });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <img width="300" src="{homer}" alt="homer">
    </div>
  </div>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <DonateForm/>
    </div>
  </div>
</div>
