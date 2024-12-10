<script lang="ts">
  import { isAuthenticated, user } from '$lib/stores/authStore';

  export let show = false;
</script>

{#if $isAuthenticated && $user?.isAdmin && show}
  <div class="bg-gray-100 p-4 rounded-lg mb-4">
    <h3 class="font-bold text-lg mb-2">Admin Controls</h3>
    <div class="space-y-2">
      <slot />
    </div>
  </div>
{/if}