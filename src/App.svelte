<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Header from "./lib/components/Header.svelte";
  import Welcome from "./lib/components/Welcome.svelte";
  import Organizations from "./routes/Organizations.svelte";
  import OrganizationDetails from "./routes/OrganizationDetails.svelte";
  import FocusArea from "./routes/FocusArea.svelte";
  import EngagementType from "./routes/EngagementType.svelte";
  import Topics from "./routes/Topics.svelte";
  import GetInvolved from "./routes/GetInvolved.svelte";
  import ErrorBoundary from "./lib/components/shared/ErrorBoundary.svelte";
  import About from "./routes/About.svelte";
  import RelatedOrganizations from "./routes/RelatedOrganizations.svelte";
  import Announcements from "./routes/Announcements.svelte";
  import Reports from "./routes/Reports.svelte";
  import ReportDetails from "./routes/ReportDetails.svelte";
  import Dashboard from "./routes/admin/Dashboard.svelte";
  import EditOrganization from "./routes/admin/EditOrganization.svelte";
  import AddOrganization from "./routes/AddOrganization.svelte";
  
  export let url = "";

  import { onMount } from 'svelte';

  onMount(() => {
    document.title = "All of US Directory";
  });
</script>

<ErrorBoundary>
  <Router {url}>
    <div class="min-h-screen">
      <Header />
      
      <main class="container mx-auto px-4 py-8">
        <Route path="/" component={Welcome} />
        <Route path="/organizations" component={Organizations} />
        <Route path="/announcements" component={Announcements} />
        <Route path="/reports" component={Reports} />
        <Route path="/reports/:id" let:params>
          <ReportDetails id={params.id} />
        </Route>
        <Route path="/organizations/:id" let:params>
          <OrganizationDetails id={params.id} />
        </Route>
        <Route path="/organizations/:id/related" let:params>
          <RelatedOrganizations id={params.id} />
        </Route>
        <Route path="/focus-areas/:id" let:params>
          <FocusArea id={params.id} />
        </Route>
        <Route path="/engagement-types/:type" let:params>
          <EngagementType type={params.type} />
        </Route>
        <Route path="/topics" component={Topics} />
        <Route path="/get-involved" component={GetInvolved} />
        <Route path="/about" component={About} />
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/add-organization" component={AddOrganization} />
      </main>
    </div>
  </Router>
</ErrorBoundary>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
