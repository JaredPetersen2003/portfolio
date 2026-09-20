import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No incremental cache override: every route is statically prerendered, so
// there is no ISR to cache. Add one here if you introduce revalidation.
export default defineCloudflareConfig();
