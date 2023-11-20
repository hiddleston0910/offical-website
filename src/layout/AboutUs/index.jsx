const AboutUs = () => {
  return (
    <div id="about-us" className="max-w-7xl mx-auto py-20 md:py-40">
      <article className="grid items-center px-12 md:grid-cols-2 md:gap-12 lg:px-0">
        <aside className="mt-12 md:mt-0 md:pl-12">
          <h1 className="text-xl font-bold">香濃歲月：品牌咖啡的歷史奇蹟</h1>
          <p className="mt-6">
            品牌咖啡的歷史是一部豐富的故事，源於遙遠的過去。起初，咖啡是一種被發現的寶藏，經過世代的磨練，烘焙技術逐漸演進。傳承的藝術，讓濃郁的香氣成為人們期待的享受。品牌咖啡結合著獨特風味和文化深度，成為連結人與歷史的奇蹟之飲。在這香濃的歲月中，每一口都是對過去與未來的美好追求。
          </p>
        </aside>
        <div className="lg:px-12">
          <img
            src="https://images.pexels.com/photos/17244021/pexels-photo-17244021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </article>
    </div>
  );
};

export default AboutUs;
