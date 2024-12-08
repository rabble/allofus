<script lang="ts">
  let email = '';
  let feedback = '';

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/mailing-list/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        feedback = 'Thanks for subscribing!';
        email = '';
      } else {
        feedback = 'There was an error. Please try again.';
      }
    } catch (error) {
      feedback = 'There was an error. Please try again.';
    }
  };
</script>

<form on:submit={handleSubmit} class="flex flex-col sm:flex-row gap-2">
  <label for="email" class="sr-only">Email address</label>
  <input
    type="email"
    id="email"
    bind:value={email}
    placeholder="your@email.com"
    required
    class="px-4 py-2 border border-gray-300 rounded-md text-black bg-white flex-grow"
  />
  <button 
    type="submit" 
    class="bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary transition-colors"
  >
    Subscribe
  </button>
  {#if feedback}
    <p class="text-sm mt-2 sm:mt-0 sm:ml-2" class:text-green-500={feedback.includes('Thanks')} class:text-red-500={!feedback.includes('Thanks')}>
      {feedback}
    </p>
  {/if}
</form> 