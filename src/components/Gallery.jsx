function Gallery(props){
    return(
        
<div className="w-10/12 m-auto">
        
<h1 class="mb-4 text-4xl text-center font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{props.title}</h1>
<p class="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{props.subtitle}</p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
    <div className="grid gap-4">
        <div>
            <img className="h-full w-auto object-cover rounded-lg" src="../src/assets/6.jpg" alt="" />
        </div>
        <div>
            <img className="h-full w-auto object-cover rounded-lg" src="../src/assets/7.jpg" alt="" />
        </div>
        <div>
            <img className="h-full w-auto object-cover rounded-lg" src="../src/assets/8.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <img className="h-full w-auto object-cover rounded-lg" src="../src/assets/9.jpg" alt="" />  
              </div>
        <div>
        <img className="h-full w-auto object-cover rounded-lg" src="../src/assets/10.jpg" alt="" /> 
               </div>
        <div>
        <img className="h-full w-auto object-cover rounded-lg" src="../src/assets/11.jpg" alt="" />
                </div>
    </div>
    <div className="grid gap-4">
        <div>
        <img className="h-full w-auto object-cover rounded-lg" src="../src/assets/12.jpg" alt="" />
        </div>
        <div>
        <img className="h-full w-auto object-cover rounded-lg" src="../src/assets/13.jpg" alt="" />
        </div>
        <div>
        <img className="h-full w-max rounded-lg" src="../src/assets/14.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-full w-auto object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
        </div>
        <div>
            <img className="h-full w-auto object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
        </div>
        <div>
            <img className="h-full w-auto object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
        </div>
    </div>
</div>
</div>

    );
}
export default Gallery;