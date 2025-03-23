import React from "react";

const LinkList = () => {
  const linkLists = [
    {
      id: 1,
      url: "https://myaccount.google.com/",
    },
  ];
  return (
    <div className="icon-container">
      <a href="https://myaccount.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 4c-4.42 0-8 3.58-8 8c0 1.95.7 3.73 1.86 5.12a9.95 9.95 0 0 1 12.28 0A7.96 7.96 0 0 0 20 12c0-4.42-3.58-8-8-8m0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13"
              opacity="0.3"
            />
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5m6.14-2.88a9.95 9.95 0 0 0-12.28 0A7.96 7.96 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12"
            />
            <path
              fill="currentColor"
              d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
            />
          </svg>
        </div>
        <div className="label short">Account</div>
      </a>
      <a href="https://google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="-2 -2 24 24"
          >
            <path
              fill="currentColor"
              d="M4.376 8.068A6 6 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10 10 0 0 1-.044 3.956a10 10 0 0 1-3.52 5.71A9.96 9.96 0 0 1 10 20A9.998 9.998 0 0 1 1.118 5.401A10 10 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114"
            />
          </svg>
        </div>
        <div className="label short">Search</div>
      </a>
      <a href="https://www.youtube.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            viewBox="1 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"
              />
            </g>
          </svg>
        </div>
        <div className="label short">YouTube</div>
      </a>
      <a href="https://mail.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="1 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
            />
          </svg>
        </div>
        <div className="label short">Gmail</div>
      </a>
      <a href="https://music.youtube.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="1 0 24 24"
          >
            <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M8.217 8.286C9.265 7.254 10.514 6.743 12 6.743s2.735.51 3.783 1.543s1.562 2.258 1.562 3.714s-.514 2.68-1.562 3.713s-2.297 1.543-3.783 1.543s-2.735-.51-3.783-1.543S6.655 13.455 6.655 12s.514-2.682 1.562-3.714m6.977 3.715L10 14.91V9.088z" />
              <path d="M19.071 18.966Q22.001 16.08 22 12q0-4.081-2.929-6.967Q16.141 2.147 12 2.147T4.929 5.033T2 12q0 4.08 2.929 6.966q2.93 2.886 7.071 2.886q4.142 0 7.071-2.886M12 5.433c-1.827 0-3.407.644-4.702 1.92C6.002 8.63 5.345 10.19 5.345 12c0 1.809.657 3.37 1.953 4.646c1.295 1.276 2.874 1.92 4.702 1.92s3.407-.644 4.702-1.92c1.296-1.276 1.953-2.837 1.953-4.646c0-1.81-.657-3.37-1.953-4.647c-1.295-1.276-2.875-1.92-4.702-1.92" />
            </g>
          </svg>
        </div>
        <div className="label short">YTMusic</div>
      </a>
      <a href="https://maps.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            width="67px"
            height="67px"
            viewBox="4 2 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 12.8116L23.9999 12.8541C23.9998 12.872 23.9996 12.8899 23.9994 12.9078C23.9998 12.9287 24 12.9498 24 12.971C24 16.3073 21.4007 19.2604 19.6614 21.2367C19.1567 21.8101 18.7244 22.3013 18.449 22.6957C17.4694 24.0986 16.9524 25.6184 16.8163 26.2029C16.8163 26.6431 16.4509 27 16 27C15.5491 27 15.1837 26.6431 15.1837 26.2029C15.0476 25.6184 14.5306 24.0986 13.551 22.6957C13.2756 22.3013 12.8433 21.8101 12.3386 21.2367C10.5993 19.2604 8 16.3073 8 12.971C8 12.9498 8.0002 12.9287 8.0006 12.9078C8.0002 12.8758 8 12.8437 8 12.8116C8 8.49736 11.5817 5 16 5C20.4183 5 24 8.49736 24 12.8116ZM16 15.6812C17.7132 15.6812 19.102 14.325 19.102 12.6522C19.102 10.9793 17.7132 9.62319 16 9.62319C14.2868 9.62319 12.898 10.9793 12.898 12.6522C12.898 14.325 14.2868 15.6812 16 15.6812Z"
              />
              <path d="M23.1054 9.21856C22.1258 7.37546 20.4161 5.96177 18.3504 5.34277L13.7559 10.5615C14.3208 9.98352 15.1174 9.62346 16.0002 9.62346C17.7134 9.62346 19.1022 10.9796 19.1022 12.6524C19.1022 13.3349 18.8711 13.9646 18.4811 14.4711L23.1054 9.21856Z" />
              <path d="M12.4311 21.3425C12.4004 21.3076 12.3695 21.2725 12.3383 21.2371C11.1918 19.9344 9.67162 18.2073 8.76855 16.2257L13.5439 10.8018C13.1387 11.3136 12.8976 11.9556 12.8976 12.6526C12.8976 14.3254 14.2865 15.6816 15.9997 15.6816C16.8675 15.6816 17.6521 15.3336 18.2151 14.7727L12.4311 21.3425Z" />
              <path d="M9.89288 7.76562C8.71207 9.12685 8 10.8881 8 12.8117C8 12.8438 8.0002 12.8759 8.0006 12.9079C8.0002 12.9288 8 12.9499 8 12.9711C8 14.1082 8.30196 15.2009 8.76889 16.2254L13.5362 10.8106L9.89288 7.76562Z" />
              <path d="M18.3499 5.34254C17.6068 5.11988 16.8176 5 15.9997 5C13.5514 5 11.36 6.07387 9.89258 7.76553L13.5359 10.8105L13.5438 10.8015C13.6101 10.7178 13.6807 10.6375 13.7554 10.5611L18.3499 5.34254Z" />
            </g>
          </svg>
        </div>
        <div className="label short">Maps</div>
      </a>
      <a href="https://play.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"
            />
          </svg>
        </div>
        <div className="label short">Play</div>
      </a>
      <a href="https://drive.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z"
            />
          </svg>
        </div>
        <div className="label short">Drive</div>
      </a>
      <a href="https://photos.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 256 256"
          >
            <g fill="currentColor">
              <path
                d="M192 88a63.7 63.7 0 0 1-14 40h-50V24a64 64 0 0 1 64 64M64 168a64 64 0 0 0 64 64V128H78a63.7 63.7 0 0 0-14 40"
                opacity=".2"
              />
              <path d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8M120 223.43A56.09 56.09 0 0 1 72 168a55.3 55.3 0 0 1 10-32h38ZM120 120H32.57A56.09 56.09 0 0 1 88 72a55.3 55.3 0 0 1 32 10Zm16-87.43A56.09 56.09 0 0 1 184 88a55.3 55.3 0 0 1-10 32h-38ZM168 184a55.3 55.3 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184" />
            </g>
          </svg>
        </div>
        <div className="label short">Photos</div>
      </a>
      <a href="https://translate.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 22-1-3H4q-.825 0-1.412-.587T2 17V4q0-.825.588-1.412T4 2h6l.875 3H20q.875 0 1.438.563T22 7v13q0 .825-.562 1.413T20 22zm-4.85-7.4q1.725 0 2.838-1.112T11.1 10.6q0-.2-.012-.362t-.063-.338h-3.95v1.55H9.3q-.2.7-.763 1.088t-1.362.387q-.975 0-1.675-.7T4.8 10.5t.7-1.725 1.675-.7q.45 0 .85.163t.725.487L9.975 7.55Q9.45 7 8.712 6.7T7.15 6.4q-1.675 0-2.863 1.188T3.1 10.5t1.188 2.913T7.15 14.6m6.7.5.55-.525q-.35-.425-.637-.825t-.563-.85zm1.25-1.275q.7-.825 1.063-1.575t.487-1.175h-3.975l.3 1.05h1q.2.375.475.813t.65.887M13 21h7q.45 0 .725-.288T21 20V7q0-.45-.275-.725T20 6h-8.825l1.175 4.05h1.975V9h1.025v1.05H19v1.025h-1.275q-.25.95-.75 1.85T15.8 14.6l2.725 2.675L17.8 18l-2.7-2.7-.9.925L15 19z"
            />
          </svg>
        </div>
        <div className="label short">Translate</div>
      </a>
      <a href="https://calendar.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.316 5.684H24v12.632h-5.684zM5.684 24h12.632v-5.684H5.684zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684zm-7.207 6.25v-.065q.407-.216.687-.617c.28-.401.279-.595.279-.982q0-.568-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.7 2.7 0 0 0-1.197-.257q-.9 0-1.481.467-.579.467-.793 1.078l1.085.452q.13-.374.413-.633.284-.258.767-.257.495 0 .816.264a.86.86 0 0 1 .322.703q0 .495-.36.778t-.886.284h-.567v1.085h.633q.611 0 1.02.327.407.327.407.843 0 .505-.387.832c-.387.327-.565.327-.924.327q-.527 0-.897-.311-.372-.312-.521-.881l-1.096.452q.268.923.977 1.401.707.479 1.538.477a2.84 2.84 0 0 0 1.293-.291q.574-.29.902-.794.327-.505.327-1.149 0-.643-.344-1.105a2.07 2.07 0 0 0-.881-.689m2.093-1.931.602.913L15 10.045v5.744h1.187V8.446h-.827zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0m-3.289 23.5 4.684-4.684h-4.684zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0z"
            />
          </svg>
        </div>
        <div className="label short">Calendar</div>
      </a>
      <a href="https://meet.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="41"
            height="41"
          >
            <path
              fill="currentColor"
              d="M2 18L2 32 12 32 12 18zM39 9v4.31l-10 9V16H14V6h22C37.66 6 39 7.34 39 9zM29 27.69l10 9V41c0 1.66-1.34 3-3 3H14V34h15V27.69zM12 34v10H5c-1.657 0-3-1.343-3-3v-7H12zM12 6L12 16 2 16zM29 25L39 16 39 34zM49 9.25v31.5c0 .87-1.03 1.33-1.67.75L41 35.8V14.2l6.33-5.7C47.97 7.92 49 8.38 49 9.25z"
            />
          </svg>
        </div>
        <div className="label short">Meet</div>
      </a>
      <a href="https://chat.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M1.637 0C.733 0 0 .733 0 1.637v16.5c0 .904.733 1.636 1.637 1.636h3.955v3.323c0 .804.97 1.207 1.539.638l3.963-3.96h11.27c.903 0 1.636-.733 1.636-1.637V5.592L18.408 0Zm3.955 5.592h12.816v8.59H8.455l-2.863 2.863Z"
            />
          </svg>
        </div>
        <div className="label short">Chat</div>
      </a>
      <a href="https://news.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21.267 21.2a.614.614 0 0 1-.613.613H3.344a.614.614 0 0 1-.612-.613V8.115a.614.614 0 0 1 .613-.613h17.309a.614.614 0 0 1 .613.613zm-3.032-3.42v-1.195a.08.08 0 0 0-.08-.08h-5.373v1.361h5.373a.08.08 0 0 0 .08-.083zm.817-2.587v-1.201a.08.08 0 0 0-.079-.082h-6.19v1.362h6.189a.08.08 0 0 0 .08-.078v-.004zm-.817-2.588V11.4a.08.08 0 0 0-.08-.08h-5.373v1.361h5.373a.08.08 0 0 0 .08-.079zM8.15 14.045v1.226h1.77c-.145.748-.804 1.292-1.77 1.292a1.976 1.976 0 0 1 0-3.95 1.77 1.77 0 0 1 1.253.49l.934-.932a3.14 3.14 0 0 0-2.187-.853 3.268 3.268 0 1 0 0 6.537c1.89 0 3.133-1.328 3.133-3.197a4 4 0 0 0-.052-.619zM2.27 7.654a.616.616 0 0 1 .613-.613h12.154l-1.269-3.49a.595.595 0 0 0-.743-.383L.368 7.775a.594.594 0 0 0-.323.775l2.225 6.112za.616.616 0 0 1 .613-.613h12.154l-1.269-3.49a.595.595 0 0 0-.743-.383L.368 7.775a.594.594 0 0 0-.323.775l2.225 6.112zm21.312-.31-8.803-2.37.751 2.067h5.584a.614.614 0 0 1 .613.613v8.794l2.247-8.365a.59.59 0 0 0-.392-.74m-4.496-1.675V2.795a.61.61 0 0 0-.611-.608H5.524a.61.61 0 0 0-.616.605v2.837l8.39-3.052a.594.594 0 0 1 .743.39l.544 1.497z"
            />
          </svg>
        </div>
        <div className="label short">News</div>
      </a>
      <a href="https://contacts.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4.625 22q-.4 0-.725-.325t-.325-.725v-2.625q0-2.25 1.4-3.975t3.6-2.2q-1 .7-1.55 1.762t-.55 2.288v4.75q0 .275.075.55t.25.5zM8.3 22q-.425 0-.737-.312t-.313-.738V16.2q0-1.75 1.238-2.975T11.475 12H16.2q1.75 0 2.975 1.225T20.4 16.2v1.6q0 1.75-1.225 2.975T16.2 22zM12 9.9q-1.65 0-2.8-1.15t-1.15-2.8 1.15-2.8T12 2t2.8 1.15 1.15 2.8-1.15 2.8T12 9.9"
            />
          </svg>
        </div>
        <div className="label short">Contacts</div>
      </a>
      <a href="https://myadcenter.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10.275 12q-.7 0-1.15-.525T8.8 10.25l.3-1.8q.2-1.075 1.013-1.763T12 6q1.1 0 1.913.688t1.012 1.762l.3 1.8q.125.7-.325 1.225T13.75 12zm.6-2h2.275l-.2-1.225q-.05-.35-.325-.562T12 8t-.612.213-.313.562zM3.1 12.975q-.575.025-.988-.225t-.537-.775q-.05-.225-.025-.45t.125-.425q0 .025-.025-.1-.05-.05-.25-.6-.05-.3.075-.575T1.8 9.35l.05-.05q.05-.475.388-.8t.837-.325q.075 0 .475.1l.075-.025q.125-.125.325-.187T4.375 8q.275 0 .488.088t.337.262q.025 0 .038.013t.037.012q.35.025.612.212t.388.513q.05.175.038.338t-.063.312q0 .025.025.1.175.175.275.388t.1.437q0 .1-.15.525-.025.05 0 .1l.05.4q0 .525-.437.9t-1.063.375zM20 13q-.825 0-1.412-.587T18 11q0-.3.088-.562t.237-.513l-.7-.625q-.25-.2-.088-.5T18 8.5h2q.825 0 1.413.588T22 10.5v.5q0 .825-.587 1.413T20 13M0 17v-.575q0-1.1 1.113-1.763T4 14q.325 0 .625.013t.575.062q-.35.5-.525 1.075T4.5 16.375V18H1q-.425 0-.712-.288T0 17m6 0v-.625q0-1.625 1.663-2.625t4.337-1q2.7 0 4.35 1T18 16.375V17q0 .425-.288.713T17 18H7q-.425 0-.712-.288T6 17m14-3q1.8 0 2.9.663t1.1 1.762V17q0 .425-.288.713T23 18h-3.5v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14m-8 .75q-1.425 0-2.55.375T8.125 16H15.9q-.225-.5-1.338-.875T12 14.75M12.025 9"
            />
          </svg>
        </div>
        <div className="label short one">My Ad Ce...</div>
        <div className="label full">
          My Ad
          <br />
          Center
        </div>
      </a>
      <a href="https://business.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22 8.5c0 1.37-1.12 2.5-2.5 2.5S17 9.87 17 8.5c0 1.37-1.12 2.5-2.5 2.5S12 9.87 12 8.5c0 1.37-1.12 2.5-2.5 2.5S7 9.87 7 8.5C7 9.87 5.88 11 4.5 11S2 9.87 2 8.5l1.39-5.42S3.68 2 4.7 2h14.6c1.02 0 1.31 1.08 1.31 1.08zm-1 3.7V20c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-7.8a3.96 3.96 0 0 0 4-.58c.69.55 1.56.88 2.5.88.95 0 1.82-.33 2.5-.88.69.55 1.56.88 2.5.88.95 0 1.82-.33 2.5-.88.68.55 1.56.88 2.5.88.53 0 1.04-.11 1.5-.3m-2 5.13c0-.2 0-.41-.05-.63l-.03-.16h-2.97v1.17h1.81c-.06.22-.14.44-.31.62-.33.33-.78.51-1.26.51-.5 0-.99-.21-1.35-.56-.69-.71-.69-1.86.02-2.58.69-.7 1.83-.7 2.55-.03l.14.13.84-.85-.16-.14c-.56-.52-1.3-.81-2.08-.81h-.01c-.81 0-1.57.31-2.14.87-.59.58-.92 1.34-.92 2.13 0 .8.31 1.54.88 2.09a3.2 3.2 0 0 0 2.22.91h.02c.8 0 1.51-.29 2.03-.8.47-.48.77-1.2.77-1.87"
            />
          </svg>
        </div>
        <div className="label short one">Business ...</div>
        <div className="label full">
          Business
          <br />
          Profile
        </div>
      </a>
      <a href="https://google.com/shopping/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.175 22q-.375 0-.75-.15t-.675-.45L2.6 14.25q-.3-.3-.438-.663t-.137-.737t.138-.75t.437-.675L11.4 2.6q.275-.275.65-.438T12.825 2H20q.825 0 1.413.587T22 4v7.175q0 .4-.15.763t-.425.637L12.6 21.4q-.3.3-.675.45t-.75.15M17.5 8q.625 0 1.063-.437T19 6.5t-.437-1.062T17.5 5t-1.062.438T16 6.5t.438 1.063T17.5 8"
            />
          </svg>
        </div>
        <div className="label short">Shopping</div>
      </a>
      <div className="separator"></div>
      <a href="https://docs.google.com/document/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818zm0-3.273H7.091V9.273h9.818zM14.727 6h6l-6-6z"
            />
          </svg>
        </div>
        <div className="label short">Docs</div>
      </a>
      <a href="https://docs.google.com/spreadsheets/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6zm1.363 10.636h-3.41v1.91h3.41zm0 3.273h-3.41v1.91h3.41zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z"
            />
          </svg>
        </div>
        <div className="label short">Sheets</div>
      </a>
      <a href="https://docs.google.com/presentation/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16.09 15.273H7.91v-4.637h8.18zm1.728-8.523h2.91v15.614c0 .904-.733 1.636-1.637 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.068v6.75zm-.363 2.523H6.545v7.363h10.91zm-2.728-5.979V6h6.001l-6-6v3.294z"
            />
          </svg>
        </div>
        <div className="label short">Slides</div>
      </a>
      <a href="https://docs.google.com/forms/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.727 6h6l-6-6zm0 .727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727zM7.91 17.318a.819.819 0 1 1 .001-1.638.819.819 0 0 1 0 1.638zm0-3.273a.819.819 0 1 1 .001-1.637.819.819 0 0 1 0 1.637zm0-3.272a.819.819 0 1 1 .001-1.638.819.819 0 0 1 0 1.638zm9 6.409h-6.818v-1.364h6.818zm0-3.273h-6.818v-1.364h6.818zm0-3.273h-6.818V9.273h6.818z"
            />
          </svg>
        </div>
        <div className="label short">Forms</div>
      </a>
      <a href="https://keep.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4.908 0c-.904 0-1.635.733-1.635 1.637v20.726c0 .904.732 1.637 1.635 1.637H19.09c.904 0 1.637-.733 1.637-1.637V6.5h-6.5V0zm9.819 0v6h6zM11.97 8.229c.224 0 .571.031.765.072.2.04.576.185.842.312.828.414 1.467 1.164 1.774 2.088.168.511.188 1.34.05 1.865a3.75 3.75 0 0 1-1.277 1.952l-.25.193h-1.87c-2.134 0-1.931.042-2.478-.494a3.35 3.35 0 0 1-.984-1.844c-.148-.766-.053-1.437.32-2.203.19-.399.303-.556.65-.899.68-.679 1.513-1.037 2.458-1.042m-1.866 7.863h3.781v1.328h-3.779v-1.328z"
            />
          </svg>
        </div>
        <div className="label short">Keep</div>
      </a>
      <a href="https://google.com/finance/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8 11.75V7.5q0-.625.438-1.062T9.5 6t1.063.438T11 7.5v4.25q0 .625-.437 1.063T9.5 13.25t-1.062-.437T8 11.75m5-.225V3.5q0-.625.438-1.062T14.5 2t1.063.438T16 3.5v8.025q0 .75-.462 1.125t-1.038.375-1.037-.375T13 11.525m-10 3.45V11.5q0-.625.438-1.062T4.5 10t1.063.438T6 11.5v3.475q0 .75-.462 1.125t-1.038.375-1.037-.375T3 14.975m2.4 6.075q-.65 0-.913-.612T4.7 19.35l4.1-4.1q.275-.275.663-.3t.687.25L13 17.65l5.6-5.6H18q-.425 0-.712-.288T17 11.05t.288-.712.712-.288h3q.425 0 .713.288t.287.712v3q0 .425-.288.713T21 15.05t-.712-.288T20 14.05v-.6l-6.25 6.25q-.275.275-.663.3t-.687-.25L9.55 17.3 6.1 20.75q-.125.125-.312.213t-.388.087"
            />
          </svg>
        </div>
        <div className="label short">Finance</div>
      </a>
      <a href="https://ads.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 48 48"
          >
            <defs>
              <mask id="ipTGoogleAds0">
                <g fill="none" stroke="#fff" stroke-width="4">
                  <path
                    fill="#555"
                    d="M41.355 34.153L29.522 8.776a6 6 0 0 0-10.876 5.072L30.48 39.224a6 6 0 1 0 10.876-5.071Z"
                  />
                  <path
                    stroke-linecap="round"
                    d="M23.438 26.536L17.52 39.224a6 6 0 0 1-7.974 2.902v0a6 6 0 0 1-2.902-7.973L18.374 9"
                  />
                  <circle
                    cx="12.083"
                    cy="36.688"
                    r="6"
                    fill="#555"
                    transform="rotate(25 12.083 36.688)"
                  />
                </g>
              </mask>
            </defs>
            <path
              fill="currentColor"
              d="M0 0h48v48H0z"
              mask="url(#ipTGoogleAds0)"
            />
          </svg>
        </div>
        <div className="label short">Google Ads</div>
      </a>
      <a href="https://analytics.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22.84 2.998v17.999a2.983 2.983 0 0 1-2.967 2.998 3 3 0 0 1-.368-.02 3.06 3.06 0 0 1-2.61-3.1V3.12A3.06 3.06 0 0 1 19.51.02a2.983 2.983 0 0 1 3.329 2.978zM4.133 18.055a2.973 2.973 0 1 0 0 5.945 2.973 2.973 0 0 0 0-5.945m7.872-9.01h-.05a3.06 3.06 0 0 0-2.892 3.126v7.985c0 2.167.954 3.482 2.35 3.763a2.978 2.978 0 0 0 3.57-2.927v-8.959a2.983 2.983 0 0 0-2.978-2.988"
            />
          </svg>
        </div>
        <div className="label short one">Google A...</div>
        <div className="label full">
          Google
          <br />
          Analytics
        </div>
      </a>
      <a href="https://passwords.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.71 10.33C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4h2v-4h2v-2H11.94zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"
              opacity=".3"
            />
            <path
              fill="currentColor"
              d="M7 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c2.72 0 5.17-1.58 6.32-4H16v4h6v-4h2V9H13.32C12.17 6.58 9.72 5 7 5m15 8h-2v4h-2v-4h-6.06l-.23.67C11.01 15.66 9.11 17 7 17c-2.76 0-5-2.24-5-5s2.24-5 5-5c2.11 0 4.01 1.34 4.71 3.33l.23.67H22zM7 9c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
            />
          </svg>
        </div>
        <div className="label short one">Password ...</div>
        <div className="label full">
          Password
          <br />
          Manager
        </div>
      </a>
      <a href="https://one.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M11 5v13.982a2 2 0 0 0 4 0V5a2 2 0 1 0-4 0" />
              <path d="M6.63 8.407a2.125 2.125 0 0 0-.074 2.944c.77.834 2.051.869 2.862.077l4.95-4.834c.812-.792.846-2.11.076-2.945a1.984 1.984 0 0 0-2.861-.077z" />
            </g>
          </svg>
        </div>
        <div className="label short one">Google O...</div>
        <div className="label full">
          Google
          <br />
          One
        </div>
      </a>
      <a href="https://google.com/travel/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 6h2V4h-2zm1 6q-1.9 0-3.625-.788T5 9.45V8q0-.825.588-1.412T7 6h2V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v3h2q.825 0 1.413.588T19 8v1.45q-1.65.975-3.375 1.763T12 12m-5 9q-.825 0-1.412-.587T5 19v-7.3q1.4.85 2.888 1.45t3.112.8V14q0 .425.288.713T12 15t.713-.288T13 14v-.05q1.625-.2 3.113-.8T19 11.7V19q0 .825-.587 1.413T17 21q0 .425-.288.713T16 22q-.4 0-.562-.363T15 21H9q0 .425-.288.713T8 22q-.4 0-.562-.363T7 21"
            />
          </svg>
        </div>
        <div className="label short">Travel</div>
      </a>
      <a href="https://classroom.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M1.637 1.637C.732 1.637 0 2.369 0 3.273v17.454c0 .904.732 1.636 1.637 1.636h20.726c.905 0 1.637-.732 1.637-1.636V3.273c0-.904-.732-1.636-1.637-1.636zm.545 2.181h19.636v16.364h-2.726v-1.09h-4.91v1.09h-12zM12 8.182a1.636 1.636 0 1 0 0 3.273 1.636 1.636 0 1 0 0-3.273m-4.363 1.91c-.678 0-1.229.55-1.229 1.226a1.228 1.228 0 0 0 2.455 0c0-.677-.549-1.226-1.226-1.226m8.726 0a1.227 1.227 0 1 0 0 2.453 1.227 1.227 0 0 0 0-2.453M12 12.545c-1.179 0-2.413.401-3.148 1.006a4.1 4.1 0 0 0-1.215-.188c-1.314 0-2.729.695-2.729 1.559v.896h14.184v-.896c0-.864-1.415-1.559-2.729-1.559-.41 0-.83.068-1.215.188-.735-.605-1.969-1.006-3.148-1.006"
            />
          </svg>
        </div>
        <div className="label short">Classroom</div>
      </a>
      <a href="https://books.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="41"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18 22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6v7L9.5 7.5 7 9V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"
            />
          </svg>
        </div>
        <div className="label short">Books</div>
      </a>
      <a href="https://blogger.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24M12 3.975H9A5.025 5.025 0 0 0 3.975 9v6A5.025 5.025 0 0 0 9 20.024h6A5.025 5.025 0 0 0 20.024 15v-3.975c0-.6-.45-1.05-1.05-1.05H18a.995.995 0 0 1-.976-.976A5.025 5.025 0 0 0 12 3.973zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975z"
            />
          </svg>
        </div>
        <div className="label short">Blogger</div>
      </a>
      <a href="https://earth.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 12.14c-.91-1.37-1.86-2.36-2.86-2.95-1-.6-1.87-.81-2.64-.64-.73.18-1.36.59-1.86 1.25-.44.59-.64 1.26-.64 2.01V12c0 .78.11 1.58.36 2.39.09.25.14.25.19 0 .12-.62.41-1.08.86-1.36.46-.28 1.06-.27 1.81.02.75.3 1.48.95 2.2 1.9 1.28 1.72 2.78 2.77 4.5 3.14 2.22.32 3.89-.39 5.02-2.09.31-.61.56-1.14.7-1.61.09-.31.05-.34-.14-.09-.47.62-1.1 1.03-1.9 1.2-.8.2-1.71 0-2.74-.5-1.03-.57-1.98-1.5-2.86-2.86m4.97-3.98c-1.56-2.35-3.25-3.66-5.06-3.99-1.44-.22-3 .28-4.69 1.5-.22.16-.32.24-.31.26.02.02.15-.04.4-.16 2.5-1.22 4.91.06 7.22 3.84.5.84 1.02 1.5 1.57 1.97s1.06.75 1.55.84c.48.08.92.08 1.31-.04.39-.13.74-.33 1.04-.61 0-.6-.09-1.27-.31-1.97-.5.12-.95.08-1.34-.12-.39-.18-.85-.71-1.38-1.52M12 2c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12s-1 5.1-2.95 7.05S14.75 22 12 22s-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2"
            />
          </svg>
        </div>
        <div className="label short">Earth</div>
      </a>
      <a href="https://artsandculture.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m5 15H7v-2h10zm-9-3v-3h2v3zm3 0v-3h2v3zm3 0v-3h2v3zm3-4H7V8.5L12 6l5 2.5z"
            />
          </svg>
        </div>
        <div className="label short one">Arts and ...</div>
        <div className="label full">
          Arts and
          <br />
          Culture
        </div>
      </a>
      <a href="https://google.com/save/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 3 8.08 3 9.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 4.52 18 5.08 18 6.2v13.305c0 .486 0 .729-.101.862a.5.5 0 0 1-.37.198c-.167.01-.369-.125-.773-.394L12 17l-4.756 3.17c-.404.27-.606.405-.774.395a.5.5 0 0 1-.369-.198C6 20.234 6 19.991 6 19.505z"
            />
          </svg>
        </div>
        <div className="label short">Saved</div>
      </a>
      <a href="https://chromewebstore.google.com/" className="icon-item">
        <div className="menuicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M0 1.637v19.09c0 .9.736 1.636 1.636 1.636h.131a10.4 10.4 0 0 1-.13-1.636 10.3 10.3 0 0 1 1.667-5.64l4.202 7.276h1.128A3.77 3.77 0 0 1 12 16.958a3.77 3.77 0 0 1 3.366 5.406h1.048a4.7 4.7 0 0 0-1.587-5.406h6.83a10.34 10.34 0 0 1 .577 5.406h.13c.9 0 1.636-.737 1.636-1.637V1.637Zm9.273 2.181h5.454a1.09 1.09 0 1 1 0 2.182H9.273a1.09 1.09 0 1 1 0-2.182M12 10.364a10.36 10.36 0 0 1 9.233 5.652H12a4.71 4.71 0 0 0-4.677 4.149L3.91 14.25A10.34 10.34 0 0 1 12 10.364"
            />
          </svg>
        </div>
        <div className="label short one">Chrome ...</div>
        <div className="label full">
          Chrome
          <br />
          Web Store
        </div>
      </a>
    </div>
  );
};

export default LinkList;
