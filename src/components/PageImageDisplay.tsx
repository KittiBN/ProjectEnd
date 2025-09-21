import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';

interface ImageData {
  id: string;
  url: string;
  title: string;
  description: string;
  page: string;
  createdAt: string;
}

interface PageImageDisplayProps {
  page: string;
  layout?: 'grid' | 'carousel' | 'masonry';
  showTitles?: boolean;
}

export default function PageImageDisplay({ 
  page, 
  layout = 'grid',
  showTitles = true 
}: PageImageDisplayProps) {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    loadImages();
  }, [page]);

  const loadImages = () => {
    const savedImages = localStorage.getItem('pageImages');
    if (savedImages) {
      const allImages = JSON.parse(savedImages);
      const pageImages = allImages.filter((img: ImageData) => img.page === page);
      setImages(pageImages);
    }
  };

  if (images.length === 0) {
    return null;
  }

  const renderGridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-video relative">
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </div>
          {showTitles && (
            <div className="p-4">
              <h3 className="font-semibold mb-1">{image.title}</h3>
              {image.description && (
                <p className="text-sm text-gray-600">{image.description}</p>
              )}
            </div>
          )}
        </Card>
      ))}
    </div>
  );

  const renderCarouselLayout = () => (
    <div className="space-y-4">
      {images.map((image) => (
        <Card key={image.id} className="overflow-hidden">
          <div className="aspect-[21/9] relative">
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {showTitles && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                {image.description && (
                  <p className="text-white/90 text-sm">{image.description}</p>
                )}
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );

  const renderMasonryLayout = () => (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {images.map((image) => (
        <Card key={image.id} className="break-inside-avoid overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-auto object-cover"
            />
          </div>
          {showTitles && (
            <div className="p-4">
              <h3 className="font-semibold mb-1">{image.title}</h3>
              {image.description && (
                <p className="text-sm text-gray-600">{image.description}</p>
              )}
            </div>
          )}
        </Card>
      ))}
    </div>
  );

  return (
    <div className="my-8">
      {layout === 'grid' && renderGridLayout()}
      {layout === 'carousel' && renderCarouselLayout()}
      {layout === 'masonry' && renderMasonryLayout()}
    </div>
  );
}