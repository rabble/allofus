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
      name: "Sarah Chen", 
      message: "All of Us helped me connect with local climate action groups. I've joined beach cleanups and am now helping organize our community's first sustainability festival!", 
      date: "2024-02-15", 
      imageUrl: "/images/testimonials/sarah-c.jpg" 
    },
    { 
      name: "Marcus Rodriguez", 
      message: "Through All of Us, I found others passionate about housing justice. We're now working together on tenant rights workshops and advocacy campaigns.", 
      date: "2024-01-20", 
      imageUrl: "/images/testimonials/marcus-r.jpg" 
    },
    { 
      name: "Aisha Patel", 
      message: "As a first-time activist, I wasn't sure where to start. All of Us made it easy to find local mutual aid groups. Now I help coordinate our neighborhood food distribution network.", 
      date: "2023-12-12", 
      imageUrl: "/images/testimonials/aisha-p.jpg" 
    },
    { 
      name: "Devon Williams", 
      message: "Finding like-minded people who care about education equity was a game-changer. We're now running after-school programs in underserved communities.", 
      date: "2023-11-05", 
      imageUrl: "/images/testimonials/devon-w.jpg" 
    },
    { 
      name: "Lucy Martinez", 
      message: "All of Us connected me with other healthcare workers advocating for Medicare for All. We've organized successful community health fairs and petition drives.", 
      date: "2023-10-18", 
      imageUrl: "/images/testimonials/lucy-m.jpg" 
    }
    */
  ];
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-primary mb-6">Testimonials</h1>
  <p class="text-lg mb-4">
    Comments from leaders and supporters of progressive change.
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