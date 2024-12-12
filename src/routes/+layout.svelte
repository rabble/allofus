<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/navigation/Footer.svelte";
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  
  <main class="container mx-auto px-4 py-8 flex-grow">
    <slot />
  </main>

  <Footer />
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style> 