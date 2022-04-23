import {groq} from 'next-sanity'
import {usePreviewSubscription, urlFor} from '../lib/sanity'
import {getClient} from '../lib/sanity.server'

import Hero from './components/Hero';

const websiteQuery = groq`*[ _type == 'website'][0]`

export default function Home({data, preview}) {
  console.log(data);

  const {data: website} = usePreviewSubscription(websiteQuery, {
    initialData: data.website,
    enabled: preview,
  })

  console.log(website);

  const { businessHours, description, extensionDescription, extensions, image, services, testimonials, title, vividDescription, vivids } = website;

  return (
    <>
      <Hero title={title} description={description} image={image}/>
    </>
  )
}

export async function getStaticProps({preview = true}) {
  const website = await getClient(preview).fetch(websiteQuery)
  return {
    props: {
      preview,
      data: { website },
    },
  }
}