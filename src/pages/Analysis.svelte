<script>
  import {mainBar, navBar, subTitle, title} from "../stores"
  import Chart from 'svelte-frappe-charts';
  import {getContext, onMount} from "svelte";

  const donationService = getContext("DonationService");

  title.set("Donation Services Inc.");
  subTitle.set("Analysis");
  navBar.set({
    bar: mainBar
  });

  let paymentData = {
    labels: ["paypal", "direct"],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  };

  let donationsData = {
    labels: [],
    datasets: [
      {
        values: []
      }
    ]
  }
  onMount(async () => {
    let donationList = await donationService.getDonations();
    donationList.forEach(donation => {
      if (donation.method == "paypal") {
        paymentData.datasets[0].values[0] += donation.amount
      } else if (donation.method == "direct") {
        paymentData.datasets[0].values[1] += donation.amount
      }
    })

    let candidates = await donationService.getCandidates()
    donationsData.labels = [];
    candidates.forEach(candidate => {
      donationsData.labels.push(`${candidate.lastName}, ${candidate.firstName}`)
    })
    candidates.forEach((candidate, i) => {
      donationList.forEach(donation => {
        if (donation.candidate._id == candidate._id) {
          donationsData.datasets[0].values[i] = donation.amount
        }
      });
    });
  });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <Chart data={paymentData} type="pie"/>
    </div>
  </div>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <Chart data={donationsData} type="bar"/>
    </div>
  </div>
</div>
