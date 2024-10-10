"use client"
import React, { useState } from "react";

export default function Chatapp() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="chat">
        <div className="chat-app">
          <button
            type="button"
            data-spec="toggle-button"
            aria-label="หน้าต่างแชท"
            aria-expanded={isChatOpen}
            className="chat-toggle chat-toggle--#fa4616 chat-toggle--icon-button chat-toggle--text-button"
            style={{
              backgroundColor: isChatOpen ? "red" : "rgb(250, 70, 22)",
              width: isChatOpen ? "100px" : "auto", // Adjust width for circular button
              height: isChatOpen ? "100px" : "auto", // Adjust height for circular button
              borderRadius: isChatOpen ? "50%" : "16px", // Make it a circle when open
              padding: isChatOpen ? "0" : "0 12px 0 3px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onClick={toggleChat}
          >
            {isChatOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M18 6.41L16.59 5 12 9.59 7.41 5 6 6.41 10.59 11 6 15.59 7.41 17 12 12.41 16.59 17 18 15.59 13.41 11z" />
              </svg>
            ) : (
              <>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-spec="button-icon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 9.78374C4 5.84433 4.81543 5 8.62 5H11.38C15.1846 5 16 5.84433 16 9.78374C16 13.7232 15.1846 14.9008 11.38 14.9008H10.8303C10.8025 14.9346 10.7703 14.9666 10.7336 14.9962L8.54286 16.86C8.12929 17.1935 7.5137 16.898 7.5137 16.3667V14.87C4.65254 14.6884 4 13.3078 4 9.78374ZM10 10.6667C10.3682 10.6667 10.6667 10.3682 10.6667 10C10.6667 9.63181 10.3682 9.33333 10 9.33333C9.63181 9.33333 9.33333 9.63181 9.33333 10C9.33333 10.3682 9.63181 10.6667 10 10.6667ZM13.3333 10C13.3333 10.3682 13.0349 10.6667 12.6667 10.6667C12.2985 10.6667 12 10.3682 12 10C12 9.63181 12.2985 9.33333 12.6667 9.33333C13.0349 9.33333 13.3333 9.63181 13.3333 10ZM7.33333 10.6667C7.70152 10.6667 8 10.3682 8 10C8 9.63181 7.70152 9.33333 7.33333 9.33333C6.96514 9.33333 6.66667 9.63181 6.66667 10C6.66667 10.3682 6.96514 10.6667 7.33333 10.6667Z"
                    fill="white"
                  />
                </svg>
                <span data-spec="button-text" className="chat-title">
                  แชท
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-content">
            <div className="chat-text">
              <p>แชทกับเรา</p>
              <span>
              👋 สวัสดี โปรดส่งข้อความหาเราหากคุณมีคำถามใดๆ เรา<br/>ยินดีให้ความช่วยเหลือ
              </span>
              <button>กลับไปยังแชท</button>
            </div>
           <div className="chat-answer">
           <p>คำตอบแบบด่วน</p>
           <button>ติดตามคำสั่งซื้อนี้</button>
           </div>
          </div>
        </div>
      )}
    </>
  );
}
