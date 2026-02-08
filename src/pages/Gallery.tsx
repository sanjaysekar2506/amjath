import { useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";

/*
🔥 Auto import ALL gallery images
*/
const allImages = import.meta.glob(
  "../images/gallery/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const Gallery = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const images = useMemo(() => {
    if (!slug) return [];

    return Object.entries(allImages)
      .filter(([path]) => path.includes(`/gallery/${slug}/`))
      .map(([, mod]: any) => mod.default);
  }, [slug]);

  return (
    <section className="p-6">

      {/* 🔥 Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 rounded-full bg-black text-white hover:opacity-80 transition"
      >
        ← Back to Discover Ideas
      </button>

      {/* Title */}
      <h1 className="text-2xl font-semibold mb-6 capitalize">
        {(slug ?? "").split("-").join(" ")}
      </h1>

      {images.length === 0 ? (
        <p>No images found for this room.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <img
              key={img}
              src={img}
              className="rounded-xl w-full h-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
