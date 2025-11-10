import React, { useRef, useEffect } from 'react';

const ElegantLinesCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, max: 20000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    // 设置canvas尺寸
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.offsetWidth : window.innerWidth;
      height = parent ? parent.offsetHeight : window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 初始化粒子 - 基于nest.js的逻辑
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const xa = 2 * Math.random() - 1;  // -1 到 1 之间的随机数
        const ya = 2 * Math.random() - 1;  // -1 到 1 之间的随机数
        particlesRef.current.push({
          x: x,
          y: y,
          xa: xa,
          ya: ya,
          max: 6000  // 连线的最大距离平方
        });
      }
    };

    // 动画循环 - 基于nest.js的e()函数
    const animate = () => {
      // 清除画布
      ctx.clearRect(0, 0, width, height);
      
      // 创建包含鼠标位置的所有点数组
      const allPoints = [mouseRef.current].concat(particlesRef.current);
      
      particlesRef.current.forEach((particle, index) => {
        // 更新粒子位置
        particle.x += particle.xa;
        particle.y += particle.ya;
        
        // 边界反弹 - 完全按照nest.js的逻辑
        particle.xa *= (particle.x > width || particle.x < 0) ? -1 : 1;
        particle.ya *= (particle.y > height || particle.y < 0) ? -1 : 1;
        
        // 绘制粒子点 - 使用fillRect绘制1x1的正方形
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(particle.x - 0.5, particle.y - 0.5, 1, 1);
        
        // 绘制连线
        for (let j = 0; j < allPoints.length; j++) {
          const point = allPoints[j];
          if (particle !== point && point.x !== null && point.y !== null) {
            const dx = particle.x - point.x;
            const dy = particle.y - point.y;
            const distance = dx * dx + dy * dy;  // 距离的平方
            
            if (distance < point.max) {
              // 鼠标排斥效果 - 按照nest.js的逻辑
              if (point === mouseRef.current && distance >= point.max / 2) {
                particle.x -= 0.03 * dx;
                particle.y -= 0.03 * dy;
              }
              
              // 绘制连线
              const opacity = (point.max - distance) / point.max;
              ctx.beginPath();
              ctx.lineWidth = opacity / 2;
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity + 0.2})`;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(point.x, point.y);
              ctx.stroke();
            }
          }
        }
        
        // 从allPoints中移除当前粒子，避免重复计算
        allPoints.splice(allPoints.indexOf(particle), 1);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // 鼠标移动事件
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    // 鼠标离开事件
    const handleMouseOut = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    // 初始化
    initParticles();
    
    // 添加事件监听器
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseout', handleMouseOut);
    
    // 延迟启动动画，模拟nest.js的setTimeout
    setTimeout(() => {
      animate();
    }, 100);

    // 清理函数
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        zIndex: 1,
        pointerEvents: 'auto'
      }}
    />
  );
};

export default ElegantLinesCanvas;