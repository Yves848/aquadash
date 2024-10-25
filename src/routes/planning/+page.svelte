<script lang="ts">
  export let data;
  const {plannings} = data;
</script>

<h1>Planning</h1>
{#each plannings as item}
  <p>{item.joursemaine}</p>
  <p>{item.heure}</p>
  
{/each}