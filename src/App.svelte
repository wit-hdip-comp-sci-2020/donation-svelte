<script>
  import CandidateList from "./CandidateList.svelte"

  const candidateList = [{
    "firstName": "Lisa",
    "lastName": "Simpson",
    "office": "President"
  }, {
    "firstName": "Donald",
    "lastName": "Simpson",
    "office": "President"
  }];
</script>

<div class="uk-container">
  <h1> Donation Client Application </h1>
  <CandidateList candidateList="{candidateList}"/>
</div>
