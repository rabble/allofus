<script lang="ts">
  import FeaturedOrganizations from "./FeaturedOrganizations.svelte";
  import AnnouncementFeed from './content/AnnouncementFeed.svelte';
  import ReportsList from './content/ReportsList.svelte';
  import { announcements, reports } from '../data/content';
  import { Link } from 'svelte-routing';
  
  // Get latest 10 items for each feed
  $: latestAnnouncements = [...announcements]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 12);
    
  $: latestReports = [...reports]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

    const muralImages = [
      {
        src: '/assets/BLM_street_art.jpg',
        alt: 'Black Lives Matter street art'
      },
      {
        src: '/assets/diego_rivera_mural.jpg',
        alt: 'Diego Rivera mural depicting social justice'
      },
      {
        src: '/assets/in_solidarity_mural.jpg',
        alt: 'In solidarity community mural'
      },
      {
        src: '/assets/solar_commons_mural.jpg',
        alt: 'Solar commons mural'
      },
      {
        src: '/assets/students_trafford.jpg',
        alt: 'Students at Trafford'
      },
      {
        src: '/assets/chalk_mural.jpg',
        alt: 'Chalk mural artwork'
      },
      {
        src: '/assets/imagine_wall.jpg',
        alt: 'Imagine wall mural'
      },
      {
        src: '/assets/iowa_mural.jpg',
        alt: 'Iowa community mural'
      },
      {
        src: '/assets/solidarity.jpg',
        alt: 'Solidarity artwork'
      }
    ];
  
    // Select a random image
    const randomImage = muralImages[Math.floor(Math.random() * muralImages.length)];

</script>

<div class="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto my-8">
  <h1 class="text-4xl font-bold text-primary mb-6">
    All of Us: A Directory To Connect, Care, and Build
  </h1>
  <h3 class="text-2xl font-semibold mb-4">
    Contact campaigns and organizations that need your help to help everyone.
  </h3>

  <p class="text-lg mb-6">
    <b>All of Us</b> wants to help you find and join efforts to make neighborhoods, schools, jobs, and daily lives better. Use the search below to find and work with organizations on a wide range of issues throughout the country. Enter your information and find ways to help people in need, stop evictions, stop deportations, win higher wages and greater respect on the job, work for racial and gender justice, bring healthcare and reproductive rights to all, protect our environment, achieve climate justice, win electoral reforms, and "Stop Trump" plus more opportunities for organizing together.
  </p>
  
  <h2 class="text-2xl font-bold text-primary mb-6">Search Our Directory of Organizations</h2>
  <p class="text-lg mb-6">
    Choose your location, your focus area, and the way you want to engage, and then click Search to see a list of organizations that fit your criteria. Each entry you see links to an organization page where you will learn more about the organization and projects they have and the help they need. Follow the instructions on that page for how to connect with the organization. You can search as many times as you like to find ways to aid the tasks we all face. 
  </p>
  
  <div class="grid md:grid-cols-1 gap-6 mt-8">
    <a href="/organizations" class="bg-blue-50 p-6 rounded-lg block text-primary hover:bg-blue-100">
      <h2 class="text-xl font-semibold text-primary mb-3">Search Now: Get Involved</h2>
      <p>Use your skills for positive change, learn new ones, and connect with campaigns and organizations that need your help to help your community.</p>
    </a>
  </div>


  <div class="mb-8">
    <br>
    <img 
      src={randomImage.src}
      alt={randomImage.alt}
      class="w-full h-auto rounded-lg shadow-lg"
      loading="lazy"
    />
  </div>
</div>

<div class="max-w-4xl mx-auto">
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <h2 class="text-2xl font-bold mb-4">Latest Updates</h2>
      <AnnouncementFeed announcements={latestAnnouncements} />
      <Link 
        to="/announcements"
        class="text-secondary hover:text-primary mt-4 inline-block"
      >
        View all updates →
      </Link>
    </div>
    
    <div>
      <h2 class="text-2xl font-bold mb-4">Recent Reports</h2>
      <ReportsList reports={latestReports} />
      <Link 
        to="/reports"
        class="text-secondary hover:text-primary mt-4 inline-block"
      >
        View all reports →
      </Link>
    </div>
  </div>
</div>
