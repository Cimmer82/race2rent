import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  file: File;
  onRemove: () => void;
}

export default function ImagePreview({ file, onRemove }: ImagePreviewProps) {
  const imageUrl = URL.createObjectURL(file);

  React.useEffect(() => {
    return () => URL.revokeObjectURL(imageUrl);
  }, [imageUrl]);

  return (
    <div className="relative group">
      <img
        src={imageUrl}
        alt={file.name}
        className="w-full h-32 object-cover rounded-lg"
      />
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}