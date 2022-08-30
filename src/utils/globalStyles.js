import css from "styled-jsx/css";
import { COLORS } from "./theme";

export default css.global`
/* reset.less */
/* The CSS reset, from the flexbox-reset package: https://www.npmjs.com/package/flexbox-reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
address,
big,
br,
cite,
code,
del,
dfn,
em,
hr,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
dl,
dt,
dd,
ol,
ul,
li,
button,
caption,
input,
fieldset,
form,
label,
legend,
output,
table,
textarea,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
audio,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
main,
mark,
menu,
nav,
option,
output,
ruby,
section,
select,
summary,
time,
video {
  border: 0;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  font: inherit;
  margin: 0;
  padding: 0;
  text-decoration: none;
  vertical-align: baseline;
}
a,
abbr,
acronym,
b,
bdo,
big,
br,
cite,
code,
del,
dfn,
em,
i,
ins,
kbd,
mark,
q,
samp,
s,
small,
span,
strike,
strong,
sub,
sup,
time,
tt,
var {
  display: inline;
}
blockquote,
button,
caption,
dd,
dt,
figcaption,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
option,
output,
p,
pre,
select,
textarea {
  display: block;
}
[hidden] {
  display: none;
}
a,
a:link,
a:visited,
a:hover,
a:active {
  background-color: transparent;
  background-image: none;
  color: inherit;
  text-decoration: none;
}
body {
  color: black;
  font-size: 100%;
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1;
  min-height: 100vh;
}
blockquote,
q {
  quotes: none;
}
blockquote::before,
q::before,
blockquote::after,
q::after {
  content: '';
  content: none;
}
input[type=date],
input[type=datetime-local],
input[type=file],
input[type=month],
input[type=time],
input[type=week],
select {
  flex-direction: row;
}
ol,
ul {
  list-style: none;
}
table {
  border-spacing: 0;
  display: table;
}
tbody {
  display: table-row-group;
}
td,
th {
  display: table-cell;
}
thead {
  display: table-header-group;
}
tr {
  display: table-row;
}

/**********************************************************************************/
/*
 * Only add global styles to this css and not styles which belong to a specific component.
 */

.main,
.content,
#__next {
    flex: 1;
    flex-basis: 100%;
    align-self: stretch;
}

/* used by react carousel */
.stretch {
    flex: 1
}

button {
    background: none;
}

/* remove ssr to csr flicker when the carousel renders */
.carousel__slider--horizontal {
    height: 100%;
}

/* <TODO> was not able to override the track style for rc-slider , need to re-visit the api*/
.rc-slider .rc-slider-track {
    background-color: #0000ff !important;
}

img {
  max-width: 100%;
  max-height: 100%;
}

/* Scrollbar styling for firefox */
* {
  scrollbar-width: thin;
}

/* Scrollbar styling for safari, edge, chrome */
::-webkit-scrollbar {
  width: 0.375rem;
}
::-webkit-scrollbar-thumb {
  background-color: ${COLORS.gray};
  opacity: 0.5;
}
::-webkit-scrollbar-thumb:hover {
  opacity: 1;
}

.flexrow {
  flex-direction: row;
}

/**********************************************************************************/

/* styles from legacy code (will be removed for v2) */

.theYes__Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    background: black;
    min-height: inherit;
}

.theYes__Container > #__next {
    flex-basis: 33%;
    max-width: 33%;
    width: 33%;
    min-height: inherit;
    background: rgb(245, 245, 245);
    padding: 5px;
}

.theYes__background{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.theYes__backgroundImage {
    width: 100%;
    height: 100%;
    background-image: url('/assets/web/images/LinkedIn_Banner.png');
    background-repeat: repeat;
    z-index:-1;
    filter: blur(2px);
}

.ReactModal__Overlay.ReactModal__Overlay--after-open{
    background-color: rgba(0, 0, 0, 0.3) !important;
}

/* Modal Content */
.theYesModal__content {
    min-width: 25vw;
    max-height: 90vh;
}

/* generic rules */
::placeholder {
    color: rgba(22, 22, 22, 0.6);
}


input::placeholder {
    color: rgba(22, 22, 22, 0.6);
}

.spinner-container {
    align-items: center;
}

/* PDP carousel */
.carousel-root ul.slider {
    height: 60vh;
}

a {
    text-decoration: none;
}

/* remove the blue background that chrome adds on autofill */
input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
  }
}
`;
