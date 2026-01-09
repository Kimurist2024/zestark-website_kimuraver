import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // ローカルネットワークのデバイスからの開発中のクロスオリジンリクエストを許可
  // ポート3000で固定
  allowedDevOrigins: [
    '192.168.3.3:3000',
    'localhost:3000',
    '127.0.0.1:3000',
    '192.168.3.*:3000',  // 192.168.3.x のすべてのIPアドレスからポート3000を許可
  ],
};

export default nextConfig;
