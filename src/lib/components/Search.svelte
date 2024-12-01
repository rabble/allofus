<script lang="ts">
  let location = "";
  let focusArea = "";
  let engagementType = "";
  
  const engagementTypes = [
    "In-person",
    "Online",
    "Hybrid",
    "Construction",
    "Cooking",
    "Driving/transporting",
    "Editing",
    "Event/protest planning & logistics",
    "Fundraising",
    "Legal",
    "Medical",
    "Messaging (arts/media/graphics)",
    "Outreach",
    "Participate in trainings",
    "Research",
    "Strike Support",
    "Sanctuary support",
    "Tech support (programming, etc.)"
  ];
</script>

<div class="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto my-8">
  <h2 class="text-2xl font-semibold text-primary mb-6">Find Organizations</h2>
  
  <div class="grid md:grid-cols-3 gap-6">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2" for="location">
        Location
      </label>
      <input
        type="text"
        id="location"
        bind:value={location}
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-accent"
        placeholder="Enter city or state"
      />
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2" for="focus-area">
        Focus Area
      </label>
      <select
        id="focus-area"
        bind:value={focusArea}
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-accent"
      >
        <option value="">Select focus area</option>
        <option value="climate">Climate Justice</option>
        <option value="racial">Racial Justice</option>
        <option value="lgbtqia">LGBTQIA+</option>
        <option value="immigration">Immigration</option>
        <option value="workplace">Workplace Justice</option>
        <!-- Add more options -->
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2" for="engagement">
        How do you want to engage?
      </label>
      <select
        id="engagement"
        bind:value={engagementType}
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-accent"
      >
        <option value="">Select engagement type</option>
        {#each engagementTypes as type}
          <option value={type.toLowerCase()}>{type}</option>
        {/each}
      </select>
    </div>
  </div>
  
  <button class="mt-6 bg-secondary hover:bg-primary text-white px-6 py-2 rounded-md transition-colors">
    Search Organizations
  </button>
</div>