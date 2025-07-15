import { defineConfig, sharpImageService, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import remarkToc from 'remark-toc';
// @ts-ignore
import remarkCollapse from 'remark-collapse';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://www.frc4087.org',
    prefetch: true,
    trailingSlash: 'always',
    integrations: [sitemap(), icon(), mdx()],
    experimental: {
      clientPrerender: true,
      contentIntellisense: true,
      csp: false,
      headingIdCompat: true,
      fonts: [
        {
            provider: fontProviders.google(),
            name: "Lexend",
            cssVariable: "--font-lexend"
        }
      ]
    },
    security: {
        checkOrigin: true,
    },
    image: {
        service: sharpImageService(),
        layout: 'constrained',
        'objectFit': 'contain',
        breakpoints: [400, 500, 600, 800, 900],
    },
    devToolbar: {
        enabled: false,
    },
    vite: {
      plugins: [tailwindcss()],
    },
    markdown: {
      remarkPlugins: [
        [remarkToc, { tight: true, heading: 'Contents', maxDepth: 3 }],
        [remarkCollapse, { test: 'Contents', summarizer: 'Contents' }]
      ],
      shikiConfig: {
        themes: {
          light: 'github-light',
          dark: 'dark-plus',
        },
          defaultColor: 'light-dark()',
      },
    }
});
