import Video from "@/assets/video/banner2.mp4";

const VideoBanner = () => {
  return (
    <>
      <div className="h-full lg:h-[70vh] overflow-hidden">
        <video width="100%" height="100%" className="" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div className="bg-[#161C24] py-40">
        <div className="flex items-center justify-center gap-4 mb-4">
          <p className="text-white text-2xl">靈感之泉，生命的深邃旅程</p>
        </div>
        <p className="text-white text-center px-6">
          咖啡，濃郁如詩，低唱著生命的旋律，每一口，都是尋找靈感的書寫之旅
        </p>
      </div>
    </>
  );
};

export default VideoBanner;
