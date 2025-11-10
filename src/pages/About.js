import React from 'react';
import { motion } from 'framer-motion';
import TextEffectCanvas from '../components/TextEffectCanvas';

const About = () => {
  // 动画变体定义
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInFromLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease:   "easeOut" }
    }
  };

  const slideInFromRight = {
    initial: { opacity: 0, x: 100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    { category: '编程语言', items: ['JavaScript', 'Java', 'Python', 'C语言', 'HTML/CSS'] },
    { category: '前端技术', items: ['Vue.js', 'jQuery', 'CSS3', 'JavaScript', 'Photoshop'] },
    { category: '后端技术', items: ['Spring Boot', 'Node.js', 'MySQL', 'MongoDB'] },
    { category: '工具&其他', items: ['Git', 'Office', 'Adobe', 'AI', 'Linux', 'Nginx'] }
  ];

  const timeline = [
    {
      year: '2025',
      title: '个人作品集网站开发',
      company: '个人项目',
      description: '使用React、Tailwind CSS和Framer Motion技术栈开发个人作品集网站，实现了响应式设计、动画效果和现代化UI界面'
    },
    {
      year: '2023',
      title: '天府新区通用航空职业学院',
      company: '软件技术专业在读',
      description: '主修HTML、CSS、JavaScript、Vue、Spring Boot、MySQL等课程，个人绩点3.5/4.0（排名10%）'
    },
    {
      year: '2021',
      title: '网站搭建项目',
      company: '网站管理员',
      description: '负责阿里云服务器配置、宝塔面板部署、域名DNS配置和ICP备案申请等工作'
    }
  ];



  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <TextEffectCanvas />
        <motion.div 
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center" 
          style={{ minHeight: '100vh' }}
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInFromLeft}>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                关于我
              </motion.h1>
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.h2 
                  className="text-2xl font-semibold mb-4 text-blue-200"
                  whileHover={{ scale: 1.05, color: "#60a5fa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Jack Li
                </motion.h2>
                <motion.div 
                  className="space-y-2 text-gray-300"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    { label: '年龄：', value: '20岁' },
                    { label: '专业：', value: '软件技术' },
                    { label: '联系方式：', value: '1602294513@qq.com' }
                  ].map((item, index) => (
                    <motion.p 
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="font-medium">{item.label}</span>{item.value}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                我是一名充满热情的软件技术专业学生，专注于全栈开发技术的学习与实践。
                性格沉稳，动手能力强，能快速学习新技术并应用于实践。
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  { icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", text: "GPA 3.5/4.0" },
                  { icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", text: "多项竞赛获奖" },
                  { icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", text: "全栈开发技能" }
                ].map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.svg 
                      className="w-5 h-5 text-green-400 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <path fillRule="evenodd" d={achievement.icon} clipRule="evenodd" />
                    </motion.svg>
                    <span>{achievement.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              variants={slideInFromRight}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-80 h-80 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="w-72 h-72 bg-white rounded-full flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <motion.img 
                    src="/images/avatar.jpg" 
                    alt="avatar" 
                    className="w-72 h-72 rounded-full" 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 技能展示 */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              技能专长
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              多年的学习和实践让我掌握了全栈开发的各项技能
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index} 
                className="card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h3 
                  className="text-lg font-semibold mb-4 text-primary-600"
                  whileHover={{ scale: 1.05, color: "#2563eb" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skillGroup.category}
                </motion.h3>
                <motion.div 
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="flex items-center"
                      variants={{
                        initial: { opacity: 0, x: -20 },
                        animate: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.4, delay: skillIndex * 0.1 }
                        }
                      }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-primary-400 rounded-full mr-3"
                        whileHover={{ scale: 1.5, backgroundColor: "#3b82f6" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      ></motion.div>
                      <span className="text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 时间线 */}
      <section className="py-20 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              学习经历
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              我的学习和项目经历时间线
            </motion.p>
          </motion.div>
          
          <div className="relative">
            {/* 时间线线条 */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "top" }}
            ></motion.div>
            
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative flex items-start mb-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* 时间点 */}
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#3b82f6",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                >
                  {item.year}
                </motion.div>
                
                {/* 内容 */}
                <motion.div 
                  className="ml-8 card flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.4
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 mb-1"
                    whileHover={{ color: "#2563eb", scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-primary-600 font-medium mb-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    {item.company}
                  </motion.p>
                  <motion.p 
                    className="text-gray-600"
                    whileHover={{ color: "#374151" }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>



      {/* 个人理念 */}
      <section className="py-20 bg-primary-600 text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8"
            variants={fadeInUp}
          >
            学习理念
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                title: "追求卓越",
                description: "在学习中追求技术的精进，注重代码质量和实践能力"
              },
              {
                icon: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                title: "热爱学习",
                description: "保持对新技术的好奇心，通过文档整理和开源社区交流持续成长"
              },
              {
                icon: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
                title: "团队协作",
                description: "善于沟通与团队协作，相信团队的力量能创造更大价值"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  y: -10
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    rotate: 360
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.svg 
                    className="w-8 h-8" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.2 }}
                  >
                    <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                  </motion.svg>
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-blue-100"
                  whileHover={{ color: "#ffffff" }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;