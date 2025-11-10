import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ElegantLinesCanvas from '../components/ElegantLinesCanvas';
import { 
  AnimatedButton, 
  AnimatedCard, 
  AnimatedText, 
  ParticleBackground, 
  FloatingElements,
  fadeInUp,
  staggerContainer,
  slideInFromBottom
} from '../components/magicui';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ABC 交互应用',
      description: '这是一个专门用于查询英文缩写和网络用语含义的Web应用工具，采用现代化的界面设计和交互体验。',
      image: '/images/abc-app.svg',
      category: 'tool',
      technologies: ['Vue.js', 'JavaScript', 'CSS3', 'API'],
      github: 'https://github.com/1602294513/Personal-Portfolio',
      demo: 'https://items.jlands.cn/ABC',
      featured: true,
      icon: 'A'
    },
    {
      id: 2,
      title: 'ClickHere 游戏',
      description: '一个有趣的点击游戏，包含音效和动画效果，测试你的反应速度和准确性。',
      image: '/images/clickhere-game.svg',
      category: 'game',
      technologies: ['HTML5', 'CSS3', 'Audio'],
      github: 'https://github.com/1602294513/Personal-Portfolio',
      demo: 'https://items.jlands.cn/ClickHere',
      featured: true,
      icon: '🎮'
    },
    {
      id: 3,
      title: 'PinkBang 特效',
      description: '炫酷的视觉特效展示，使用纯CSS3实现的动画效果和粒子系统。',
      image: '/images/pinkbang-effect.svg',
      category: 'animation',
      technologies: ['CSS3', 'Animation', 'Effects'],
      github: 'https://github.com/1602294513/Personal-Portfolio',
      demo: 'https://items.jlands.cn/PinkBang',
      featured: false,
      icon: '💥'
    },
    {
      id: 4,
      title: '计数器应用',
      description: '是一个基于 Web 的数字小球判断游戏，玩家需要快速准确地判断屏幕上显示的小球数量。',
      image: '/images/counter-app.svg',
      category: 'fullstack',
      technologies: ['Node.js', 'Express', 'JavaScript', 'MongoDB'],
      github: 'https://github.com/1602294513/Personal-Portfolio',
      demo: 'https://items.jlands.cn/counter',
      featured: true,
      icon: '📊'
    },
    {
      id: 5,
      title: 'CPS 测试器',
      description: '点击速度测试工具，精确测量每秒点击次数，提供详细的统计数据。',
      image: '/images/cps-tester.svg',
      category: 'tool',
      technologies: ['JavaScript', 'Performance', 'Testing'],
      github: 'https://github.com/1602294513/Personal-Portfolio',
      demo: 'https://items.jlands.cn/cps',
      featured: false,
      icon: '⚡'
    },
    {
      id: 6,
      title: '打字练习',
      description: '在线打字练习工具，帮助提高打字速度和准确性，支持多种练习模式。',
      image: '/images/typing-practice.svg',
      category: 'education',
      technologies: ['JavaScript', 'Education', 'UI/UX'],
      github: 'https://github.com/1602294513/Personal-Portfolio',
      demo: 'https://items.jlands.cn/typing',
      featured: false,
      icon: '⌨️'
    },
    {
      id: 7,
      title: '错误选择',
      description: '交互式选择游戏，通过有趣的方式展示不同选择的后果。',
      image: '/images/error-choice.svg',
      category: 'interactive',
      technologies: ['HTML5', 'JavaScript', 'Interactive'],
      github: 'https://github.com/1602294513/Personal-Portfolio',
      demo: 'https://items.jlands.cn/error-choice',
      featured: false,
      icon: '❓'
    },
    {
      id: 8,
      title: '收藏夹样式',
      description: '美化浏览器收藏夹的样式工具，提供现代化的书签管理界面。',
      image: '/images/favorites-style.svg',
      category: 'tool',
      technologies: ['CSS3', 'Bookmarks', 'Styling'],
      github: 'https://github.com/1602294513/Personal-Portfolio',
      demo: 'https://items.jlands.cn/favorites-style',
      featured: false,
      icon: '⭐'
    },
    {
      id: 9,
      title: 'OSS 管理器',
      description: '对象存储服务管理工具，包含文件上传、管理和Node.js后端支持。',
      image: '/images/oss-manager.svg',
      category: 'utility',
      technologies: ['Node.js', 'File Upload', 'Storage'],
      github: 'https://github.com/1602294513/Personal-Portfolio',
      demo: 'https://items.jlands.cn/oss',
      featured: false,
      icon: '☁️'
    }
  ];

  const filters = [
    { key: 'all', label: '全部项目' },
    { key: 'featured', label: '精选项目' },
    { key: 'tool', label: '工具应用' },
    { key: 'game', label: '游戏娱乐' },
    { key: 'fullstack', label: '全栈项目' },
    { key: 'animation', label: '动画特效' },
    { key: 'education', label: '教育工具' },
    { key: 'interactive', label: '交互应用' },
    { key: 'utility', label: '实用工具' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden min-h-screen flex items-center">
        <ElegantLinesCanvas />
        <ParticleBackground 
          particleCount={30}
          particleColor="#3b82f6"
          connectionDistance={120}
          speed={0.3}
        />
        <FloatingElements 
          count={8}
          variant="hexagons"
          colors={['#3b82f6', '#8b5cf6', '#ec4899', '#10b981']}
        />
        <motion.div 
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <AnimatedText
              text="项目作品集"
              className="text-4xl md:text-5xl font-bold mb-6"
              variant="gradient"
              animation="letters"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <AnimatedText
              text="这里展示了我在不同技术领域的项目作品，从前端界面到后端服务，从Web应用到移动应用，每个项目都体现了我对技术的热情和对用户体验的追求。"
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              animation="typewriter"
              speed={30}
              delay={1}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 过滤器 */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <FloatingElements 
          count={5}
          variant="circles"
          colors={['#e5e7eb', '#f3f4f6']}
        />
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
          >
            {filters.map((filter, index) => (
              <motion.div
                key={filter.key}
                variants={slideInFromBottom}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatedButton
                  onClick={() => setActiveFilter(filter.key)}
                  variant={activeFilter === filter.key ? "primary" : "ghost"}
                  size="md"
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === filter.key
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {filter.label}
                </AnimatedButton>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 项目网格 */}
      <section className="py-20 relative overflow-hidden">
        <ParticleBackground 
          particleCount={20}
          particleColor="#f3f4f6"
          connectionDistance={100}
          speed={0.15}
        />
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {filteredProjects.map((project, index) => (
              <AnimatedCard
                key={project.id}
                className="bg-white rounded-lg shadow-lg p-6 group"
                variant="default"
                delay={index * 0.1}
              >
                {/* 项目图片 */}
                <motion.div 
                  className="relative overflow-hidden rounded-lg mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {project.featured && (
                    <motion.div 
                      className="absolute top-4 left-4"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                    >
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                        ⭐ 精选
                      </span>
                    </motion.div>
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                  >
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors duration-200"
                        whileHover={{ scale: 1.1, rotate: -360 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* 项目信息 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <AnimatedText
                    text={project.title}
                    className="text-xl font-semibold text-gray-900 mb-3"
                    variant="letters"
                    delay={0.3}
                  />
                  <motion.p 
                    className="text-gray-600 mb-4 line-clamp-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* 技术标签 */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        variants={slideInFromBottom}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "#dbeafe",
                          color: "#1d4ed8"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  {/* 链接 */}
                  <motion.div 
                    className="flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.svg 
                        className="w-4 h-4 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </motion.svg>
                      代码
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.svg 
                        className="w-4 h-4 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: -360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </motion.svg>
                      演示
                    </motion.a>
                  </motion.div>
                </motion.div>
              </AnimatedCard>
            ))}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">暂无相关项目</h3>
              <p className="text-gray-500">请尝试其他分类或查看全部项目</p>
            </div>
          )}
        </motion.div>
      </motion.div>
      </section>

      {/* 技术统计 */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <FloatingElements variant="circle" count={15} colors={['#f3f4f6', '#e5e7eb']} />
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <AnimatedText
              text="技术统计"
              className="section-title"
              variant="gradient"
              delay={0.2}
            />
            <motion.p 
              className="text-lg text-gray-600"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              这些项目中使用的主要技术和工具
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
            variants={staggerContainer}
          >
            {[
              { name: 'JavaScript', count: 7, color: 'bg-yellow-500' },
              { name: 'Vue.js', count: 1, color: 'bg-green-500' },
              { name: 'Node.js', count: 2, color: 'bg-green-600' },
              { name: 'CSS3', count: 4, color: 'bg-blue-500' },
              { name: 'HTML5', count: 3, color: 'bg-orange-500' },
              { name: 'MongoDB', count: 1, color: 'bg-green-700' }
            ].map((tech, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={slideInFromBottom}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span 
                    className="text-white font-bold text-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 300 }}
                  >
                    {tech.count}
                  </motion.span>
                </motion.div>
                <motion.h3 
                  className="font-semibold text-gray-900"
                  whileHover={{ color: "#1d4ed8" }}
                >
                  {tech.name}
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  {tech.count} 个项目
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <ParticleBackground 
          particleCount={30}
          particleColor="rgba(255,255,255,0.1)"
          connectionDistance={120}
          speed={0.2}
        />
        <FloatingElements variant="triangle" count={10} colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']} />
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <AnimatedText
            text="有项目想法？"
            className="text-3xl font-bold mb-4"
            variant="typewriter"
            delay={0.2}
          />
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            如果你有有趣的项目想法，或者需要技术合作，我很乐意与你交流
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <AnimatedButton
              href="https://github.com/1602294513/Personal-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
            >
              查看更多项目
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;