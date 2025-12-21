type HomeSectionProps = {
  onChangeSection: (section: string) => void;
}

export default function HomeSection({ onChangeSection }: HomeSectionProps) {
  return (
    <section id="home-section">
      <div className="w-full flex flex-col items-center justify-center text-center px-4">
        <h1>
          青き先駆・黒き革新
        </h1>
        <p className="button-container text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
          インディーゲーム開発・プログラミング教育・コンテンツ配信事業を通じて<br />
          未来のクリエイターとともに、新しい価値を創造します。
        </p>
        <div className="button-container flex items-center justify-center gap-6">
          <button onClick={() => onChangeSection('services')}>サービスを見る</button>
          <button onClick={() => onChangeSection('contact')}>お問い合わせ</button>
        </div>
      </div>
    </section>
  );
}
