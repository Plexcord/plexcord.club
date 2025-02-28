import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const amount = 40; 
  const sineDots = Math.floor(amount * 0.3);
  const width = 26;
  const idleTimeout = 500;
  const lastFrame = useRef(0);
  const timeoutID = useRef(null);
  const idle = useRef(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dots = useRef([]);

  class Dot {
    constructor(index = 0) {
      this.index = index;
      this.anglespeed = 0.05;
      this.x = 0;
      this.y = 0;
      this.scale = 1 - 0.02 * index;
      this.range = 8 * this.scale; 
      this.angleX = Math.PI * 2 * Math.random();
      this.angleY = Math.PI * 2 * Math.random();
      this.element = document.createElement("span");
      gsap.set(this.element, { scale: this.scale, position: "absolute" });
      cursorRef.current.appendChild(this.element);
    }

    lock() {
      this.lockX = this.x;
      this.lockY = this.y;
      gsap.to(this.element, {
        x: this.lockX,
        y: this.lockY,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    draw() {
      if (!idle.current || this.index <= sineDots) {
        gsap.to(this.element, { x: this.x, y: this.y, duration: 0.1 });
      } else {
        this.angleX += this.anglespeed;
        this.angleY += this.anglespeed;
        this.y = this.lockY + Math.sin(this.angleY) * this.range;
        this.x = this.lockX + Math.sin(this.angleX) * this.range;
        gsap.to(this.element, { x: this.x, y: this.y, duration: 0.1 });
      }
    }
  }

  useEffect(() => {
    if (window.innerWidth <= 1024) return;
    
    if (cursorRef.current) {
      cursorRef.current.innerHTML = "";
    }

    const onMouseMove = (event) => {
      mousePosition.current = {
        x: event.clientX - width / 2,
        y: event.clientY - width / 2,
      };
      resetIdleTimer();
    };

    const resetIdleTimer = () => {
      clearTimeout(timeoutID.current);
      timeoutID.current = setTimeout(goInactive, idleTimeout);
      idle.current = false;
    };

    const goInactive = () => {
      idle.current = true;
      dots.current.forEach((dot) => dot.lock());
    };

    const buildDots = () => {
      dots.current = [];
      for (let i = 0; i < amount; i++) {
        dots.current.push(new Dot(i));
      }
    };

    const positionCursor = () => {
      let x = mousePosition.current.x;
      let y = mousePosition.current.y;
      dots.current.forEach((dot, index, dotsArr) => {
        let nextDot = dotsArr[index + 1] || dotsArr[0];
        dot.x = x;
        dot.y = y;
        dot.draw();
        if (!idle.current || index <= sineDots) {
          const dx = (nextDot.x - dot.x) * 0.30;
          const dy = (nextDot.y - dot.y) * 0.30;
          x += dx;
          y += dy;
        }
      });
    };

    const render = (timestamp) => {
        positionCursor();
        lastFrame.current = timestamp;
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    buildDots();
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timeoutID.current);
      if (cursorRef.current) {
        cursorRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div id="cursor" className="Cursor" ref={cursorRef}></div>;
};

export default Cursor;
