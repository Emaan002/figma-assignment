import Featuredbox from "./Featuredbox";

const FeaturedWorks = () => {
    return (
      <div className='mx-6 sm:mx-20 md:mx-20 lg:mx-40 my-20 w-full bg-[#f5f1f5]'>
          <h2 className='font-heebo font-semibold lg:text-xl text-xl pb-8'>Featured Works</h2>
        <Featuredbox href="/Rectangle 30.png"/>
        <Featuredbox href="/Rectangle 32.png"/>
        <Featuredbox href="/Rectangle 34.png"/>
      </div>
    );
  };
  
  export default FeaturedWorks;