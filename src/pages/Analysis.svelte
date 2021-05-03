<script>
  import homer from "/src/assets/homer.png";
  import {mainBar, navBar, subTitle, title} from "../stores"
  import Chart from 'svelte-frappe-charts';
  import {getContext, onMount} from "svelte";

  const donationService = getContext("DonationService");

  title.set("Donation Services Inc.");
  subTitle.set("Analysis");
  navBar.set({
    bar: mainBar
  });

  let data = {
    labels: ["paypal", "direct"],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  };

  onMount(async () => {
    let donationList = await donationService.getDonations();
    donationList.forEach(donation => {
      if (donation.method == "paypal") {
        data.datasets[0].values[0] += donation.amount
      } else if (donation.method == "direct") {
        data.datasets[0].values[1] += donation.amount
      }
    })
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
      <Chart data={data} type="bar"/>
    </div>
  </div>
</div>
