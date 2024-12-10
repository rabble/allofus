<script lang="ts">
  import { navigate } from "svelte-routing";
  import { isAuthenticated, user } from '$lib/stores/authStore';

  let username = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let error = '';
  let loading = false;

  const handleSubmit = async () => {
    loading = true;
    error = '';

    if (password !== confirmPassword) {
      error = 'Passwords do not match';
      loading = false;
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        isAuthenticated.set(true);
        const userData = await response.json();
        user.set(userData);
        navigate('/admin/dashboard');
      } else {
        const data = await response.json();
        error = data.error || 'Registration failed';
      }
    } catch (e) {
      error = 'An error occurred during registration';
    } finally {
      loading = false;
    }
  };
</script>

<div class="flex items-center justify-center py-6 px-4">
  <div class="w-full max-w-sm">
    <h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">
      Create account
    </h2>
    <form class="space-y-4" on:submit|preventDefault={handleSubmit}>
      {#if error}
        <div class="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm" role="alert">
          <span>{error}</span>
        </div>
      {/if}
      
      <div class="space-y-2">
        <input
          id="username"
          name="username"
          type="text"
          required
          bind:value={username}
          class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Username"
        />
        <input
          id="email"
          name="email"
          type="email"
          required
          bind:value={email}
          class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Email"
        />
        <input
          id="password"
          name="password"
          type="password"
          required
          bind:value={password}
          class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Password"
        />
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          required
          bind:value={confirmPassword}
          class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Confirm Password"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {#if loading}
          <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        {:else}
          Register
        {/if}
      </button>
    </form>
  </div>
</div> 