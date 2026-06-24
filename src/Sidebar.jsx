import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';



export default function Sidebar({ items, selectedIndex, onSelectIndex }) {
  const [direction, setDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [noTransition, setNoTransition] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating) return;

      setIsAnimating(true);

      const isScrollDown = e.deltaY > 0;

      setDirection(isScrollDown ? 'up' : 'down');

      setTimeout(() => {
        // Disable transitions before swapping content
        setNoTransition(true);

        onSelectIndex?.((prev) =>
          isScrollDown
            ? (prev + 1) % items.length
            : (prev - 1 + items.length) % items.length
        );

        setDirection('');

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setNoTransition(false);
            setIsAnimating(false);
          });
        });
      }, 350);
    };

    const sidebar = sidebarRef.current;

    sidebar?.addEventListener('wheel', handleWheel, {
      passive: true,
    });

    return () =>
      sidebar?.removeEventListener('wheel', handleWheel);
  }, [isAnimating]);


  const getPrevIndex = () =>
    (selectedIndex - 1 + items.length) %
    items.length;

  const getNextIndex = () =>
    (selectedIndex + 1) % items.length;

  return (
  <aside
    className="sidebar-container"
    ref={sidebarRef}
  >
    <div
      className={`sidebar-nav-list ${direction} ${
        noTransition ? 'no-transition' : ''
      }`}
    >
      {/* Fixed highlight box */}
      <div className="selection-box"></div>

      <div className="carousel-item top">
        <span className="icon">
          {items[getPrevIndex()].icon}
        </span>
        <span className="title">
          {items[getPrevIndex()].title}
        </span>
      </div>

      <div className="carousel-item center">
        <span className="icon">
          {items[selectedIndex].icon}
        </span>
        <span className="title">
          {items[selectedIndex].title}
        </span>
      </div>

      <div className="carousel-item bottom">
        <span className="icon">
          {items[getNextIndex()].icon}
        </span>
        <span className="title">
          {items[getNextIndex()].title}
        </span>
      </div>
    </div>
  </aside>
);
}