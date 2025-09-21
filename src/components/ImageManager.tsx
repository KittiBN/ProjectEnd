import { useState, useEffect } from 'react';
import { Upload, X, Edit, Trash2, Save, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageData {
  id: string;
  url: string;
  title: string;
  description: string;
  page: string;
  createdAt: string;
}

interface ImageManagerProps {
  page: string;
  onImagesChange?: (images: ImageData[]) => void;
}

export default function ImageManager({ page, onImagesChange }: ImageManagerProps) {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    loadImages();
  }, [page]);

  const loadImages = () => {
    const savedImages = localStorage.getItem('pageImages');
    if (savedImages) {
      const allImages = JSON.parse(savedImages);
      const pageImages = allImages.filter((img: ImageData) => img.page === page);
      setImages(pageImages);
      onImagesChange?.(pageImages);
    }
  };

  const saveImages = (newImages: ImageData[]) => {
    const savedImages = localStorage.getItem('pageImages');
    const allImages = savedImages ? JSON.parse(savedImages) : [];
    
    // Remove old images for this page
    const otherPageImages = allImages.filter((img: ImageData) => img.page !== page);
    
    // Add new images for this page
    const updatedImages = [...otherPageImages, ...newImages];
    
    localStorage.setItem('pageImages', JSON.stringify(updatedImages));
    setImages(newImages);
    onImagesChange?.(newImages);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      // Convert file to base64 for local storage
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage: ImageData = {
          id: Date.now().toString(),
          url: e.target?.result as string,
          title: file.name.split('.')[0],
          description: '',
          page: page,
          createdAt: new Date().toISOString()
        };

        const updatedImages = [...images, newImage];
        saveImages(updatedImages);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
    }
  };

  const deleteImage = (imageId: string) => {
    if (confirm('คุณแน่ใจหรือไม่ที่จะลบรูปภาพนี้?')) {
      const updatedImages = images.filter(img => img.id !== imageId);
      saveImages(updatedImages);
    }
  };

  const startEditing = (image: ImageData) => {
    setIsEditing(image.id);
    setEditTitle(image.title);
    setEditDescription(image.description);
  };

  const saveEdit = (imageId: string) => {
    const updatedImages = images.map(img => 
      img.id === imageId 
        ? { ...img, title: editTitle, description: editDescription }
        : img
    );
    saveImages(updatedImages);
    setIsEditing(null);
    setEditTitle('');
    setEditDescription('');
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditTitle('');
    setEditDescription('');
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4">
          <span className="hidden sm:inline">จัดการรูปภาพสำหรับหน้า: {page}</span>
          <span className="sm:hidden">อัปโหลดรูปภาพ</span>
        </h3>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-8 text-center">
          <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            <span className="hidden sm:inline">คลิกเพื่ือเลือกรูปภาพ หรือลากไฟล์มาวางที่นี่</span>
            <span className="sm:hidden">เลือกรูปภาพ</span>
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id={`file-upload-${page}`}
            disabled={isUploading}
          />
          <label htmlFor={`file-upload-${page}`}>
            <Button as="span" disabled={isUploading} className="cursor-pointer text-sm">
              <Plus className="w-4 h-4 mr-2" />
              {isUploading ? 'กำลังอัปโหลด...' : 'เลือกรูปภาพ'}
            </Button>
          </label>
        </div>
      </Card>

      {/* Images Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image) => (
            <Card key={image.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex space-x-1 sm:space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => startEditing(image)}
                    className="bg-white/80 hover:bg-white p-2"
                  >
                    <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteImage(image.id)}
                    className="bg-red-500/80 hover:bg-red-500 p-2"
                  >
                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-3 sm:p-4">
                {isEditing === image.id ? (
                  <div className="space-y-3">
                    <Input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="ชื่อรูปภาพ"
                      className="text-sm"
                    />
                    <Input
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      placeholder="คำอธิบาย"
                      className="text-sm"
                    />
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={() => saveEdit(image.id)} className="text-xs">
                        <Save className="w-3 h-3 mr-1" />
                        บันทึก
                      </Button>
                      <Button size="sm" variant="outline" onClick={cancelEdit} className="text-xs">
                        <X className="w-3 h-3 mr-1" />
                        ยกเลิก
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base truncate">{image.title}</h4>
                    {image.description && (
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">{image.description}</p>
                    )}
                    <p className="text-xs text-gray-400">
                      {new Date(image.createdAt).toLocaleDateString('th-TH')}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      {images.length === 0 && (
        <Card className="p-6 sm:p-8 text-center">
          <p className="text-sm sm:text-base text-gray-500">ยังไม่มีรูปภาพในหน้านี้</p>
        </Card>
      )}
    </div>
  );
}