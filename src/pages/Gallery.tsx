import { useParams, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

/*
🔥 Auto import ALL gallery images
*/
const allImages = import.meta.glob(
  "/src/images/gallery/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const Gallery = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = useMemo(() => {
    if (!slug) return [];

    return Object.entries(allImages)
      .filter(([path]) => path.includes(slug))
      .sort(([a], [b]) => a.localeCompare(b)) // 🔥 clean order
      .map(([, mod]: any) => mod.default);
  }, [slug]);

  return (
    <section className="p-6">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 rounded-full bg-black text-white hover:opacity-80 transition"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-2xl font-semibold mb-6 capitalize">
        {(slug ?? "").split("-").join(" ")}
      </h1>

      {images.length === 0 ? (
        <p>No images found for this room.</p>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img) => (
            <img
              key={img}
              src={img}
              onClick={() => setSelectedImage(img)}
              className="rounded-xl w-full mb-4 break-inside-avoid object-cover hover:scale-105 transition cursor-pointer"
            />
          ))}
        </div>
      )}

      {/* 🔥 IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;