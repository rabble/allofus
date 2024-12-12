<script lang="ts">
  import { onMount } from 'svelte';
  
  let name = '';
  let email = '';
  let message = '';
  let feedback = '';

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        feedback = 'Your message has been sent successfully!';
        name = email = message = ''; // Clear form fields
      } else {
        feedback = 'There was an error sending your message. Please try again later.';
      }
    } catch (error) {
      feedback = 'There was an error sending your message. Please try again later.';
    }
  };
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-primary mb-6">Contact Us</h1>
  <p class="mb-4 text-lg">
    You can also reach us via email at 
    <a href="mailto:contact@allofus.directory" class="text-blue-500 hover:underline">
      contact@allofus.directory
    </a>.
  </p>
  <form on:submit={handleSubmit} class="space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <input type="text" id="name" bind:value={name} required class="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" id="email" bind:value={email} required class="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
      <textarea id="message" bind:value={message} required class="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
  </form>
  {#if feedback}
    <p class="mt-4 text-sm text-green-500">{feedback}</p>
  {/if}

  <div class="mb-8">
    <br>
    <img 
      src="/assets/solidarity.jpg"
      alt="People working together in mutual aid"
      class="w-full h-auto rounded-lg shadow-lg"
      loading="lazy"
    />
  </div>
</div> 


