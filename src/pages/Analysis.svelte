<script>
  import {mainBar, navBar, subTitle, title} from "../stores"
  import Chart from 'svelte-frappe-charts';
  import {getContext, onMount} from "svelte";
  import DonateForm from "../components/DonateForm.svelte";

  const donationService = getContext("DonationService");

  title.set("Donation Services Inc.");
  subTitle.set("Analysis");
  navBar.set({
    bar: mainBar
  });

  let candidates = [];
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

  let donorData = {
    labels: [],
    datasets: [
      {
        values: []
      }
    ]
  }
  async function refreshCharts() {
    let donationList = await donationService.getDonations();

    let sumPaypal = donationList.filter(donation => donation.method == "paypal").reduce((a, b) => ({amount: a.amount + b.amount}));
    paymentData.datasets[0].values[0] = sumPaypal.amount;
    let sumDirect = donationList.filter(donation => donation.method == "direct").reduce((a, b) => ({amount: a.amount + b.amount}));
    paymentData.datasets[0].values[1] = sumDirect.amount;

    candidates.forEach((candidate, i) => {
      let total = donationList.filter(donation => donation.candidate._id == candidate._id).reduce((a, b) => ({amount: a.amount + b.amount}));
      donationsData.datasets[0].values[i] = total.amount;
    });

    let donors = new Map();
    donationList.forEach(donation => {donors.set(donation.donor._id, donation.donor)})
    let i = 0;
    donorData.labels = [];
    for (const [id, donor] of donors.entries()) {
      donorData.labels.push(`${donor.lastName}, ${donor.firstName}`);
      let sumDonated = donationList.filter(donation => donation.donor._id == id).reduce((a, b) => ({amount: a.amount + b.amount}));
      donorData.datasets[0].values[i] = sumDonated.amount;
      i++;
    }
  }

  function justDonated() {
    refreshCharts();
  }

  onMount(async () => {
    candidates = await donationService.getCandidates();
    donationsData.labels = [];
    candidates.forEach(candidate => {
      donationsData.labels.push(`${candidate.lastName}, ${candidate.firstName}`)
    })
    await refreshCharts();
  });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
      <h3> Payment Methods </h3>
      <Chart data={paymentData} type="pie"/>
    </div>
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
      <h3> Donations by Candidate </h3>
      <Chart data={donationsData} type="bar"/>
    </div>
  </div>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
      <h3> Donations by Donor </h3>
      <Chart data={donorData} type="donut"/>
    </div>
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
      <h3> Make a Donation </h3>
      <DonateForm {justDonated}/>
    </div>
  </div>
</div>
