"use client"
import React, { useState } from "react";

export default function Language() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lang-btn">
            <aside
            aria-label={`Language selected: ${isOpen ? 'ภาษาไทย' : 'English'}`}
            className={`weglot_switcher country-selector default ${isOpen ? "open" : ""}`}
            onClick={toggleDropdown}
            >
          <div
            role="combobox"
            aria-expanded={isOpen}
            aria-controls="weglot-listbox"
            className="wg-li th wgcurrent"
            
          >
            <a href="#" id="weglot-language-th">ภาษาไทย</a>
            <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
          </div>

          {isOpen && (
            <ul role="listbox" id="weglot-listbox" className="dropup">
              <li className="wg-li en">
                <a href="https://en.jblthailand.com/" id="weglot-language-en">English</a>
              </li>
            </ul>
          )}
        </aside>
      </div>
    </>
  );
}
