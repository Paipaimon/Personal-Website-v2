import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    // 设置canvas尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // 粒子类
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.hue = Math.random() * 60 + 200; // 蓝紫色调
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // 边界检测
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // 鼠标交互
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.vx += (dx / distance) * force * 0.1;
          this.vy += (dy / distance) * force * 0.1;
        }

        // 速度衰减
        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        
        // 创建渐变
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, 1)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 60%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // 几何图形类
    class GeometricShape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 50;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.hue = Math.random() * 60 + 200;
        this.type = Math.floor(Math.random() * 3); // 0: 三角形, 1: 正方形, 2: 六边形
      }

      update() {
        this.rotation += this.rotationSpeed;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = `hsla(${this.hue}, 70%, 60%, 0.8)`;
        ctx.lineWidth = 2;
        ctx.beginPath();

        switch (this.type) {
          case 0: // 三角形
            ctx.moveTo(0, -this.size / 2);
            ctx.lineTo(-this.size / 2, this.size / 2);
            ctx.lineTo(this.size / 2, this.size / 2);
            ctx.closePath();
            break;
          case 1: // 正方形
            ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;
          case 2: // 六边形
            for (let i = 0; i < 6; i++) {
              const angle = (i * Math.PI) / 3;
              const x = Math.cos(angle) * this.size / 2;
              const y = Math.sin(angle) * this.size / 2;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            break;
        }
        
        ctx.stroke();
        ctx.restore();
      }
    }

    // 初始化
    const init = () => {
      resizeCanvas();
      particles = [];
      
      // 创建粒子
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
      
      // 创建几何图形
      for (let i = 0; i < 8; i++) {
        particles.push(new GeometricShape());
      }
      
      particlesRef.current = particles;
    };

    // 连线效果
    const drawConnections = () => {
      const regularParticles = particles.filter(p => p instanceof Particle);
      
      for (let i = 0; i < regularParticles.length; i++) {
        for (let j = i + 1; j < regularParticles.length; j++) {
          const dx = regularParticles[i].x - regularParticles[j].x;
          const dy = regularParticles[i].y - regularParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.save();
            ctx.globalAlpha = (120 - distance) / 120 * 0.3;
            ctx.strokeStyle = '#60A5FA';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(regularParticles[i].x, regularParticles[i].y);
            ctx.lineTo(regularParticles[j].x, regularParticles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    // 动画循环
    const animate = () => {
      // 创建渐变背景
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1e3a8a'); // 深蓝
      gradient.addColorStop(0.5, '#3730a3'); // 紫色
      gradient.addColorStop(1, '#1e40af'); // 蓝色
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 绘制连线
      drawConnections();

      // 更新和绘制所有元素
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    // 鼠标移动事件
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    // 窗口大小改变事件
    const handleResize = () => {
      resizeCanvas();
    };

    // 事件监听
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    // 启动
    init();
    animate();

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
};

export default CanvasBackground;