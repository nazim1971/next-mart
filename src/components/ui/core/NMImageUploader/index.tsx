import React, { useState } from "react";
import { Input } from "../../input";

const NMImageUploader = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageFiles((p) => [...p, file]);
  };

  return (
    <div>
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-uoloader"
      />
      <label
        htmlFor="image-uoloader"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
        {" "}
        Upload logo{" "}
      </label>
    </div>
  );
};

export default NMImageUploader;
