<script lang="ts">
  import { onDestroy } from 'svelte';
  
  let error: Error | null = null;
  let unsubscribe: () => void;
  
  function handleError(e: Error) {
    error = e;
  }
  
  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>

{#if error}
  <div class="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
    <h3 class="text-red-800 font-semibold mb-2">Something went wrong</h3>
    <p class="text-red-600">{error.message}</p>
  </div>
{:else}
  <slot />
{/if}