<script lang="ts">
  import { Link } from "svelte-routing";
  interface Testimonial {
    name: string;
    message: string;
    date: string;
    imageUrl: string;
  }

  const testimonials: Testimonial[] = [
    /*
    { 
      name: "Alexandria Ocasio-Cortez", 
      message: "This platform is a powerful tool for grassroots organizing and progressive change.", 
      date: "2023-10-10", 
      imageUrl: "https://example.com/aoc.jpg" 
    },
    { 
      name: "Bernie Sanders", 
      message: "A future to believe in starts with platforms like this, empowering the people.", 
      date: "2023-09-25", 
      imageUrl: "https://example.com/bernie-sanders.jpg" 
    },
    { 
      name: "Elizabeth Warren", 
      message: "Fighting for the middle class means using every tool at our disposal, including this platform.", 
      date: "2023-08-30", 
      imageUrl: "https://example.com/elizabeth-warren.jpg" 
    },
    { 
      name: "Ilhan Omar", 
      message: "Together, we can build a more just and equitable society with the help of this platform.", 
      date: "2023-07-20", 
      imageUrl: "https://example.com/ilhan-omar.jpg" 
    },
    { 
      name: "Rashida Tlaib", 
      message: "This platform is a testament to the power of the people and the strength of our movement.", 
      date: "2023-07-05", 
      imageUrl: "https://example.com/rashida-tlaib.jpg" 
    },*/
    // Add more testimonials as needed
  ];
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-primary mb-6">Testimonials</h1>
  <p class="text-lg mb-4">
    Hear from leaders and supporters of progressive change.
  </p>
  <div class="space-y-6">
    {#each testimonials as { name, message, date, imageUrl }}
      <div class="p-4 bg-white shadow-md rounded-lg flex items-center space-x-4" tabindex="0" aria-label="Testimonial">
        <img src={imageUrl} alt={`Photo of ${name}`} class="w-16 h-16 rounded-full" />
        <div>
          <p class="text-xl font-semibold">{name}</p>
          <p class="text-gray-600">{message}</p>
          <p class="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    {/each}
  </div>
</div> 