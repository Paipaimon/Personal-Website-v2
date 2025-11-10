import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  AnimatedText, 
  AnimatedButton, 
  AnimatedCard,
  ParticleBackground,
  FloatingElements
} from '../components/magicui';

// 动画变体
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInFromBottom = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Blog = () => {
  useEffect(() => {
    // 页面加载后自动跳转到外部博客
    const timer = setTimeout(() => {
      window.location.href = 'https://blog.jlands.cn';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = () => {
    window.location.href = 'https://blog.jlands.cn';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center pt-16 relative overflow-hidden">
      <ParticleBackground 
        particleCount={25}
        particleColor="#3b82f6"
        connectionDistance={100}
        speed={0.1}
      />
      <FloatingElements variant="circle" count={12} colors={['#dbeafe', '#bfdbfe']} />
      
      <motion.div 
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* 加载动画 */}
        <motion.div 
          className="mb-8"
          variants={fadeInUp}
        >
          <motion.div 
            className="w-24 h-24 mx-auto mb-6"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="w-full h-full border-4 border-primary-200 border-t-primary-600 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </motion.div>
          <motion.div 
            className="text-6xl mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            📝
          </motion.div>
        </motion.div>

        {/* 主要内容 */}
        <AnimatedCard 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          variant="default"
          delay={0.3}
        >
          <AnimatedText
            text="正在跳转到我的博客"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            variant="typewriter"
            delay={0.5}
          />
          
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            variants={fadeInUp}
            transition={{ delay: 0.8 }}
          >
            您将被重定向到我的技术博客，在那里我分享关于编程、技术趋势和开发经验的文章。
          </motion.p>

          <motion.div 
            className="bg-gray-50 rounded-lg p-6 mb-8"
            variants={slideInFromBottom}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="flex items-center justify-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.svg 
                className="w-6 h-6 text-primary-600 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </motion.svg>
              <span className="font-medium text-gray-700">目标地址:</span>
            </motion.div>
            <motion.a 
              href="https://blog.jlands.cn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-mono text-sm break-all"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              https://blog.jlands.cn
            </motion.a>
          </motion.div>

          {/* 博客特色 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {[
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                bgColor: "bg-blue-100",
                iconColor: "text-blue-600",
                title: "技术分享",
                description: "前端、后端、架构设计"
              },
              {
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                bgColor: "bg-green-100",
                iconColor: "text-green-600",
                title: "学习笔记",
                description: "新技术探索与实践"
              },
              {
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                bgColor: "bg-purple-100",
                iconColor: "text-purple-600",
                title: "经验分享",
                description: "项目实战与思考"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={slideInFromBottom}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.svg 
                    className={`w-6 h-6 ${feature.iconColor}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.1 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </motion.svg>
                </motion.div>
                <motion.h3 
                  className="font-semibold text-gray-900 mb-1"
                  whileHover={{ color: "#1d4ed8" }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 1.2 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* 操作按钮 */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
            transition={{ delay: 1.5 }}
          >
            <AnimatedButton
              onClick={handleRedirect}
              variant="primary"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <motion.svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
              立即访问博客
            </AnimatedButton>
            
            <AnimatedButton
              onClick={() => window.history.back()}
              variant="ghost"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <motion.svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </motion.svg>
              返回上一页
            </AnimatedButton>
          </motion.div>

          {/* 倒计时提示 */}
          <motion.div 
            className="mt-8 p-4 bg-blue-50 rounded-lg"
            variants={fadeInUp}
            transition={{ delay: 1.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.p 
              className="text-sm text-blue-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <motion.svg 
                className="w-4 h-4 inline mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </motion.svg>
              页面将在 3 秒后自动跳转，或者您可以点击上方按钮立即访问
            </motion.p>
          </motion.div>
        </AnimatedCard>

        {/* 底部信息 */}
        <motion.div 
          className="mt-8 text-center"
          variants={fadeInUp}
          transition={{ delay: 2.2 }}
        >
          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            如果页面没有自动跳转，请检查浏览器设置或点击上方按钮手动访问
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blog;