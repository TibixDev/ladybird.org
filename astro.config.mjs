import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://ladybird.org",
  integrations: [tailwind(), sitemap(), mdx(), icon()],
  // Special case the initial posts from before the astro transition.
  // These are the super-SEO'd links that were shared around.
  redirects: {
    "/announcement": "/posts/announcement",
    "/announcement.html": "/posts/announcement",
    "/fork": "/posts/fork",
    "/fork.html": "/posts/fork",
    "/thanks": "/posts/thanks",
    "/thanks.html": "/posts/thanks",
    "/why-ladybird": "/posts/why-ladybird",
    "/why-ladybird.html": "/posts/why-ladybird",
    "/wire.pdf": "/payment-details",
    "/posts.xml": "/posts.rss",
  },
});
