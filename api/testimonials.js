import { SanityClient, urlFor } from "../lib/sanity";

const testimonialsQuery = `*[_type == "testimonials"]{
  date,
  description,
  image
}`;

const async function getStaticProps() {
    const testimonials = await.SanityClient.fetch(testimonialsQuery);
    return { props: { testimonials } };
}