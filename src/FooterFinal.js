import { CssMedia } from "./utils/media";
import CdnImage from "./CdnImage";
import Icon from "./Icon";
import theme from "./utils/theme";
import useIsMobileCSR from "./utils/useIsMobileCSR";

export default function FooterFinal() {
  const isMobile = useIsMobileCSR();
  const footerGraphic =
    isMobile === null ? null : isMobile ? (
      <CdnImage
        alt="fashionista"
        src={`/images/fashionistas_2x.png`}
        width={750}
        height={466}
        style={{ width: "100%", height: "auto", zIndex: 0 }}
      />
    ) : (
      <video autoPlay loop muted playsInline>
        <source src={`/images/spring_girls.webm`} type="video/webm" />
      </video>
    );

  return (
    <>
      <div className="images">
        <div className="paperTear">
          <div className="touchUp"></div>
          <CdnImage
            alt="paper tear"
            src={`/images/paper_tear_thick.png`}
            width={2880}
            height={150}
            style={{ zIndex: 1, width: "100%", height: "auto" }}
          />
        </div>
        {footerGraphic}
      </div>
      <div className="footer">
        <Icon
          name="LOGO"
          style={{
            height: "2.5rem",
            color: theme.textWhite,
          }}
        />
      </div>
      <style jsx>{`
        .footerFinalContainer {
        }
        .images {
          position: relative;
        }
        .paperTear {
          position: absolute;
          top: calc(-1 * 2.8vw);
          justify-content: center;
        }
        .touchUp {
          position: absolute;
          width: 100%;
          height: 0.8vw;
          background-color: ${theme.bgLight};
        }
        .footer {
          align-items: center;
          justify-content: center;
          background-color: ${theme.bgDark};
          min-height: 12.5rem;
          max-height: 12.5rem;
        }
        @media ${CssMedia.mediaLessThan("md")} {
          .footer {
            min-height: 10rem;
            max-height: 10rem;
          }
        }
      `}</style>
    </>
  );
}
