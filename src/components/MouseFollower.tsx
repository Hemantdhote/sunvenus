// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const MouseFollower = () => {
//   const cursorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//     const mouse = { x: pos.x, y: pos.y };

//     // Smooth follow loop
//     gsap.ticker.add(() => {
//       pos.x += (mouse.x - pos.x) * 0.15;
//       pos.y += (mouse.y - pos.y) * 0.15;

//       gsap.set(cursor, {
//         x: pos.x,
//         y: pos.y,
//       });
//     });

//     // Track mouse
//     const move = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     window.addEventListener('mousemove', move);

//     return () => {
//       window.removeEventListener('mousemove', move);
//       gsap.ticker.remove(() => {});
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="pointer-events-none fixed left-0 top-0 z-[9999]
//       w-6 h-6 rounded-full
//       bg-gold/20
//       backdrop-blur-md
//       mix-blend-difference
//       -translate-x-1/2 -translate-y-1/2"
//     />
//   );
// };

// export default MouseFollower;




















// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const MouseFollower = () => {
//   const cursorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//     const mouse = { x: pos.x, y: pos.y };

//     const tick = () => {
//       pos.x += (mouse.x - pos.x) * 0.16;
//       pos.y += (mouse.y - pos.y) * 0.16;

//       gsap.set(cursor, {
//         x: pos.x,
//         y: pos.y,
//       });
//     };

//     gsap.ticker.add(tick);

//     const move = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     window.addEventListener('mousemove', move);

//     return () => {
//       window.removeEventListener('mousemove', move);
//       gsap.ticker.remove(tick);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="
//         pointer-events-none
//         fixed top-0 left-0 z-[9999]
//         w-10 h-10 rounded-full
//         bg-white
//         mix-blend-difference
//         -translate-x-1/2 -translate-y-1/2
//       "
//     />
//   );
// };

// export default MouseFollower;












import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: 'power3.out',
      });
      
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const onMouseEnterButton = () => {
      gsap.to(cursor, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", onMouseEnterButton);
      btn.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", onMouseEnterButton);
        btn.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block mix-blend-difference"
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
    </>
  );
};

export default MouseFollower;
