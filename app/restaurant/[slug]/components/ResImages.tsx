interface ResImagesProps {
  images: string[];
}

const ResImages = ({ images }: ResImagesProps) => {
  return (
    <div>
      <h1 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">
        {images.length} {images.length > 1 ? "photos" : "photo"}
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {images.map((imageSrc, index) => (
          <img
            key={index}
            src={imageSrc}
            alt="gallery image"
            className="mb-1 mr-1 h-44 w-56"
          />
        ))}
      </div>
    </div>
  );
};

export default ResImages;
