import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

/*
  🔥 Auto import ALL images from gallery folders
  Works because images are inside src/images/gallery
*/
const allImages = import.meta.glob(
  "../images/gallery/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

type RoomIdea = {
  slug: string;
  title: string;
  count: number;
  image: string;
};

const IdeasByRoom = () => {
  const navigate = useNavigate();

  const ideasByRoom: RoomIdea[] = useMemo(() => {
    const rooms: Record<string, string[]> = {};

    Object.entries(allImages).forEach(([path, mod]: any) => {
      // extract folder name from path
      const match = path.match(/gallery\/([^/]+)\//);
      if (!match) return;

      const slug = match[1];

      if (!rooms[slug]) {
        rooms[slug] = [];
      }

      rooms[slug].push(mod.default);
    });

    // convert object → array
    return Object.entries(rooms).map(([slug, images]) => ({
      slug,
      title: slug.split("-").join(" "), // safer than replaceAll
      count: images.length,
      image: images[0], // first image becomes thumbnail
    }));
  }, []);

  return (
    <section className="py-10 bg-[#f5efe6]">
      <div className="px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Discover Ideas By Room
        </h2>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {ideasByRoom.map((room) => (
            <div
              key={room.slug}
              className="relative min-w-[220px] h-[260px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer"
            >
              {/* Thumbnail */}
              <img
                src={room.image}
                alt={room.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-semibold capitalize">
                  {room.title}
                </p>
                <p className="text-sm opacity-90">
                  {room.count} Ideas
                </p>
              </div>

              {/* Arrow */}
                <div
        onClick={() => navigate(`/gallery/${room.slug}`)}
        className="absolute bottom-4 right-4 h-8 w-8 bg-white/90 rounded-full flex items-center justify-center text-gray-900 cursor-pointer hover:scale-110 transition"
      >
        →
      </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeasByRoom;
