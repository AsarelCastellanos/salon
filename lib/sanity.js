import { createClient, createImageUrlBuilder } from "next-sanity"

const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: "production",
  projectId: "19yk7t1c",
  apiVersion: '2021-10-21',
  token: 'skKgmMa6VKqwGbHXjJ8NXcNWPMdQoxC9HdTukfdBkLrz012g8270PVeqEgOb59EB0grtuKx5oPeLOt3bwETeKF4h4T8BwAeO6pYsZ8DBXzww8lkf5HGuLZzkNCZlRXMcFuCNEZc7qZT7wGSSE47op4KaC6UrPt8ukBXmyZhppnxc7ZfHPcyH'
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
}
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)