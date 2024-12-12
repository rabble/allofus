<script lang="ts">
  import { onMount } from 'svelte';
  import './app.css';

  onMount(() => {
    document.title = "All of US Directory";
  });
</script>

<slot />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
