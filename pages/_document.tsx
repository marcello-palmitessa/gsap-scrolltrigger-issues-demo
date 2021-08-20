import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head title="Banca Aidexa" />
        <body>
          {/* svg-sprite */}
          <div id="svg-defs" style={{ display: 'none' }}>
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <symbol id="menu-toggle" viewBox="0 0 24 19">
                <g stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd" strokeLinecap="round">
                  <path d="M1.585 1.5h20.322M1.585 9.5h20.322M1.585 17.5h20.322" />
                </g>
              </symbol>

              <symbol id="social-facebook" viewBox="0 0 56 56">
                <path
                  fillRule="evenodd"
                  fill="currentColor"
                  d="M30.2 18.875a4.625 4.625 0 00-4.625 4.625v2.575H23.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V36.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 00-.218-.28h-3.347V23.5a.775.775 0 01.775-.775h2.6c.124 0 .225-.1.225-.225v-3.4c0-.124-.1-.225-.225-.225h-2.6z"
                />
              </symbol>
              <symbol id="social-twitter" viewBox="0 0 56 56">
                <path
                  fillRule="evenodd"
                  fill="currentColor"
                  d="M37.81 22.227c.058-.08-.028-.185-.12-.149a8.49 8.49 0 01-2.05.513 4.13 4.13 0 001.72-2.02c.034-.086-.06-.163-.14-.118a8.21 8.21 0 01-2.325.857.1.1 0 01-.093-.03 4.1 4.1 0 00-6.991 3.65.102.102 0 01-.105.123 11.64 11.64 0 01-8.223-4.17.098.098 0 00-.163.015 4.16 4.16 0 00-.48 1.943 4.09 4.09 0 001.82 3.41 4.05 4.05 0 01-1.709-.43c-.068-.035-.15.014-.147.09a4.23 4.23 0 00.933 2.468A4.1 4.1 0 0022.1 29.79a3.93 3.93 0 01-1.1.17 4.901 4.901 0 01-.606-.045c-.075-.01-.136.06-.11.13a4.11 4.11 0 003.776 2.685 8.22 8.22 0 01-5.625 1.741c-.106-.007-.155.134-.064.189a11.57 11.57 0 005.919 1.62A11.59 11.59 0 0036 24.6v-.48a.1.1 0 01.04-.08 8.429 8.429 0 001.77-1.814z"
                />
              </symbol>
              <symbol id="social-linkedin" viewBox="0 0 56 56">
                <path
                  fillRule="evenodd"
                  fill="currentColor"
                  d="M22.75 23.875c.069 0 .125.056.125.125v13a.125.125 0 01-.125.125h-4a.125.125 0 01-.125-.125V24c0-.069.056-.125.125-.125zm6.5 0c.069 0 .125.056.125.125v1.382l1.306-.56a7.168 7.168 0 012.169-.548c2.414-.219 4.525 1.68 4.525 4.106V37a.125.125 0 01-.125.125h-4a.125.125 0 01-.125-.125v-7a1.875 1.875 0 10-3.75 0v7a.125.125 0 01-.125.125h-4a.125.125 0 01-.125-.125V24c0-.069.056-.125.125-.125zm-8.5-6a2.125 2.125 0 110 4.25 2.125 2.125 0 010-4.25z"
                />
              </symbol>
              <symbol id="social-instagram" viewBox="0 0 56 56">
                <path
                  fillRule="evenodd"
                  fill="currentColor"
                  d="M33.23 19.082c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 010 10.61c-.223 1.906-1.754 3.401-3.653 3.614a47.468 47.468 0 01-10.46 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 010-10.611c.223-1.906 1.754-3.401 3.653-3.613a47.472 47.472 0 0110.46 0zM28 23.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 1.5a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zM33 22a1 1 0 100 2 1 1 0 000-2z"
                />
              </symbol>
              <symbol id="social-youtube" viewBox="0 0 56 56">
                <path
                  fillRule="evenodd"
                  fill="currentColor"
                  d="M22.989 20.89a64.248 64.248 0 0110.022 0l2.24.176a2.725 2.725 0 012.476 2.268c.517 3.09.517 6.243 0 9.332a2.725 2.725 0 01-2.475 2.268l-2.24.176a64.24 64.24 0 01-10.023 0l-2.24-.176a2.725 2.725 0 01-2.476-2.268 28.315 28.315 0 010-9.332 2.725 2.725 0 012.475-2.268l2.24-.175zM26 30.47v-4.94a.3.3 0 01.454-.257l4.117 2.47a.3.3 0 010 .514l-4.117 2.47A.3.3 0 0126 30.47z"
                />
              </symbol>

              <symbol id="close" viewBox="0 0 32 32">
                <defs>
                  <path id="b" d="M0 0h32v32H0z" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="c" fill="#fff">
                    <use xlinkHref="#b" />
                  </mask>
                  <g
                    mask="url(#c)"
                    fillRule="nonzero"
                    stroke="currentColor"
                    strokeDasharray="0,0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M9.65 22.89L22.88 9.65M22.88 22.89L9.65 9.65" />
                  </g>
                </g>
              </symbol>
              <symbol id="chevron-down" viewBox="0 0 12 7">
                <path
                  d="M21.5 13.5l-5 5-5-5"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0,0"
                />
              </symbol>
              <symbol id="chevron-up" viewBox="0 0 12 7">
                <path
                  d="M11.5 18.5l5-5 5 5"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0,0"
                />
              </symbol>
              <symbol id="chevron-left" viewBox="0 0 32 32">
                <path
                  d="M19 21l-5-5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0,0"
                />
              </symbol>
              <symbol id="chevron-right" viewBox="0 0 32 32">
                <path
                  d="M14 11l5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0,0"
                />
              </symbol>

              <symbol id="arrow-down" viewBox="0 0 32 32">
                <defs>
                  <path id="b" d="M0 0h32v32H0z" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g
                    fillRule="nonzero"
                    stroke="currentColor"
                    strokeDasharray="0,0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M16 8v16M23 17l-7 7-7-7" />
                  </g>
                </g>
              </symbol>

              <symbol id="arrow-left" viewBox="0 0 32 32">
                <g
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0,0"
                >
                  <path d="M24 16H8M15 23l-7-7 7-7" />
                </g>
              </symbol>

              <symbol id="arrow-right" viewBox="0 0 32 32">
                <defs>
                  <filter colorInterpolationFilters="auto" id="a">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 1.000000 0"
                    />
                  </filter>
                </defs>
                <g
                  filter="url(#a)"
                  fill="none"
                  fillRule="evenodd"
                  strokeDasharray="0,0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g stroke="#000" strokeWidth="2">
                    <path d="M8 16h16M17 9l7 7-7 7" vectorEffect="non-scaling-stroke" />
                  </g>
                </g>
              </symbol>
              <symbol id="arrow-up" viewBox="0 0 32 32">
                <defs>
                  <filter colorInterpolationFilters="auto" id="a">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 1.000000 0"
                    />
                  </filter>
                </defs>
                <g
                  filter="url(#a)"
                  fill="none"
                  fillRule="evenodd"
                  strokeDasharray="0,0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g stroke="#000" strokeWidth="2">
                    <path d="M16 24V8M9 15l7-7 7 7" />
                  </g>
                </g>
              </symbol>
              <symbol id="half-star" viewBox="0 0 32 32">
                <defs>
                  <filter colorInterpolationFilters="auto" id="a">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 1.000000 0"
                    />
                  </filter>
                </defs>
                <g filter="url(#a)" fill="none" fillRule="evenodd">
                  <path
                    d="M14.972 3.322a1.77 1.77 0 00-.652.858L12 11H4.27a1.77 1.77 0 00-1.67 1.22 1.73 1.73 0 00.66 2l6.16 4.22-2.34 6.8a1.71 1.71 0 00.66 2 1.77 1.77 0 002 0L16 23a4.15 4.15 0 001.65-3.31v-15A1.65 1.65 0 0016 3a1.77 1.77 0 00-1.028.322z"
                    fill="#000"
                  />
                </g>
              </symbol>
              <symbol id="star" viewBox="0 0 32 32">
                <path
                  d="M28.8 11.3c-.3-.2-.7-.3-1-.3H20l-2.3-6.8c-.1-.3-.4-.6-.7-.9s-.6-.3-1-.3-.7.1-1 .3c-.3.2-.5.5-.7.9L12 11H4.3c-.4 0-.7.1-1 .3-.3.2-.5.5-.6.9-.1.4-.1.8 0 1.1s.4.7.7.9l6.2 4.2-2.3 6.8c-.1.4-.1.8 0 1.1s.4.7.7.9c.3.2.6.3 1 .3s.7-.1 1-.3l6-4.2 6.2 4.3c.3.2.6.3 1 .3s.7-.1 1-.3c.3-.2.6-.5.7-.9.1-.4.1-.8 0-1.1l-2.3-6.8 6.2-4.2c.3-.2.6-.5.7-.9.1-.4.1-.8 0-1.1-.2-.4-.4-.7-.7-1z"
                  fillRule="evenodd"
                  fill="currentColor"
                  clipRule="evenodd"
                />
              </symbol>
              <symbol id="info" viewBox="0 0 32 32">
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M16 6C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10A10 10 0 0016 6zm1 14a1 1 0 01-2 0v-5a1 1 0 112 0v5zm-1-7a1 1 0 110-2 1 1 0 010 2z"
                    fill="currentColor"
                  />
                </g>
              </symbol>
              <symbol id="add-simple" viewBox="0 0 32 32">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0,0"
                  d="M6.9 16.3h18.7"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0,0"
                  d="M16.3 25.6V6.9"
                />
              </symbol>
              <symbol id="minus-simple" viewBox="0 0 32 32">
                <path fill="none" d="M0 0h32v32H0z" />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0,0"
                  d="M6.9 16.3h18.7"
                />
              </symbol>
              <symbol id="trust-pilot-negative" viewBox="0 0 98 24">
                <g fill="#FFF" fillRule="nonzero">
                  <path d="M25.929 8.64h9.885v1.83h-3.887V20.76H29.79V10.47h-3.87V8.64h.009zm9.463 3.344h1.827v1.693h.034c.06-.24.173-.47.337-.692a3.175 3.175 0 011.37-1.069c.284-.112.577-.172.87-.172.225 0 .388.01.474.018.087.008.173.025.268.034v1.864a6.267 6.267 0 00-.423-.06 3.607 3.607 0 00-.422-.025 2.3 2.3 0 00-.93.196 2.143 2.143 0 00-.76.573 2.903 2.903 0 00-.516.941c-.13.376-.19.804-.19 1.292v4.173h-1.948v-8.766h.009zm14.134 8.775h-1.913v-1.223h-.034a2.647 2.647 0 01-1.07 1.06c-.473.265-.956.402-1.447.402-1.164 0-2.008-.282-2.525-.855-.517-.573-.776-1.437-.776-2.591v-5.568h1.948v5.38c0 .77.146 1.316.448 1.633.293.316.715.479 1.25.479.413 0 .75-.06 1.025-.188.276-.129.5-.291.664-.505.172-.205.293-.462.37-.753a3.68 3.68 0 00.113-.949v-5.088h1.947v8.766zm3.319-2.814c.06.564.275.958.646 1.189.38.222.827.342 1.353.342.181 0 .388-.017.62-.043.233-.026.457-.085.656-.162a1.26 1.26 0 00.508-.351c.13-.154.19-.35.181-.599a.824.824 0 00-.276-.607 1.945 1.945 0 00-.655-.385 6.615 6.615 0 00-.913-.248c-.345-.068-.69-.145-1.043-.222a9.958 9.958 0 01-1.052-.291 3.22 3.22 0 01-.905-.462 2.035 2.035 0 01-.637-.735c-.164-.3-.242-.667-.242-1.112 0-.479.121-.872.354-1.197.232-.325.534-.582.887-.779a4.135 4.135 0 011.198-.419c.44-.077.862-.12 1.259-.12.457 0 .896.052 1.31.146a3.39 3.39 0 011.129.47c.336.214.612.496.836.838.224.342.362.762.422 1.249h-2.034c-.095-.462-.301-.778-.638-.932-.336-.163-.724-.24-1.155-.24-.137 0-.301.009-.49.035-.19.025-.363.068-.535.128a1.16 1.16 0 00-.422.274.658.658 0 00-.173.47c0 .24.086.428.25.573.164.145.38.265.647.368.267.094.568.18.913.248.345.068.698.145 1.06.222.354.077.698.18 1.043.29.345.112.646.266.914.463.267.196.482.436.646.727.164.29.25.658.25 1.086 0 .521-.12.958-.362 1.325-.241.36-.552.659-.93.881-.38.223-.811.394-1.276.496-.466.103-.931.154-1.388.154a5.93 5.93 0 01-1.551-.188 3.79 3.79 0 01-1.233-.564 2.805 2.805 0 01-.819-.95c-.198-.376-.301-.83-.318-1.351h1.965v-.017zm6.43-5.961h1.473V9.35h1.948v2.634h1.758v1.445h-1.758v4.687c0 .205.008.376.026.53a.97.97 0 00.12.377c.06.102.155.18.285.23.129.052.293.077.517.077.138 0 .276 0 .413-.008.138-.009.276-.026.414-.06v1.497c-.215.025-.43.042-.629.068a5.077 5.077 0 01-.63.034c-.516 0-.93-.051-1.24-.145-.31-.094-.56-.24-.733-.428a1.48 1.48 0 01-.362-.701 5.234 5.234 0 01-.112-.966v-5.175h-1.474v-1.462h-.017zm6.558 0h1.844v1.189h.035c.276-.513.655-.873 1.146-1.095a3.802 3.802 0 011.594-.334c.699 0 1.302.12 1.819.368.517.24.948.573 1.293 1 .345.428.594.925.767 1.489a6.19 6.19 0 01.258 1.813c0 .59-.077 1.163-.232 1.71a4.563 4.563 0 01-.698 1.472 3.42 3.42 0 01-1.19 1.017c-.482.257-1.043.385-1.698.385-.284 0-.569-.026-.853-.077a3.777 3.777 0 01-.819-.248 2.96 2.96 0 01-.724-.436 2.717 2.717 0 01-.56-.616h-.034V24h-1.948V11.984zm6.809 4.396c0-.394-.052-.778-.156-1.155a3.103 3.103 0 00-.465-.992 2.365 2.365 0 00-.767-.693 2.164 2.164 0 00-1.06-.265c-.819 0-1.44.283-1.853.847-.414.565-.62 1.317-.62 2.258 0 .445.051.855.163 1.231.112.377.267.702.491.975.216.274.474.488.776.642.302.162.655.24 1.051.24.449 0 .82-.095 1.13-.274.31-.18.56-.42.758-.702.198-.29.345-.615.43-.983.078-.368.122-.744.122-1.13zm3.438-7.74h1.948v1.83H76.08V8.64zm0 3.344h1.948v8.775H76.08v-8.775zm3.69-3.344h1.947v12.119h-1.948V8.64zm7.92 12.358c-.707 0-1.336-.12-1.888-.35a4.168 4.168 0 01-1.405-.958 4.164 4.164 0 01-.87-1.463 5.605 5.605 0 01-.302-1.864c0-.667.104-1.283.302-1.848a4.164 4.164 0 01.87-1.462 3.97 3.97 0 011.405-.958c.552-.23 1.181-.35 1.888-.35.706 0 1.336.12 1.887.35.552.231 1.017.556 1.405.958.38.41.672.898.87 1.462a5.54 5.54 0 01.302 1.848c0 .675-.103 1.3-.302 1.864a4.164 4.164 0 01-.87 1.463 3.97 3.97 0 01-1.405.957c-.551.231-1.18.351-1.887.351zm0-1.53c.43 0 .81-.095 1.129-.274.319-.18.577-.42.784-.71.207-.291.353-.625.457-.992.095-.368.146-.744.146-1.13 0-.376-.051-.743-.146-1.12a2.915 2.915 0 00-.457-.992 2.273 2.273 0 00-1.913-.975c-.431 0-.81.094-1.13.274-.318.18-.577.42-.784.701-.206.291-.353.616-.456.992a4.544 4.544 0 00-.147 1.12c0 .386.052.762.147 1.13.094.367.25.701.456.992.207.29.466.53.785.71.319.188.698.273 1.129.273zm5.033-7.484h1.474V9.35h1.948v2.634h1.758v1.445h-1.758v4.687c0 .205.008.376.025.53a.97.97 0 00.121.377c.06.102.155.18.284.23.13.052.294.077.518.077.138 0 .275 0 .413-.008.138-.009.276-.026.414-.06v1.497c-.215.025-.43.042-.63.068a5.077 5.077 0 01-.628.034c-.517 0-.931-.051-1.241-.145-.31-.094-.56-.24-.733-.428a1.48 1.48 0 01-.362-.701 5.234 5.234 0 01-.112-.966v-5.175H92.74v-1.462h-.017zM11.524 0l2.718 8.438h8.798l-7.117 5.212 2.718 8.43-7.117-5.212L4.4 22.08l2.726-8.43L0 8.43l8.798.008L11.524 0zm4.4 13.65l-4.4 3.218 5.01-1.31-.61-1.908z" />
                </g>
              </symbol>
            </svg>
          </div>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}