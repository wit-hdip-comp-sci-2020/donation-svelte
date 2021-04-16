<script lang="ts">
  import {getContext, onMount} from 'svelte'

  const donationService = getContext("DonationService");
  let donationList = [];

  onMount(async () => {
    donationList = await donationService.getDonations();
  });
</script>

<h3 class="uk-heading-divider">
  Donation List </h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
      <th>
        Amount
      </th>
      <th>
        Method donated
      </th>
    </thead>
    <tbody class="uk-text-left">
      {#each donationList as donation}
        <tr>
          <td>
            {donation.amount}
          </td>
          <td>
            {donation.method}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
