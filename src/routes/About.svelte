<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-primary mb-6">
    All of US: A Directory To Use To Connect, Care, and Build
  </h1>

  <!--
  <div class="flex justify-center mb-8">
    <img src="/assets/in_solidarity_mural.jpg" alt="In Solidarity Mural" class="rounded-lg shadow-lg max-w-full h-auto" />
  </div>
  -->

  <div class="prose max-w-none">
    <div class="bg-white shadow-lg rounded-lg p-8 mb-8">
      <p class="text-lg mb-6">
        Welcome to this site. We are here as a service to you during this very difficult time in our country.
        If you are worried about how the new Trump administration's policies will affect our communities this is a place for you.
      </p>

      <p class="text-lg mb-6">
        All of US provides action pathways for each of us to come together to make our communities, our jobs,
        and our daily lives better for all of us. No matter why you decided that you want to be part of the efforts
        to create positive change, you are welcomed to use this site.
      </p>

      <p class="text-lg">
        All of US is a tool for connecting people who care about their communities, and who could use some care
        from their communities. It is an opportunity for us to be part of organizations (some formal, others not)
        who are working on a wide range of issues throughout the country. The groups in this directory offer ways
        for people, like you, to support each other after extreme weather disasters, stop evictions, stop deportations,
        gain higher wages and respect on the job, work for racial and gender justice, bring healthcare and reproductive
        rights to all, protect our environment and achieve climate justice, "Stop Trump," get involved in elections
        locally and nationally, and much more opportunities for organizing together.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <div class="bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-2xl font-bold text-primary mb-4">What can I do?</h2>
        <p class="text-lg">
          Use your skills for positive change and learn new ones.
        </p>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-2xl font-bold text-primary mb-4">Where can I turn?</h2>
        <p class="text-lg">
          Connect with campaigns and organizations that need your help to help your community.
        </p>
      </div>
    </div>

    <div class="bg-white shadow-lg rounded-lg p-8">
      <h2 class="text-2xl font-bold text-primary mb-4">Getting Started</h2>
      <p class="text-lg mb-6">
        Use the search to find and share resources and skills in your area or online. For your locale,
        your issue interests, and how you would like to help, choose one or more options to filter your search.
      </p>

      <div class="flex justify-center">
        <Link
          to="/organizations"
          class="bg-secondary hover:bg-primary text-white px-8 py-3 rounded-md transition-colors"
        >
          Browse Organizations
        </Link>
      </div>
    </div>

    <div class="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-primary mb-4">Contribute to AllOfUs</h2>
      <p class="text-lg mb-6">
        Do you know of an organization that should be part of our directory? You can help us grow by adding more organizations to the AllOfUs site. Your contributions will help others connect with valuable resources and support.
      </p>
      <div class="flex justify-center">
        <Link
          to="/add-organization"
          class="bg-secondary hover:bg-primary text-white px-8 py-3 rounded-md transition-colors"
        >
          Add an Organization
        </Link>
      </div>
    </div>
  </div>
</div> 