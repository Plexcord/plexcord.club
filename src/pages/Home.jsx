import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Home = () => {
  const heroRef = useRef(null);
  const h1Ref = useRef(null);
  const heroTextRef = useRef(null);
  const ellipseRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const hero = heroRef.current;
    const h1 = h1Ref.current;
    const heroText = heroTextRef.current;

    const heroRect = hero.getBoundingClientRect();
    const centerX = heroRect.left + heroRect.width / 2;
    const centerY = heroRect.top + heroRect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const angleX = (deltaY / heroRect.height) * 15;
    const angleY = (-deltaX / heroRect.width) * 15;

    gsap.to(h1, {
      rotationX: angleX,
      rotationY: angleY,
      transformPerspective: 800,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(heroText, {
      rotationX: angleX,
      rotationY: angleY,
      transformPerspective: 800,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(ellipseRef.current, {
      rotationZ: angleX,
      rotationY: angleY,
      transformPerspective: 800,
      duration: 0.3,
      ease: "power3.out",
    });
  };
  useEffect(() => {
    const ellipse = ellipseRef.current.querySelector("ellipse");
    
    const length = ellipse.getTotalLength();
    gsap.set(ellipse, {
      strokeDasharray: length,
      strokeDashoffset: length, 
    });
    
    gsap.to(ellipse, {
      strokeDashoffset: 0,
      duration: 4,
      ease: "power1.out",
    });
  }, []);

  const handleMouseLeave = () => {
    gsap.to(h1Ref.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(heroTextRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(ellipseRef.current, {
      rotationZ: -2,
      rotationY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };
  return (
    <div
      ref={heroRef}
      className="hero-container"
      style={{
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="hero"
        style={{
          padding: "20px",
          transformStyle: "preserve-3d",
        }}
      >
        <h1
          ref={h1Ref}
          style={{
            margin: 0,
            padding: 0,
            position: "relative",
            zIndex: 0,
            translate: "none",
            rotate: "none",
            scale: "none",
          }}
        >
          Plexcord
        </h1>

        <svg
          ref={ellipseRef}
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: "-20%",
            left: 0,
            right: 0,
            margin: "0 auto",
            transform: "perspective(800px) rotateX(75deg)",
            translate: "none",
            rotate: "none",
            scale: "none",
            maxWidth:"60vw"
          }}
        >
          <ellipse
            cx="50%"
            cy="50%"
            rx="50%"
            ry="50%"
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth="10"
          />
        </svg>

        <p
          ref={heroTextRef}
          style={{
            margin: "70px 0 0",
            padding: 0,
            position: "relative",
            textAlign: "center",
            color: "#fff",
            filter: "drop-shadow(0 0 10px #ffffff)",
            translate: "none",
            WebkitTextStrokeWidth: "thin",
            rotate: "none",
            scale: "none",
          }}
        >
          Taking Discord to the Next Level!
        </p>
        <div className="hero-buttons">
          <div className="button" onClick={() => navigate("/download")}>
            <img src="/icons/download.svg" alt="download" />
            <span>Download</span>
          </div>
          <a
            href="https://discord.gg/5backnRhY9"
            className="button"
            target="_blank"
          >
            <img src="/icons/community.svg" alt="community" />
            <span>Join Community</span>
          </a>
          <a
            href="https://github.com/MutanPlex/Plexcord"
            className="button"
            target="_blank"
          >
            <img src="/icons/github.svg" alt="github" />
            <span>View Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
