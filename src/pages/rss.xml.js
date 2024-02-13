import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Alex Meza | Blog',
    description: 'Mi viaje de aprendizaje de Astro 👨‍🚀',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-mx</language>`,
  });
}