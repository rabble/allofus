<script lang="ts">
  import NavLink from './NavLink.svelte';
  import LoginButton from '../LoginButton.svelte';
  import { onMount } from 'svelte';

  let isDropdownOpen = false;

  const toggleDropdown = () => {
    isDropdownOpen = !isDropdownOpen;
  };

  const closeDropdown = () => {
    isDropdownOpen = false;
  };
</script>

<div class="flex space-x-6 items-center">
  <NavLink to="/organizations" className="text-white font-bold">Organizations</NavLink>
  <NavLink to="/topics" className="text-white font-bold">Topics</NavLink>
  <NavLink to="/get-involved" className="text-white font-bold">Get Involved</NavLink>
  <NavLink to="/feed" className="text-white font-bold">Socials</NavLink>
  <div class="relative inline-block">
    <button 
      class="inline-flex items-center justify-center rounded-md shadow-sm px-4 py-2 text-white font-bold hover:bg-gray-700 focus:outline-none"
      on:click={toggleDropdown}
      aria-haspopup="true"
      aria-expanded={isDropdownOpen}
    >
      About
    </button>
    {#if isDropdownOpen}
      <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <NavLink to="/about" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdown}>About</NavLink>
          <NavLink to="/conveners" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdown}>Conveners</NavLink>
          <NavLink to="/testimonials" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdown}>Testimonials</NavLink>
          <NavLink to="/contact" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdown}>Contact</NavLink>
        </div>
      </div>
    {/if}
  </div>
</div>