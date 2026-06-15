import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';

const NAV_ITEMS = [
  { id: 1, icon: '🏠', label: 'Home' },
  { id: 2, icon: '👋', label: 'About' },
  { id: 3, icon: '🚀', label: 'Education' },
  { id: 4, icon: '📧', label: 'Projects' },
  { id: 5, icon: '⚡', label: 'Skills' },
  { id: 6, icon: '🎮', label: 'Experience' },
  { id: 7, icon: '💼', label: 'Seminars and Trainings' },
  { id: 7, icon: '💼', label: 'Contact' },
  { id: 7, icon: '💼', label: 'Fun Fact' },
];

export default function Sidebar({ onSelectIndex }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
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

        setSelectedIndex((prev) =>
          isScrollDown
            ? (prev + 1) % NAV_ITEMS.length
            : (prev - 1 + NAV_ITEMS.length) % NAV_ITEMS.length
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

  useEffect(() => {
    onSelectIndex?.(selectedIndex);
  }, [selectedIndex, onSelectIndex]);

  const getPrevIndex = () =>
    (selectedIndex - 1 + NAV_ITEMS.length) %
    NAV_ITEMS.length;

  const getNextIndex = () =>
    (selectedIndex + 1) % NAV_ITEMS.length;

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
          {NAV_ITEMS[getPrevIndex()].icon}
        </span>
        <span className="label">
          {NAV_ITEMS[getPrevIndex()].label}
        </span>
      </div>

      <div className="carousel-item center">
        <span className="icon">
          {NAV_ITEMS[selectedIndex].icon}
        </span>
        <span className="label">
          {NAV_ITEMS[selectedIndex].label}
        </span>
      </div>

      <div className="carousel-item bottom">
        <span className="icon">
          {NAV_ITEMS[getNextIndex()].icon}
        </span>
        <span className="label">
          {NAV_ITEMS[getNextIndex()].label}
        </span>
      </div>
    </div>
  </aside>
);
}