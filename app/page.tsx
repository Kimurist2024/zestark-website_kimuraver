"use client";
import React from "react";
import StarryBackground from "../components/starry-background";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">

      <StarryBackground />

      {/* ロゴ */}
      <div className="logo-area">
        <Image src="/zestark-logo.svg" alt="Zestark Logo" width={180} height={60} />
      </div>

      {/* ナビ & バナー　*/}
      <div className="body-contents">

        {/* バナー */}
        <div className="main-contents left">
          <div className="home-banners">
            <div className="news-contents top">未来を照らす、事業の星。</div>
            <div className="news-contents bottom">Zestark Inc.</div>
          </div>
        </div>

        {/* ナビ */}
        <div className="main-contents right">
          <nav className="navi-frame">
            {["Home", "Services", "About", "Blog", "Contact"].map((label) => (
              <button
                key={label}
                className="nav-contents text-white"
                onClick={() =>
                  document
                    .getElementById("main-iframe")
                    ?.setAttribute("src", `/iframe/${label.toLowerCase()}.html`)
                }
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* iframe（手前） */}
      <div id="iframe-container">
        <iframe
          id="main-iframe"
          src="/iframe/home.html"
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>

      {/* Footer */}
      <footer>
        <div className="footer">
          © 2025 Zestark Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
