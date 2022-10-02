import React from "react";

export interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 4283 800"
    >
      <g clipPath="url(#clip0_401_2)">
        <path fill="none" d="M0 0H4283V800H0z"></path>
        <path
          d="M872.511 661V137.364H1079.1c39.55 0 73.3 7.073 101.25 21.221 28.13 13.977 49.52 33.835 64.18 59.574 14.83 25.568 22.24 55.653 22.24 90.256 0 34.772-7.5 64.687-22.5 89.744-15 24.886-36.73 43.977-65.2 57.273-28.29 13.295-62.55 19.943-102.78 19.943H937.966v-88.977h120.424c21.14 0 38.7-2.898 52.67-8.693 13.98-5.796 24.38-14.489 31.2-26.08 6.98-11.591 10.48-25.994 10.48-43.21 0-17.387-3.5-32.046-10.48-43.977-6.82-11.932-17.31-20.966-31.45-27.103-13.98-6.307-31.62-9.46-52.93-9.46h-74.658V661H872.511zM1155.3 422.705L1285.44 661h-122.22l-127.33-238.295h119.41zm360.32 245.965c-40.4 0-75.18-8.181-104.32-24.545-28.98-16.534-51.31-39.886-66.99-70.057-15.68-30.341-23.52-66.221-23.52-107.642 0-40.398 7.84-75.852 23.52-106.364 15.68-30.511 37.75-54.289 66.22-71.335 28.64-17.045 62.22-25.568 100.74-25.568 25.91 0 50.03 4.176 72.36 12.529 22.5 8.181 42.1 20.539 58.8 37.073 16.88 16.534 30 37.33 39.38 62.387 9.37 24.886 14.06 54.034 14.06 87.443v29.915h-331.62v-67.5h229.09c0-15.682-3.41-29.574-10.22-41.676-6.82-12.103-16.28-21.563-28.39-28.381-11.93-6.989-25.82-10.483-41.67-10.483-16.54 0-31.19 3.835-43.98 11.506-12.61 7.5-22.5 17.642-29.66 30.426-7.16 12.613-10.82 26.676-10.99 42.187v64.176c0 19.432 3.58 36.222 10.74 50.37 7.33 14.147 17.64 25.057 30.93 32.727 13.3 7.67 29.07 11.506 47.3 11.506 12.11 0 23.19-1.705 33.24-5.114 10.06-3.409 18.67-8.523 25.83-15.341 7.16-6.818 12.61-15.17 16.36-25.057l100.74 6.648c-5.11 24.205-15.6 45.341-31.45 63.409-15.68 17.898-35.97 31.875-60.85 41.932-24.72 9.886-53.27 14.829-85.65 14.829zm363.32-.255c-25.06 0-47.39-4.347-66.99-13.04-19.6-8.864-35.11-21.903-46.53-39.119-11.25-17.387-16.88-39.034-16.88-64.944 0-21.818 4.01-40.142 12.02-54.971 8.01-14.83 18.92-26.761 32.73-35.796 13.8-9.034 29.48-15.852 47.04-20.454 17.73-4.602 36.31-7.841 55.74-9.716 22.84-2.386 41.25-4.602 55.23-6.648 13.97-2.216 24.12-5.454 30.42-9.716 6.31-4.261 9.46-10.568 9.46-18.92v-1.534c0-16.193-5.11-28.722-15.34-37.585-10.05-8.864-24.37-13.296-42.95-13.296-19.6 0-35.2 4.347-46.79 13.04-11.59 8.523-19.26 19.261-23.01 32.216l-100.74-8.182c5.11-23.864 15.17-44.489 30.17-61.875 15-17.557 34.35-31.023 58.04-40.398 23.86-9.545 51.48-14.318 82.84-14.318 21.82 0 42.7 2.557 62.64 7.671 20.11 5.113 37.93 13.039 53.44 23.778 15.68 10.739 28.04 24.545 37.07 41.42 9.04 16.705 13.55 36.733 13.55 60.086V661h-103.29v-54.46h-3.07c-6.31 12.272-14.74 23.096-25.31 32.471-10.57 9.205-23.27 16.449-38.1 21.733-14.83 5.114-31.96 7.671-51.39 7.671zm31.19-75.171c16.02 0 30.17-3.153 42.45-9.46 12.27-6.477 21.9-15.17 28.89-26.079 6.99-10.91 10.48-23.268 10.48-37.074v-41.676c-3.41 2.215-8.1 4.261-14.06 6.136-5.8 1.704-12.36 3.324-19.69 4.858a991.771 991.771 0 01-21.99 3.835c-7.33 1.023-13.98 1.96-19.94 2.813-12.79 1.875-23.95 4.858-33.5 8.948-9.54 4.091-16.96 9.631-22.24 16.62-5.28 6.818-7.93 15.341-7.93 25.568 0 14.829 5.37 26.165 16.11 34.006 10.91 7.67 24.72 11.505 41.42 11.505zm451.92 75.426c-40.23 0-74.83-8.522-103.81-25.568-28.8-17.216-50.96-41.079-66.47-71.591-15.35-30.511-23.02-65.625-23.02-105.341 0-40.227 7.76-75.511 23.27-105.852 15.68-30.511 37.93-54.29 66.73-71.335 28.81-17.216 63.07-25.824 102.79-25.824 34.26 0 64.26 6.222 90 18.665 25.74 12.443 46.11 29.915 61.11 52.415s23.26 48.92 24.8 79.261h-102.79c-2.89-19.602-10.56-35.369-23.01-47.301-12.27-12.102-28.38-18.154-48.32-18.154-16.88 0-31.62 4.603-44.23 13.807-12.45 9.034-22.16 22.245-29.15 39.631-6.99 17.386-10.49 38.437-10.49 63.153 0 25.057 3.41 46.364 10.23 63.921 6.99 17.557 16.79 30.937 29.41 40.142 12.61 9.204 27.35 13.807 44.23 13.807 12.44 0 23.61-2.557 33.49-7.671 10.06-5.113 18.33-12.528 24.8-22.244 6.65-9.886 11-21.733 13.04-35.54h102.79c-1.71 30-9.89 56.421-24.55 79.261-14.49 22.671-34.52 40.398-60.08 53.182-25.57 12.784-55.83 19.176-90.77 19.176zm454.03-400.397v81.818h-236.51v-81.818h236.51zm-182.82-94.091h108.92v366.136c0 10.057 1.54 17.898 4.61 23.523 3.07 5.454 7.33 9.29 12.78 11.506 5.63 2.215 12.1 3.323 19.43 3.323 5.12 0 10.23-.426 15.34-1.278 5.12-1.023 9.04-1.79 11.77-2.301l17.13 81.051c-5.46 1.705-13.13 3.665-23.02 5.881-9.88 2.386-21.9 3.835-36.05 4.346-26.25 1.023-49.26-2.471-69.03-10.483-19.6-8.011-34.86-20.454-45.77-37.329-10.91-16.875-16.28-38.182-16.11-63.921V174.182zm211.26 54.46v-91.278h430.06v91.278h-160.31V661h-109.44V228.642h-160.31zm620.86 440.028c-40.4 0-75.17-8.181-104.32-24.545-28.97-16.534-51.3-39.886-66.99-70.057-15.68-30.341-23.52-66.221-23.52-107.642 0-40.398 7.84-75.852 23.52-106.364 15.69-30.511 37.76-54.289 66.23-71.335 28.63-17.045 62.21-25.568 100.73-25.568 25.91 0 50.03 4.176 72.36 12.529 22.5 8.181 42.1 20.539 58.81 37.073 16.87 16.534 30 37.33 39.37 62.387 9.38 24.886 14.07 54.034 14.07 87.443v29.915h-331.62v-67.5h229.09c0-15.682-3.41-29.574-10.23-41.676-6.82-12.103-16.28-21.563-28.38-28.381-11.93-6.989-25.82-10.483-41.68-10.483-16.53 0-31.19 3.835-43.97 11.506-12.62 7.5-22.5 17.642-29.66 30.426-7.16 12.613-10.83 26.676-11 42.187v64.176c0 19.432 3.58 36.222 10.74 50.37 7.33 14.147 17.64 25.057 30.94 32.727 13.29 7.67 29.06 11.506 47.3 11.506 12.1 0 23.18-1.705 33.24-5.114 10.06-3.409 18.66-8.523 25.82-15.341s12.62-15.17 16.37-25.057l100.74 6.648c-5.12 24.205-15.6 45.341-31.45 63.409-15.69 17.898-35.97 31.875-60.86 41.932-24.71 9.886-53.26 14.829-85.65 14.829zm249.29-7.67v-64.943l192.27-238.04v-2.812h-185.62v-86.932h316.79v70.824L3857.6 571.256v2.812h187.16V661h-330.09z"
        ></path>
        <circle cx="399" cy="398" r="72"></circle>
        <path
          fill="#fff"
          d="M406.881 435c-5.247 0-9.076-1.255-11.489-3.764a11.58 11.58 0 01-3.607-8.111 5.332 5.332 0 01.632-2.681 4.648 4.648 0 011.723-1.712 6.037 6.037 0 012.682-.627c.932 0 1.85.214 2.683.627a4.58 4.58 0 011.714 1.712c.454.82.68 1.745.654 2.681a5.095 5.095 0 01-.919 3.137 4.282 4.282 0 01-2.184 1.586 5.968 5.968 0 003.447 2.133c1.527.441 3.109.667 4.699.673a10.53 10.53 0 005.917-1.757 10.265 10.265 0 003.86-5.189 22.382 22.382 0 001.264-7.768 21.158 21.158 0 00-1.379-8.076 9.98 9.98 0 00-3.986-5.018 10.661 10.661 0 00-5.744-1.631 10.982 10.982 0 00-4.975 1.676l-3.689 1.837v-1.837l16.579-22.08h-22.978v22.913a8.152 8.152 0 001.263 4.688c.43.61 1.011 1.1 1.688 1.422a4.387 4.387 0 002.173.414 6.48 6.48 0 003.814-1.334 13.74 13.74 0 003.194-3.262c.079-.221.224-.412.416-.548a.848.848 0 01.553-.205c.4.036.777.196 1.081.456.384.426.593.98.585 1.551a9.036 9.036 0 01-.206 1.141 11.061 11.061 0 01-3.942 4.857 9.823 9.823 0 01-5.528 1.667c-4.975 0-8.421-.973-10.339-2.92a10.906 10.906 0 01-2.85-7.984v-22.856H372v-4.257h11.742v-9.707l-2.688-2.67V362h7.8l2.931 1.506v13.048l30.354-.091 3.022 3.011-18.613 18.568a12.561 12.561 0 013.516-.844c2.388.103 4.719.764 6.803 1.928a13.931 13.931 0 015.859 5.191 18.238 18.238 0 012.643 6.262c.395 1.761.607 3.558.632 5.362a22.294 22.294 0 01-2.298 9.934 14.615 14.615 0 01-6.894 6.844 22.436 22.436 0 01-9.928 2.281z"
        ></path>
        <path
          d="M774 408.576c0-49.591-62.054-96.588-157.193-125.732 21.955-97.045 12.198-174.255-30.798-198.974-9.91-5.798-21.498-8.545-34.153-8.545v34.027c7.014 0 12.655 1.374 17.382 3.968 20.735 11.901 29.731 57.22 22.717 115.508-1.677 14.343-4.421 29.449-7.776 44.861-29.883-7.324-62.511-12.97-96.816-16.632-20.583-28.229-41.928-53.863-63.426-76.294 49.704-46.234 96.359-71.563 128.072-71.563V75.173c-41.928 0-96.816 29.907-152.314 81.787-55.498-51.575-110.386-81.177-152.314-81.177v34.027c31.561 0 78.368 25.177 128.072 71.106-21.345 22.43-42.691 47.912-62.969 76.141-34.457 3.662-67.085 9.308-96.968 16.784a460.649 460.649 0 01-7.929-44.25c-7.165-58.288 1.678-103.607 22.261-115.661 4.574-2.747 10.52-3.967 17.533-3.967V75.936c-12.807 0-24.394 2.746-34.457 8.545-42.843 24.719-52.449 101.775-30.341 198.516C87.749 312.293 26 359.138 26 408.576c0 49.591 62.054 96.588 157.193 125.732-21.955 97.045-12.197 174.254 30.798 198.973 9.91 5.799 21.498 8.545 34.305 8.545 41.928 0 96.816-29.907 152.314-81.786 55.498 51.574 110.386 81.176 152.314 81.176 12.807 0 24.394-2.747 34.457-8.545 42.843-24.719 52.449-101.776 30.341-198.516C712.251 505.011 774 458.014 774 408.576zM575.489 306.8c-5.641 19.684-12.655 39.978-20.583 60.272-6.251-12.207-12.807-24.414-19.973-36.621-7.014-12.207-14.484-24.109-21.955-35.705 21.65 3.204 42.538 7.171 62.511 12.054zm-69.83 162.506c-11.892 20.599-24.089 40.13-36.744 58.288-22.718 1.984-45.74 3.052-68.915 3.052-23.022 0-46.045-1.068-68.61-2.9-12.655-18.157-25.004-37.536-36.897-57.983-11.587-19.989-22.107-40.283-31.713-60.729 9.453-20.447 20.126-40.894 31.561-60.883 11.892-20.599 24.09-40.13 36.744-58.288 22.718-1.984 45.74-3.052 68.915-3.052 23.022 0 46.045 1.068 68.61 2.899 12.655 18.158 25.004 37.537 36.897 57.984 11.587 19.989 22.107 40.283 31.713 60.729-9.606 20.447-20.126 40.894-31.561 60.883zm49.247-19.837a654.187 654.187 0 0121.04 60.73c-19.973 4.883-41.013 9.003-62.816 12.207 7.471-11.749 14.942-23.804 21.955-36.163 7.014-12.207 13.57-24.567 19.821-36.774zM400.305 612.28c-14.179-14.649-28.359-30.975-42.386-48.828 13.722.61 27.749 1.068 41.929 1.068 14.331 0 28.511-.305 42.385-1.068a595.5 595.5 0 01-41.928 48.828zM286.87 522.406c-21.65-3.204-42.538-7.172-62.511-12.054 5.641-19.684 12.654-39.978 20.583-60.272 6.251 12.207 12.807 24.414 19.973 36.621a1010.932 1010.932 0 0021.955 35.705zm112.673-317.534c14.179 14.648 28.358 30.975 42.385 48.828-13.722-.61-27.749-1.068-41.928-1.068-14.332 0-28.511.305-42.386 1.068a595.339 595.339 0 0141.929-48.828zm-112.825 89.874c-7.471 11.749-14.942 23.803-21.956 36.163-7.013 12.207-13.569 24.414-19.82 36.621a654.392 654.392 0 01-21.041-60.73 739.87 739.87 0 0162.817-12.054zM148.735 485.785c-53.973-23.041-88.888-53.253-88.888-77.209 0-23.956 34.915-54.321 88.888-77.209 13.113-5.646 27.444-10.681 42.234-15.412 8.69 29.908 20.125 61.035 34.305 92.926-14.027 31.738-25.31 62.713-33.848 92.468-15.094-4.73-29.426-9.918-42.691-15.564zm82.027 218.047c-20.735-11.902-29.731-57.22-22.717-115.508 1.677-14.344 4.421-29.45 7.776-44.861 29.883 7.324 62.511 12.97 96.816 16.632 20.583 28.229 41.928 53.863 63.426 76.294-49.704 46.233-96.359 71.563-128.072 71.563-6.861-.153-12.655-1.526-17.229-4.12zm361.651-116.271c7.166 58.288-1.678 103.606-22.261 115.661-4.574 2.746-10.52 3.967-17.533 3.967-31.561 0-78.368-25.177-128.072-71.106 21.345-22.43 42.691-47.912 62.969-76.141 34.457-3.662 67.085-9.307 96.968-16.784 3.507 15.411 6.251 30.212 7.929 44.403zm58.699-101.776c-13.112 5.646-27.444 10.681-42.233 15.411-8.691-29.907-20.126-61.035-34.305-92.925 14.027-31.738 25.309-62.714 33.848-92.468 15.094 4.73 29.426 9.918 42.843 15.564 53.973 23.04 88.887 53.253 88.887 77.209-.152 23.956-35.067 54.321-89.04 77.209z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_401_2">
          <path d="M0 0H4283V800H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Logo;