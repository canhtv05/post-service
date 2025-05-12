"use client";

import { useRef, useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import RenderIf from "./RenderIf";

interface CustomScrollbarProps {
  children: React.ReactNode;
  height?: number | string;
  scrollToTop?: boolean;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children, scrollToTop = true, height = 400 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);
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

    const scrollTop = contentRef.current?.scrollTop || 0;

    setShowButton(scrollTop > 100);

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

  const handleKeyDown = (e: KeyboardEvent) => {
    const content = contentRef.current;
    if (!content) return;

    const step = 30;
    const pageStep = content.clientHeight;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        content.scrollTop += step;
        break;
      case "ArrowUp":
        e.preventDefault();
        content.scrollTop -= step;
        break;
      case "PageDown":
        e.preventDefault();
        content.scrollTop += pageStep;
        break;
      case "PageUp":
        e.preventDefault();
        content.scrollTop -= pageStep;
        break;
      case "Home":
        e.preventDefault();
        content.scrollTop = 0;
        break;
      case "End":
        e.preventDefault();
        content.scrollTop = content.scrollHeight;
        break;
    }
  };

  const handleScrollToTop = () => {
    contentRef.current?.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    const content = contentRef.current;
    updateThumbHeight();
    updateThumbPosition();

    if (content) {
      content.addEventListener("scroll", handleScroll);
      content.setAttribute("tabindex", "0"); // focusable
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      if (content) content.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging, startY, startScrollTop]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height }}>
      <div
        ref={contentRef}
        className="h-full overflow-y-scroll focus:outline-none [&::-webkit-scrollbar]:hidden scrollbar-hide"
      >
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
      <RenderIf value={showButton && scrollToTop}>
        <ScrollToTop visible={visible} onScroll={handleScrollToTop} />
      </RenderIf>
    </div>
  );
};

export default CustomScrollbar;
