import Bg from "@/assets/images/bg.jpeg";

const Premium = () => {
  return (
    <div id="premium" className="py-40 max-w-7xl mx-auto relative">
      <img
        src={Bg}
        alt=""
        className="absolute -z-[1]  top-[0px] -right-[55%] opacity-30"
      />

      <h1 className="text-4xl font-black text-center mb-40">品牌理念</h1>

      <ul className="flex gap-10">
        <li className="p-16 text-center">
          <h2 className="text-xl font-bold my-28">綠色共生</h2>
          <h2 className="font-medium">綠葉生機：店家生態友善特色</h2>
          <p className="mt-4">
            這些店家以生態友善為核心價值，使用可持續材料、推廣回收文化，並在店內營造綠意盎然的環境，讓顧客在購物同時也感受到對環境的愛護。
          </p>
        </li>
        <li className="p-16 text-center rounded shadow-[-40px_40px_80px_rgba(145,158,171,0.16)]">
          <h2 className="text-xl font-bold my-28">手作匠心</h2>
          <h2 className="font-medium">匠心獨具：店家手作特色</h2>
          <p className="mt-4">
            這些店家專注於手作製品，匠心獨具，每一件商品都代表著精湛的手藝與設計，呈現獨特風格，吸引那些追求品味與獨一無二的顧客。
          </p>
        </li>
        <li className="p-16 text-center ">
          <h2 className="text-xl font-bold my-28">社區文化薈萃</h2>
          <h2 className="font-medium">社區匯聚：店家文化特色</h2>
          <p className="mt-4">
            這些店家深植於社區文化，透過舉辦活動、合作社區藝術家，打造與社區共同成長的文化基地，提供不只是商品，更是社區凝聚力的象徵。
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Premium;
