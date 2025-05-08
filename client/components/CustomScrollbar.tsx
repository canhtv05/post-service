"use client";

import { useRef, useEffect, useState } from "react";

interface CustomScrollbarProps {
  children: React.ReactNode;
  height?: number | string;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children, height = 400 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateThumbHeight = () => {
    const content = contentRef.current;
    const thumb = thumbRef.current;
    if (content && thumb) {
      const ratio = content.clientHeight / content.scrollHeight;
      thumb.style.height = `${ratio * content.clientHeight}px`;
    }
  };

  const updateThumbPosition = () => {
    const content = contentRef.current;
    const thumb = thumbRef.current;
    if (content && thumb) {
      const scrollRatio = content.scrollTop / content.scrollHeight;
      const thumbTop = scrollRatio * content.clientHeight;
      thumb.style.top = `${thumbTop}px`;
    }
  };

  const handleScroll = () => {
    updateThumbHeight();
    updateThumbPosition();
    setVisible(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!isDragging) setVisible(false);
    }, 1000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setStartScrollTop(contentRef.current?.scrollTop ?? 0);
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !contentRef.current) return;
    const deltaY = e.clientY - startY;
    const scrollRatio = contentRef.current.scrollHeight / contentRef.current.clientHeight;
    contentRef.current.scrollTop = startScrollTop + deltaY * scrollRatio;
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.userSelect = "";
      timeoutRef.current = setTimeout(() => setVisible(false), 1000);
    }
  };

  useEffect(() => {
    updateThumbHeight();
    updateThumbPosition();
    const content = contentRef.current;
    if (content) content.addEventListener("scroll", handleScroll);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      if (content) content.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging, startY, startScrollTop]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height }}>
      <div ref={contentRef} className="h-full overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-hide">
        {children}
      </div>
      <div className="absolute right-0 top-0 w-2 h-full bg-transparent">
        <div
          ref={thumbRef}
          className={`w-full bg-foreground/5 rounded-md absolute transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;
