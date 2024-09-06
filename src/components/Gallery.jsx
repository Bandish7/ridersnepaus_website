import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

function Gallery(props) {
  const gallery = [
    { image: "/assets/6.jpg", className: "" },
    { image: "/assets/7.jpg", className: "row-span-2" },
    { image: "/assets/8.jpg", className: "" },
    { image: "/assets/9.jpg", className: "row-span-2 md:row-span-1" },
    { image: "/assets/10.jpg", className: "" },
    { image: "/assets/11.jpg", className: "" },
    { image: "/assets/12.jpg", className: "row-span-1 md:row-span-2" },
    { image: "/assets/13.jpg", className: "" },
    { image: "/assets/14.jpg", className: "col-span-2" },
  ];
  return (
    <div className="w-10/12 m-auto">
      <h1 class="mb-4 text-4xl text-center font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {props.title}
      </h1>
      <p class="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {props.subtitle}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4">
        {gallery.map((image) => (
          <SlideshowLightbox className={image.className}>
            <img
              className="h-full w-full object-cover rounded-lg"
              src={image.image}
              alt=""
            />
          </SlideshowLightbox>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
