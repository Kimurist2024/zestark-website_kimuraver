import ServiceCard from '../ui/card';

type ServicesSectionProps = {
  onChangeSection: (section: string) => void;
};

export default function ServicesSection({ onChangeSection }: ServicesSectionProps) {
  return (
    <section id="services-section">
      <div className="services-container">
        <h2>SERVICES</h2>
        <p>私たちが提供する３つの事業領域</p>
      </div>

      <div className="card-container grid grid-cols-3 gap-[40px]">
        <ServiceCard
          icon="/icons/indie-game.svg"
          title="シリアスゲーム開発"
          text={
            <>
            独創的なアイデアと技術力を融合することで<br />
            課題解決を後押しするゲームを開発します。
            </>
          }
          button="詳しく聞く"
          onClick={() => onChangeSection('contact')}
        />
        <ServiceCard
          icon="/icons/code.svg"
          title="プログラミング教育"
          text={
            <>
            次世代のエンジニアを育成するための<br />
            実践的な教育プログラムを提供します。
            </>
          }
          button="詳しく聞く"
          onClick={() => onChangeSection('contact')}
        />
        <ServiceCard
          icon="/icons/streaming.svg"
          title="コンテンツ発信"
          text={
            <>
            AIなどの最新技術をnoteやDiscordを通じて<br />
            発信し、価値のある知識共有を促進します。
            </>
          }
          button="詳しく聞く"
          onClick={() => onChangeSection('contact')}
        />
      </div>

    </section>
  );
}
