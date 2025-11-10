import React, { useRef, useEffect, useState } from 'react';

const TextEffectCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const explosionsRef = useRef([]);
  const keysPressed = useRef(new Set());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 爆炸粒子类
    class ExplosionParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = (Math.random() - 0.5) * 8;
        this.life = 60;
        this.maxLife = 60;
        this.size = Math.random() * 4 + 2;
        this.hue = Math.random() * 360;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.98;
        this.vy *= 0.98;
        this.life--;
      }

      draw(ctx) {
        const alpha = this.life / this.maxLife;
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * alpha, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 文字粒子类
    class TextParticle {
      constructor(x, y, text, size) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.text = text;
        this.size = size;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.hue = Math.random() * 360;
        this.life = Math.random() * 200 + 100;
        this.maxLife = this.life;
        this.scale = 1;
        this.targetScale = 1;
        this.isHovered = false;
      }

      update() {
        // 鼠标交互
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // 鼠标悬停效果
        if (distance < 80) {
          this.isHovered = true;
          this.targetScale = 1.5;
          this.hue += 2;
          
          // 鼠标按下时的强力推斥
          if (isMouseDown) {
            const force = (80 - distance) / 80;
            this.vx -= (dx / distance) * force * 0.3;
            this.vy -= (dy / distance) * force * 0.3;
          } else {
            const force = (80 - distance) / 80;
            this.vx -= (dx / distance) * force * 0.05;
            this.vy -= (dy / distance) * force * 0.05;
          }
        } else {
          this.isHovered = false;
          this.targetScale = 1;
        }

        // 键盘交互效果
        if (keysPressed.current.has(' ')) {
          this.vx += (Math.random() - 0.5) * 2;
          this.vy += (Math.random() - 0.5) * 2;
          this.rotationSpeed = (Math.random() - 0.5) * 0.1;
        }

        // 平滑缩放
        this.scale += (this.targetScale - this.scale) * 0.1;

        // 回归原位的力
        this.vx += (this.originalX - this.x) * 0.002;
        this.vy += (this.originalY - this.y) * 0.002;

        // 阻尼
        this.vx *= 0.95;
        this.vy *= 0.95;

        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        this.hue += this.isHovered ? 2 : 0.5;
        
        this.life--;
        if (this.life <= 0) {
          this.life = this.maxLife;
          this.opacity = Math.random() * 0.8 + 0.2;
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.scale, this.scale);
        
        const alpha = Math.max(0.3, this.opacity * (this.life / this.maxLife));
        const brightness = this.isHovered ? 90 : 70;
        ctx.fillStyle = `hsla(${this.hue}, 80%, ${brightness}%, ${alpha})`;
        ctx.font = `bold ${this.size}px Arial, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // 添加发光效果
        ctx.shadowColor = `hsl(${this.hue}, 80%, ${brightness}%)`;
        ctx.shadowBlur = this.isHovered ? 25 : 15;
        
        // 悬停时添加外发光
        if (this.isHovered) {
          ctx.strokeStyle = `hsla(${this.hue}, 100%, 80%, 0.5)`;
          ctx.lineWidth = 2;
          ctx.strokeText(this.text, 0, 0);
        }
        
        ctx.fillText(this.text, 0, 0);
        ctx.restore();
      }
    }

    // 初始化粒子
    const initParticles = () => {
      particlesRef.current = [];
      const texts = ['CODE', 'DESIGN', 'CREATE', 'INNOVATE', 'DEVELOP', 'DREAM', 'Minecraft'];
      const skills = ['React', 'Vue', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'CSS', 'HTML'];
      const allTexts = [...texts, ...skills];
      
      console.log('Initializing particles, canvas size:', width, height);
      
      for (let i = 0; i < 30; i++) {
        const text = allTexts[Math.floor(Math.random() * allTexts.length)];
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 15 + 16;
        particlesRef.current.push(new TextParticle(x, y, text, size));
      }
      
      console.log('Particles created:', particlesRef.current.length);
    };

    // 动画循环
    const animate = () => {
      // 清除画布
      ctx.clearRect(0, 0, width, height);
      
      // 绘制半透明背景
      ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
      ctx.fillRect(0, 0, width, height);

      // 绘制渐变背景
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.2)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0.2)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 更新和绘制粒子
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // 更新和绘制爆炸粒子
      explosionsRef.current = explosionsRef.current.filter(explosion => {
        explosion.update();
        explosion.draw(ctx);
        return explosion.life > 0;
      });

      // 绘制连接线
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // 创建爆炸效果
    const createExplosion = (x, y) => {
      for (let i = 0; i < 15; i++) {
        explosionsRef.current.push(new ExplosionParticle(x, y));
      }
    };

    // 鼠标移动事件
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // 鼠标按下事件
    const handleMouseDown = (e) => {
      setIsMouseDown(true);
      createExplosion(e.clientX, e.clientY);
    };

    // 鼠标释放事件
    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    // 鼠标点击事件
    const handleClick = (e) => {
      createExplosion(e.clientX, e.clientY);
      // 添加随机粒子扰动
      particlesRef.current.forEach(particle => {
        const dx = e.clientX - particle.x;
        const dy = e.clientY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (Math.random() - 0.5) * force * 3;
          particle.vy += (Math.random() - 0.5) * force * 3;
        }
      });
    };

    // 键盘事件
    const handleKeyDown = (e) => {
      keysPressed.current.add(e.key);
      if (e.key === 'Enter') {
        // 重新初始化粒子
        initParticles();
      }
    };

    const handleKeyUp = (e) => {
      keysPressed.current.delete(e.key);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'transparent',
        zIndex: 10,
        pointerEvents: 'auto',
        cursor: 'crosshair'
      }}
    />
  );
};

export default TextEffectCanvas;