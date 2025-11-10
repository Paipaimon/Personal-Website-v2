import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CanvasBackground from '../components/CanvasBackground';
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

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'ABC 交互应用',
      description: '专门用于查询英文缩写和网络用语含义的Web应用工具，采用现代化的界面设计和交互体验。',
      image: '/images/abc-app.svg',
      technologies: ['Vue.js', 'JavaScript', 'CSS3', 'API'],
      demo: 'https://items.jlands.cn/ABC',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      id: 2,
      title: 'ClickHere 游戏',
      description: '一个有趣的点击游戏，包含音效和动画效果，测试你的反应速度和准确性。',
      image: '/images/clickhere-game.svg',
      technologies: ['HTML5', 'CSS3', 'Audio'],
      demo: 'https://items.jlands.cn/ClickHere',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 3,
      title: '计数器应用',
      description: '基于 Web 的数字小球判断游戏，玩家需要快速准确地判断屏幕上显示的小球数量。',
      image: '/images/counter-app.svg',
      technologies: ['Node.js', 'Express', 'JavaScript', 'MongoDB'],
      demo: 'https://items.jlands.cn/counter',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: '100vh' }}>
        {/* Background Effects */}
        <CanvasBackground />
        <ParticleBackground 
          particleCount={30}
          particleColor="#3b82f6"
          connectionDistance={120}
          speed={0.3}
        />
        <FloatingElements 
          count={8}
          variant="circles"
          colors={['#3b82f6', '#8b5cf6', '#ec4899', '#10b981']}
        />
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center" 
          style={{ minHeight: '100vh' }}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="text-center">
            <motion.div variants={fadeInUp}>
              <AnimatedText
                text="你好，我是"
                className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg text-white"
                animation="fadeIn"
                delay={0.2}
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <AnimatedText
                text="Jack Li"
                className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300 drop-shadow-lg"
                variant="gradient"
                animation="letters"
                delay={0.8}
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <AnimatedText
                text="软件技术专业学生 | 全栈开发学习者 | 游戏爱好者"
                className="text-xl md:text-2xl mb-8 text-blue-100 drop-shadow-md"
                animation="typewriter"
                speed={30}
                delay={2}
              />
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link to="/portfolio">
                <AnimatedButton variant="primary" size="lg">
                  查看我的作品
                </AnimatedButton>
              </Link>
              <Link to="/about">
                <AnimatedButton variant="secondary" size="lg">
                  了解更多
                </AnimatedButton>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 技能特色 */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <AnimatedText
              text="技能专长"
              className="section-title"
              variant="gradient"
              animation="scale"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              在校期间掌握了全栈开发技能，多次在编程竞赛中获奖，GPA 3.5/4.0
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={slideInFromBottom}>
              <AnimatedCard
                variant="glass"
                delay={0}
                className="card text-center hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">前端开发</h3>
                <p className="text-gray-600">
                  Vue.js, JavaScript, HTML/CSS, jQuery 等前端技术，擅长响应式设计
                </p>
              </AnimatedCard>
            </motion.div>
            
            <motion.div variants={slideInFromBottom}>
              <AnimatedCard
                variant="glass"
                delay={0.1}
                className="card text-center hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">后端开发</h3>
                <p className="text-gray-600">
                  Spring Boot, Node.js, MySQL, MongoDB 数据库设计与API开发
                </p>
              </AnimatedCard>
            </motion.div>
            
            <motion.div variants={slideInFromBottom}>
              <AnimatedCard
                variant="glass"
                delay={0.2}
                className="card text-center hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">编程语言</h3>
                <p className="text-gray-600">
                  JavaScript, Java, Python, C语言，多语言开发经验
                </p>
              </AnimatedCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 最新项目预览 */}
      <section className="py-20 bg-white relative">
        <FloatingElements 
          count={5}
          variant="hexagons"
          colors={['#3b82f6', '#8b5cf6', '#ec4899']}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <AnimatedText
              text="精选项目"
              className="section-title"
              variant="gradient"
              animation="letters"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              这里展示一些我最近完成的项目作品
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} variants={slideInFromBottom}>
                <AnimatedCard
                  variant="glass"
                  delay={index * 0.2}
                  className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-white text-lg font-semibold">{project.title}</span>
                    </div>
                  </div>
                  <AnimatedText
                    text={project.title}
                    className="text-xl font-semibold mb-2"
                    animation="fadeIn"
                  />
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    查看演示
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/portfolio">
              <AnimatedButton variant="primary" size="lg">
                查看所有项目
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <ParticleBackground 
          particleCount={20}
          particleColor="#ffffff"
          connectionDistance={100}
          speed={0.2}
          size={1.5}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedText
              text="让我们一起学习交流"
              className="text-3xl font-bold mb-4"
              variant="gradient"
              animation="scale"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedText
              text="如果你有学习心得想要分享，或者需要技术交流，欢迎联系我"
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              animation="fadeIn"
              delay={1}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <Link to="/about">
              <AnimatedButton variant="primary" size="lg">
                了解更多
              </AnimatedButton>
            </Link>
            <a href="mailto:1602294513@qq.com">
              <AnimatedButton variant="secondary" size="lg">
                联系我
              </AnimatedButton>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;