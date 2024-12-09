<script lang="ts">
  import NavLink from './NavLink.svelte';
  import LoginButton from '../LoginButton.svelte';
  import { focusAreaContents } from '../../data/focusAreaContent';
  import { onMount } from 'svelte';

  let isAboutDropdownOpen = false;
  let isOrgsDropdownOpen = false;
  let isTopicsDropdownOpen = false;

  const toggleAboutDropdown = () => {
    isAboutDropdownOpen = !isAboutDropdownOpen;
    if (isAboutDropdownOpen) {
      isOrgsDropdownOpen = false;
      isTopicsDropdownOpen = false;
    }
  };

  const toggleOrgsDropdown = () => {
    isOrgsDropdownOpen = !isOrgsDropdownOpen;
    if (isOrgsDropdownOpen) {
      isAboutDropdownOpen = false;
      isTopicsDropdownOpen = false;
    }
  };

  const toggleTopicsDropdown = () => {
    isTopicsDropdownOpen = !isTopicsDropdownOpen;
    if (isTopicsDropdownOpen) {
      isAboutDropdownOpen = false;
      isOrgsDropdownOpen = false;
    }
  };

  const closeDropdowns = () => {
    isAboutDropdownOpen = false;
    isOrgsDropdownOpen = false;
    isTopicsDropdownOpen = false;
  };
</script>

<div class="flex space-x-6 items-center">
  <div class="relative inline-block">
    <button 
      class="inline-flex items-center justify-center rounded-md shadow-sm px-4 py-2 text-white font-bold hover:bg-gray-700 focus:outline-none"
      on:click={toggleOrgsDropdown}
      aria-haspopup="true"
      aria-expanded={isOrgsDropdownOpen}
    >
      Organizations
    </button>
    {#if isOrgsDropdownOpen}
      <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <NavLink to="/organizations" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdowns}>Search</NavLink>
          <NavLink to="/join-directory" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdowns}>Add to the Directory</NavLink>
          <NavLink to="/add-organization" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdowns}>Manage Your Listing</NavLink>
        </div>
      </div>
    {/if}
  </div>

  <div class="relative inline-block">
    <button 
      class="inline-flex items-center justify-center rounded-md shadow-sm px-4 py-2 text-white font-bold hover:bg-gray-700 focus:outline-none"
      on:click={toggleTopicsDropdown}
      aria-haspopup="true"
      aria-expanded={isTopicsDropdownOpen}
    >
      Topics
    </button>
    {#if isTopicsDropdownOpen}
      <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <NavLink to="/topics" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdowns}>
            All Topics
          </NavLink>
          {#each focusAreaContents as area (area.id)}
            <NavLink 
              to={`/focus-areas/${area.id}`} 
              className="block px-4 py-2 text-white font-bold hover:bg-gray-700" 
              role="menuitem" 
              on:click={closeDropdowns}
            >
              {area.title}
            </NavLink>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <NavLink to="/feed" className="text-white font-bold">Socials</NavLink>
  
  <div class="relative inline-block">
    <button 
      class="inline-flex items-center justify-center rounded-md shadow-sm px-4 py-2 text-white font-bold hover:bg-gray-700 focus:outline-none"
      on:click={toggleAboutDropdown}
      aria-haspopup="true"
      aria-expanded={isAboutDropdownOpen}
    >
      About
    </button>
    {#if isAboutDropdownOpen}
      <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <NavLink to="/about" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdowns}>About</NavLink>
          <NavLink to="/conveners" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdowns}>Conveners</NavLink>
          <NavLink to="/testimonials" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdowns}>Testimonials</NavLink>
          <NavLink to="/contact" className="block px-4 py-2 text-white font-bold hover:bg-gray-700" role="menuitem" on:click={closeDropdowns}>Contact</NavLink>
        </div>
      </div>
    {/if}
  </div>
</div>