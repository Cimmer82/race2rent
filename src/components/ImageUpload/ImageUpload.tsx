import React, { useCallback } from 'react';
import { Camera, Upload } from 'lucide-react';
import ImagePreview from './ImagePreview';

interface ImageUploadProps {
  images: File[];
  onChange: (files: File[]) => void;
  maxImages?: number;
}

export default function ImageUpload({ 
  images, 
  onChange, 
  maxImages = 10 
}: ImageUploadProps) {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      file => file.type.startsWith('image/')
    );
    
    if (droppedFiles.length + images.length > maxImages) {
      alert(`You can only upload up to ${maxImages} images`);
      return;
    }
    
    onChange([...images, ...droppedFiles]);
  }, [images, maxImages, onChange]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    
    const selectedFiles = Array.from(e.target.files).filter(
      file => file.type.startsWith('image/')
    );
    
    if (selectedFiles.length + images.length > maxImages) {
      alert(`You can only upload up to ${maxImages} images`);
      return;
    }
    
    onChange([...images, ...selectedFiles]);
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id="car-images"
        />
        <label 
          htmlFor="car-images" 
          className="cursor-pointer block"
        >
          <div className="mx-auto w-12 h-12 mb-4 rounded-full bg-orange-50 flex items-center justify-center">
            <Camera className="h-6 w-6 text-orange-600" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Drag and drop your images here</p>
            <p className="text-xs text-gray-500">
              or click to browse • {maxImages - images.length} images remaining
            </p>
          </div>
        </label>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((file, index) => (
            <ImagePreview
              key={index}
              file={file}
              onRemove={() => removeImage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}