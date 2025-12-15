import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    type?: 'website' | 'article';
    name?: string;
    image?: string;
    schema?: Record<string, any>;
}

export const SEO = ({
    title,
    description,
    type = 'website',
    name = 'CLIMORA',
    image = '/og-image.png',
    schema
}: SEOProps) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};
