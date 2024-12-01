<script lang="ts">
  export let className = "";
</script>

<svg 
  class="h-12 {className}"
  viewBox="0 0 500 500" 
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" stroke-width="20"/>
  <path 
    d="M250 50 
       C 150 150, 150 350, 250 450
       C 350 350, 350 150, 250 50"
    fill="currentColor"
  />
  <circle cx="250" cy="200" r="40" fill="#4CAF50"/>
  <path 
    d="M220 180 L280 180 L250 150 Z" 
    fill="#81C784"
  />
</svg>