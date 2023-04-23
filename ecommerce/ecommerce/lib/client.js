import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

export const client = createClient({
  projectId: 'f3x5z350',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

const Page = ({ mySanityData }) => {
	const imageProps = useNextSanityImage(configuredSanityClient, mySanityData.image);

	return (
		<Img
			{...imageProps}
			style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
			sizes="(max-width: 800px) 100vw, 800px"
			placeholder="blur"
			blurDataURL={mySanityData.image.asset.metadata.lqip}
		/>
	);
};

export const getServerSideProps = async function (context) {
  const { slug = '' } = context.query;

	const data = await configuredSanityClient.fetch(
		`{
			"mySanityData": *[_type == "mySanityType" && slug.current == $slug][0] {
				image {
					asset->{
						...,
						metadata
					}
				}
			}
		}`,
		{ slug }
	);

	return { props: data };
};

export default Page;

