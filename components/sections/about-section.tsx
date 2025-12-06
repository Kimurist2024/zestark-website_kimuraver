export default function AboutSection() {
  return (
    <section id="about-section">
      
      <div className="flex flex-col gap-8">
        <div>
          <h2>ABOUT US</h2>
          <p>
            Zestarkは、テクノロジーとクリエイティビティの融合を追求します。「青き先駆、黒き革新」という理念のもと、
            常に新しい挑戦を続けていきます。
          </p>
          <p>
            皆様とともに未来を切り拓くパートナーであり続けることが私たちの使命です。
          </p>
        </div>
        <div className="flex flex-col gap-4">

          <div>
            <div>
              {/*----- svgファイルなどの画像をここに配置 -----*/}
            </div>
            <div>
              <h3>革新的なアプローチ</h3>
              <span>最新技術と創造性を融合させた独自のソリューション</span>
            </div>
          </div>
          
          <div>
            <div>
              {/*----- svgファイルなどの画像をここに配置 -----*/}
            </div>
            <div>
              <h3>コミュニティ重視</h3>
              <span>クライアントとの対話を大切にする協働スタイル</span>
            </div>
          </div>

          <div>
            <div>
              {/*----- svgファイルなどの画像をここに配置 -----*/}
            </div>
            <div>
              <h3>持続的成長</h3>
              <span>長期的視点でのビジネス発展をサポート</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
