<script>
  export let candidateList;
</script>

<h3 class="uk-heading-divider">
  Candidate List </h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
      <th>
        Last Name
      </th>
      <th>
        First Name
      </th>
      <th>
        Office
      </th>
    </thead>
    <tbody class="uk-text-left">
      {#if candidateList}
        {#each candidateList as candidate}
          <tr>
            <td>{candidate.lastName}</td>
            <td>{candidate.firstName}</td>
            <td>{candidate.office}</td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
