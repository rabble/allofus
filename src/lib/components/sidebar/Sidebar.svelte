<script lang="ts">
  import FocusAreaList from "./FocusAreaList.svelte";
  import EngagementTypeList from "./EngagementTypeList.svelte";
  import ErrorBoundary from "../shared/ErrorBoundary.svelte";
  
  export let currentFocusArea: string | null = null;
  export let currentEngagementType: string | null = null;
</script>

<div class="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
  <ErrorBoundary>
    <div class="divide-y divide-gray-200">
      <FocusAreaList {currentFocusArea} />
      <EngagementTypeList {currentEngagementType} />
    </div>
  </ErrorBoundary>
</div>