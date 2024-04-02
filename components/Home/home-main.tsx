import Image from "next/image";

function HomeMain() {
  return (
    <div className="md:min-h-screen w-full relative flex flex-col md:flex-row items-center justify-between">
      <Image
        src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="main image"
        width={1000}
        height={1000}
        priority={true}
        className="absolute inset-0 h-full w-full object-cover object-center -z-50"
      />
      <div
        className="flex flex-col justify-start items-start md:w-2/3 w-full md:pl-20 pl-3"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-offset="100"
        data-aos-duration="1000"
      >
        <h2 className="md:text-5xl text-3xl font-bold md:my-16 my-8 text-white">
          Summer Offer - Latest Collections of 2024
        </h2>
        <p className="text-slate-100 font-semibold leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
          rutrum urna, sit amet accumsan velit efficitur sed. Phasellus blandit
          lacinia consequat. Integer auctor, mi id mollis fringilla, magna elit
          dignissim ex, ac vulputate odio justo sed purus.
        </p>
      </div>
      <div className="w-2/5"></div>
    </div>
  );
}

export default HomeMain;
