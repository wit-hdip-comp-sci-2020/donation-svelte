<script>
  import Title from "./Title.svelte";
</script>

<div class="uk-flex uk-flex-center uk-flex-middle uk-text-center uk-grid-small" uk-grid>
  <Title title="Donations" subTitle="Select Donations or Candidates" />
  <div>
    <ul class="uk-iconnav uk-margin-left uk-margin-right">
      <a href="/#/donations" class="uk-card uk-card-small uk-card-hover uk-padding-small">
        <i class="fas fa-hand-holding-usd fa-3x" style="color:rgb(153, 196, 74)" title="Donations" pos="bottom" uk-tooltip></i>
      </a>
      <a href="/#/candidates" class="uk-card uk-card-small uk-card-hover uk-padding-small">
        <i class="fas fa-clipboard-list fa-3x" style="color:rgb(63, 122, 139)" title="Candidates" pos="bottom" uk-tooltip></i>
      </a>
    </ul>
  </div>
</div>

