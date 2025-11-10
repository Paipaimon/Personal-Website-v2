import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 联系信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 1602294513@qq.com</p>
              <p>📱 QQ: 1602294513</p>
              <p>📍 中国</p>
            </div>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">社交媒体</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/1602294513" className="text-gray-300 hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://space.bilibili.com/33230715" className="text-gray-300 hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Bilibili</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .356-.124.657-.373.906l-1.174 1.12zM6.4 15.558a2.315 2.315 0 0 0 2.309 2.31 2.315 2.315 0 0 0 2.31-2.31 2.315 2.315 0 0 0-2.31-2.31 2.315 2.315 0 0 0-2.31 2.31zm6.64 0a2.315 2.315 0 0 0 2.309 2.31 2.315 2.315 0 0 0 2.31-2.31 2.315 2.315 0 0 0-2.31-2.31 2.315 2.315 0 0 0-2.31 2.31z"/>
                </svg>
              </a>
              <a href="https://music.163.com/#/user/home?id=482756030" className="text-gray-300 hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">网易云音乐</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </a>
              <a href="https://qm.qq.com/q/7s6vz9hfCE" className="text-gray-300 hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">QQ</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5.53 4.5 10.02 10 10.02s10-4.49 10-10.02c0-5.53-4.5-10.02-10-10.02zm4.64 6.8c-.15 1.58-.08 2.69-.08 2.69s-.06-.13-.14-.27c-.09-.15-.21-.32-.36-.5-.14-.18-.32-.37-.52-.56-.21-.2-.44-.39-.69-.56-.25-.17-.52-.32-.8-.44-.27-.12-.56-.21-.85-.26-.29-.05-.58-.06-.87-.02-.29.04-.57.12-.84.24-.27.12-.52.28-.76.47-.23.19-.45.41-.64.65-.19.24-.36.5-.49.77-.14.27-.24.55-.3.84-.06.29-.08.58-.06.87.02.29.08.57.18.84.1.27.24.52.41.75.17.23.37.44.59.62.22.18.46.33.71.45.25.12.51.21.78.26.27.05.54.06.81.02.27-.04.53-.12.78-.24.25-.12.48-.28.69-.47.21-.19.4-.41.56-.65.16-.24.29-.5.38-.77.09-.27.14-.55.15-.83.01-.28-.02-.56-.08-.83-.06-.27-.16-.53-.29-.77-.13-.24-.29-.46-.48-.66-.19-.2-.4-.37-.63-.51-.23-.14-.48-.25-.74-.32-.26-.07-.53-.1-.8-.08-.27.02-.53.08-.78.18-.25.1-.48.24-.69.41-.21.17-.4.37-.56.59-.16.22-.29.46-.38.71-.09.25-.14.51-.15.77-.01.26.02.52.08.77.06.25.16.49.29.71.13.22.29.42.48.59.19.17.4.31.63.42.23.11.47.18.72.22.25.04.5.04.75 0 .25-.04.49-.12.72-.23.23-.11.44-.26.63-.44.19-.18.35-.39.48-.62.13-.23.23-.48.29-.74.06-.26.08-.53.06-.79-.02-.26-.08-.51-.18-.75-.1-.24-.24-.46-.41-.66-.17-.2-.37-.37-.59-.51-.22-.14-.46-.25-.71-.32-.25-.07-.51-.1-.77-.08-.26.02-.51.08-.75.18-.24.1-.46.24-.66.41-.2.17-.37.37-.51.59-.14.22-.25.46-.32.71-.07.25-.1.51-.08.77.02.26.08.51.18.75.1.24.24.46.41.66.17.2.37.37.59.51.22.14.46.25.71.32.25.07.51.1.77.08.26-.02.51-.08.75-.18.24-.1.46-.24.66-.41.2-.17.37-.37.51-.59.14-.22.25-.46.32-.71.07-.25.1-.51.08-.77-.02-.26-.08-.51-.18-.75z"/>
                </svg>
              </a>
              <a href="mailto:1602294513@qq.com" className="text-gray-300 hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">邮箱</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <div className="space-y-2 text-gray-300">
              <a href="/" className="block hover:text-white transition-colors duration-200">首页</a>
              <a href="/about" className="block hover:text-white transition-colors duration-200">关于我</a>
              <a href="/portfolio" className="block hover:text-white transition-colors duration-200">项目作品</a>
              <a href="https://blog.jlands.cn" className="block hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">博客</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 mb-2">
            Copyright © 2028 Jlands. All rights reserved.
          </p>
          <a 
            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm" 
            href="http://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            蜀ICP备2022028857号-2
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;