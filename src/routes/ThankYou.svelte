<!-- src/routes/thank-you.svelte -->
<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    console.log('Thank you page loaded');
  });
</script>

<div class="container mx-auto px-4 py-8 text-center">
  <h1 class="text-3xl font-bold mb-4">Thank You!</h1>
  <p class="text-lg">Your listing will be reviewed by the activists at AllOfUs.</p>
</div>