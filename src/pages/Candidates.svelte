<script>
  import CandidateList from "../components/CandidateList.svelte";
  import homer4 from "/src/assets/homer4.jpeg";
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <img width="300" src="{homer4}" alt="homer">
  </div>
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <h3 class="uk-card-title uk-text-center">Make your donation</h3>
      <CandidateList/>
    </div>
  </div>
</div>
