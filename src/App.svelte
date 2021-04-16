<script>
  import {onMount} from 'svelte'
  import CandidateList from "./CandidateList.svelte"

  const url = `http://localhost:4000/api/candidates`;
  let candidateList;
  onMount(async () => {
    const response = await fetch(url)
    candidateList = await response.json();
  })
</script>

<div class="uk-container">
  <h1> Donation Client Application </h1>
  <CandidateList candidateList="{candidateList}"/>
</div>
