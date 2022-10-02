import React, { FC, useEffect } from "react";
import classnames from "classnames";

const DAISYUI_THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export interface SelectThemeDropdownProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const SelectThemeDropdown: FC<SelectThemeDropdownProps> = ({
  theme,
  setTheme,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);
  return (
    <div title="Change Theme" className="dropdown dropdown-end">
      <div tabIndex={0} className="btn gap-1 normal-case btn-ghost">
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>{" "}
        <span className="hidden md:inline">Theme</span>{" "}
        <svg
          width="12px"
          height="12px"
          className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </div>{" "}
      <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
        <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
          {DAISYUI_THEMES.map((t) => {
            return (
              <div
                className={classnames("overflow-hidden rounded-lg", {
                  "outline-base-content outline-2 outline-offset-2 outline":
                    t === theme,
                })}
                data-set-theme={t}
                data-act-class="outline"
                onClick={() => setTheme(t)}
              >
                <div
                  data-theme={t}
                  className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                >
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">{t}</div>{" "}
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded" />{" "}
                        <div className="bg-secondary w-2 rounded" />{" "}
                        <div className="bg-accent w-2 rounded" />{" "}
                        <div className="bg-neutral w-2 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
