type HomeSectionProps = {
  onChangeSection: (section: string) => void;
}

export default function HomeSection({ onChangeSection }: HomeSectionProps) {
  return (
    <section id="home-section">
      <h1>
        青き先駆、黒き革新
      </h1>
      <p>
        インディーゲーム開発・プログラミング教育・コンテンツ配信事業を通じて<wbr />
        未来のクリエイターとともに、新しい価値を創造します。
      </p>
      <div>
        <div><button onClick={() => onChangeSection('services')}>サービスを見る</button></div>
        <div><button onClick={() => onChangeSection('contact')}>お問い合わせ</button></div>
      </div>
    </section>
  );
}
