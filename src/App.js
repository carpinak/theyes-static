import { CssMedia } from "./utils/media";
import CdnImage from "./CdnImage";
import FooterFinal from "./FooterFinal";
import Icon from "./Icon";
import theme, { typeFacesCss, fontWeights } from "./utils/theme";
import useNavBarHeight from "./utils/useNavBarHeight";
import globalStyles from "./utils/globalStyles";
import { FontFaces } from "./utils/theme";

export default function App() {
  return (
    <div className="App">
      <style jsx global>
        {globalStyles}
      </style>
      <FontFaces />
      <MainContainer>
        <FinalLanding />
      </MainContainer>
    </div>
  );
}

function FinalLanding() {
  return (
    <div className="finalLandingContainer">
      <div className="upper">
        <div className="banner">
          <Icon
            name="LOGO"
            style={{
              height: "4.5rem",
              color: theme.textDark,
            }}
          />
        </div>
        <div className="paperTear">
          <CdnImage
            alt="paper tear"
            src={`/images/paper_tear_thick.png`}
            width={2880}
            height={150}
            style={{ zIndex: 1, width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="middle">
        <div className="embrace">
          <CdnImage
            alt="embrace"
            src={`/images/embrace.gif`}
            width={1062}
            height={1200}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="message">
          <p className="greetings">Hello, there!</p>
          <p className="paragraph">
            Over the past couple years, we&apos;ve had the best time building a
            new, fully personalized shopping experience, but *plot twist*
            we&apos;ve been acquired by Pinterest! The exciting news allows us
            opportunities to create even better ways to shop online. (Imagine
            more brands you love, our genius shopping recommendations, and the
            power of Pinterest combined.)
          </p>
          <p className="paragraph">
            It&apos;ll be unlike any other experience and we promise you&apos;ll
            be among the first to know when it launches.
          </p>
          <p className="paragraph">
            In the meantime, we&apos;re retiring THE YES. It&apos;s not goodbye,
            it&apos;s see you soon.
          </p>
          <div className="signoff">
            <p className="thanks">Thanks for the memories,</p>
            <p className="sender">THE YES team</p>
          </div>
        </div>
      </div>
      <FooterFinal />
      <style jsx>{`
        @media ${CssMedia.mediaLessThan("md")} {
          .finalLandingContainer {
            margin: 0 -1rem;
            flex: 1;
          }
          .banner {
            margin: 1rem 0 1rem;
          }
          .middle {
            margin-top: 2rem;
          }
          .message {
            ${typeFacesCss.h5secondary};
            margin-left: 1rem;
            margin-right: 1.5rem;
            margin-bottom: 2rem;
          }
          .greetings {
            line-height: 20px;
          }
          .paragraph {
            line-height: 31px;
            margin-top: 1.5rem;
          }
          .signoff {
            line-height: 27px;
            margin-top: 1.5rem;
          }
          .sender {
            font-weight: ${fontWeights.medium};
          }
          .embrace {
            margin: 0rem 1rem 2rem;
          }
          .lower {
            flex: 1 0 auto;
            justify-content: flex-end;
          }
        }
        @media ${CssMedia.mediaGreaterOrEqual("md")} {
          .finalLandingContainer {
            margin: 0 -1.5rem;
            flex: 1;
          }
          .upper {
            position: relative;
          }
          .banner {
            align-items: center;
            justify-content: center;
            background-color: ${theme.bgLight};
            min-height: 14rem;
            max-height: 14rem;
          }
          .paperTear {
            position: absolute;
            bottom: calc(-1 * 2.7vw);
          }
          .middle {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 6.5rem 2rem;
          }
          .embrace {
            width: 40rem;
            justify-content: center;
            align-items: center;
          }
          .message {
            ${typeFacesCss.h5secondary};
            width: 35.5rem;
            align-items: flex-start;
            margin-left: 3rem;
            margin-right: 2rem;
          }
          .greetings {
            line-height: 26px;
          }
          .paragraph {
            line-height: 31px;
            margin-top: 2rem;
            text-align: left;
          }
          .signoff {
            line-height: 26px;
            margin-top: 2rem;
          }
          .sender {
            font-weight: ${fontWeights.medium};
          }
          .lower {
            flex: 1 0 auto;
            justify-content: flex-end;
          }
        }
      `}</style>
    </div>
  );
}

function MainContainer({ children }) {
  const { mobile: mobileNavBarHeight, desktop: desktopNavBarHeight } =
    useNavBarHeight();
  return (
    <div className="contentContainer" id="content-container-scroll">
      <div className="content" id="content">
        {children}
      </div>
      <style jsx>{`
        .contentContainer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: scroll;
        }
        .content {
          margin-top: calc(-1 * ${desktopNavBarHeight});
          padding: ${desktopNavBarHeight} 1.5rem 0 1.5rem;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          flex: 1;
          flex-basis: 100%;
          min-height: fit-content;
        }
        @media ${CssMedia.mediaLessThan("md")} {
          .content {
            margin-top: calc(-1 * ${mobileNavBarHeight});
            padding: ${mobileNavBarHeight} 1rem 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}
