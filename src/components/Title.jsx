function Title(props){
    return(
        <div className="my-16">

        
<h1 class="mb-4 text-4xl text-center font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{props.title}</h1>
<p class="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{props.subtitle}</p>


        </div>
    );
}
export default Title;