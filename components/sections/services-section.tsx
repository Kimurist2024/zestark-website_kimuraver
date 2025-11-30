import ServiceCard from '../ui/card';

type ServicesSectionProps = {
  onChangeSection: (section: string) => void;
};

export default function ServicesSection({ onChangeSection }: ServicesSectionProps) {
  return (
    <section id="services-section">
      <h2>SERVICES</h2>
      <p>私たちが提供する３つの事業領域</p>

      <div className="card-container flex">

        <ServiceCard
          icon="/icon-seriousgame.svg"
          title="シリアスゲーム開発"
          text="独創的なアイデアと技術力を融合することで課題解決を後押しするゲームを開発します。"
          button="詳しく聞く"
          onClick={() => onChangeSection('contact')}
        />

        <ServiceCard
          icon="/icon-programming-education.svg"
          title="プログラミング教育"
          text="次世代のエンジニアを育成するための実践的な教育プログラムを提供します。"
          button="詳しく聞く"
          onClick={() => onChangeSection('contact')}
        />

        <ServiceCard
          icon="/icon-programming-education.svg"
          title="コンテンツ配信"
          text="AIなどの最新技術をnoteやDiscordを通じて発信し、価値のある知識共有を促進します。"
          button="詳しく聞く"
          onClick={() => onChangeSection('contact')}
        />

      </div>
    </section>
  );
}
