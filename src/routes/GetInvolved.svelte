<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-primary mb-8">Join the Movement: Be Part of the Change</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg mb-8">
      The world is at a crossroads, and the path forward depends on <strong>all of us</strong>. Change doesn't happen overnight, nor does it follow a straight line. It's a journey filled with challenges, setbacks, and triumphs. But one thing is certain: <strong>we are stronger together</strong>.
    </p>
    
    <p class="text-lg mb-12">
      At <Link to="/" class="text-secondary hover:text-primary">AllOfUs.Directory</Link>, we believe in the power of community and collective action. Our directory is a hub for progressive groups and organizations committed to shaping a more just and equitable world. Now more than ever, your voice and participation are crucial.
    </p>

    <h2 class="text-2xl font-bold text-primary mb-6">Why Join a Movement?</h2>
    <ul class="list-disc pl-6 mb-12 space-y-4">
      <li>
        <strong>Build Community:</strong> Connect with like-minded individuals who share your passion for change. Together, we can create supportive networks that uplift and empower.
      </li>
      <li>
        <strong>Amplify Impact:</strong> Individual efforts matter, but united voices resonate louder. Collaborative action enhances our ability to influence and enact meaningful change.
      </li>
      <li>
        <strong>Personal Growth:</strong> Engage with diverse perspectives, learn new skills, and contribute your unique strengths to a cause greater than yourself.
      </li>
    </ul>

    <h2 class="text-2xl font-bold text-primary mb-6">Inspiration from Progressive Voices</h2>
    <p class="mb-12">
      As highlighted in <em>Emergent Strategy: Shaping Change, Changing Worlds</em>, change is dynamic and requires adaptability. It's about small actions that collectively lead to significant transformations.
    </p>

    <h2 class="text-2xl font-bold text-primary mb-6">The Journey Ahead</h2>
    <p class="mb-12">
      We acknowledge that the journey toward progress isn't always easy. There will be obstacles and moments when the path forward seems unclear. Effective change requires persistence, strategy, and the courage to keep pushing forward, even when the odds seem stacked against us.
    </p>

    <h2 class="text-2xl font-bold text-primary mb-6">Take the First Step</h2>
    <ul class="list-disc pl-6 mb-12 space-y-4">
      <li>
        <strong>Explore Groups:</strong> Discover organizations in our directory that align with your values.
      </li>
      <li>
        <strong>Show Up:</strong> Participate in events, meetings, and actions. Your presence makes a difference.
      </li>
      <li>
        <strong>Make Community:</strong> Build relationships, share experiences, and support one another.
      </li>
    </ul>

    <div class="bg-secondary text-white rounded-lg p-8 mb-12">
      <h2 class="text-2xl font-bold mb-4">Let's Build the Future Together</h2>
      <p class="mb-6">
        Your involvement matters. Together, we can create a ripple effect that leads to lasting, positive change. Join us on this journey, and let's shape the world we want to see.
      </p>
      <div class="flex space-x-4">
        <Link 
          to="/organizations" 
          class="inline-block bg-white text-secondary hover:bg-gray-100 px-6 py-3 rounded-md transition-colors"
          aria-label="Browse the Directory"
        >
          Browse the Directory Now
        </Link>
        <Link 
          to="/signup" 
          class="inline-block bg-white text-secondary hover:bg-gray-100 px-6 py-3 rounded-md transition-colors"
          aria-label="Sign up for the Mailing List"
        >
          Sign Up for Mailing List
        </Link>
      </div>
    </div>

    <p class="text-xl font-bold text-center">
      Be part of the movement. Be part of the change.
    </p>
  </div>
</div>