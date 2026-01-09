#!/usr/bin/env node

/**
 * クロスプラットフォーム対応のポート強制終了スクリプト
 * Windows, macOS, Linuxで動作します
 */

const { execSync } = require('child_process');
const os = require('os');

const PORT = process.argv[2] || 3000;

function killPort(port) {
  const platform = os.platform();

  try {
    if (platform === 'win32') {
      // Windows
      try {
        // netstatでポートを使用しているプロセスを検索
        const output = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8' });
        const lines = output.trim().split('\n');

        const pids = new Set();
        lines.forEach(line => {
          const parts = line.trim().split(/\s+/);
          const pid = parts[parts.length - 1];
          if (pid && pid !== '0') {
            pids.add(pid);
          }
        });

        // 各PIDを終了
        pids.forEach(pid => {
          try {
            execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
            console.log(`ポート${port}のプロセス(PID: ${pid})を終了しました`);
          } catch (e) {
            // プロセスが既に終了している場合は無視
          }
        });
      } catch (e) {
        // ポートが使用されていない場合
        console.log(`ポート${port}は使用されていません`);
      }
    } else {
      // macOS / Linux
      try {
        const output = execSync(`lsof -ti:${port}`, { encoding: 'utf8' });
        const pids = output.trim().split('\n').filter(Boolean);

        pids.forEach(pid => {
          try {
            execSync(`kill -9 ${pid}`, { stdio: 'ignore' });
            console.log(`ポート${port}のプロセス(PID: ${pid})を終了しました`);
          } catch (e) {
            // プロセスが既に終了している場合は無視
          }
        });
      } catch (e) {
        // ポートが使用されていない場合
        console.log(`ポート${port}は使用されていません`);
      }
    }
  } catch (error) {
    console.error(`エラーが発生しました: ${error.message}`);
  }
}

// スクリプト実行
killPort(PORT);