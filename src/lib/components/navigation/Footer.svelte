<script lang="ts">
  import { Link } from 'svelte-routing';
  import { userNpub } from '../../stores/authStore';
  import LoginButton from '../LoginButton.svelte';
</script>

<footer class="bg-gray-800 text-white p-4">
  <div class="container mx-auto text-center">
    <Link 
      to="/mailing-list"
      class="hover:underline"
      aria-label="Sign up for our mailing list"
    >
      Join Our Mailing List
    </Link>
  </div>
</footer>