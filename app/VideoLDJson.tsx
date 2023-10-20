type Props = {
  asset: {
    createdAt?: number;
    externalIds?: { [key: string]: string };
  };
  name: string;
  description: string;
};

export default function VideoLDJson({ asset, name, description }: Props) {
  const { createdAt, externalIds } = asset;
  if (!createdAt || !externalIds?.playbackId) return null;
  const playbackId = externalIds.playbackId;

  const contentUrl = `https://stream.mux.com/${playbackId}.m3u8`;
  const thumbnailUrl = `https://image.mux.com/${playbackId}/thumbnail.jpg`;

  const uploadDate = new Date(createdAt).toISOString();

  const videoObject = {
    '@context': 'https://schema.org/',
    '@type': 'VideoObject',
    name,
    description,
    contentUrl,
    thumbnailUrl,
    uploadDate,
  };

  const metadata = JSON.stringify(videoObject);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: metadata }} />;
}
