<script lang="ts">
  import { isAuthenticated } from '../../stores/authStore';
</script>

<footer class="bg-gray-800 text-white p-4">
  <div class="container mx-auto text-center space-y-4">
    <div class="flex justify-center space-x-6">
      <a 
        href="/mailing-list"
        class="hover:underline"
        aria-label="Sign up for our mailing list"
      >
        Join Our Mailing List
      </a>

      {#if $isAuthenticated}
        <Link 
          to="/admin/dashboard"
          class="hover:underline"
          aria-label="Go to dashboard"
        >
          Dashboard
        </Link>
      {:else}
        <Link 
          to="/login"
          class="hover:underline"
          aria-label="Login to your account"
        >
          Login
        </Link>
        <Link 
          to="/register"
          class="hover:underline"
          aria-label="Create an account"
        >
          Register
        </Link>
      {/if}
    </div>
    
    <p class="text-sm text-gray-400">
      © {new Date().getFullYear()} All of US Directory
    </p>
  </div>
</footer>
