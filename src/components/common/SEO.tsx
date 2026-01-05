import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
};

function SEO({ title, description }: SEOProps) {
  return (
    <Helmet>
      <title>{title} | Comfy Store</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default SEO;
