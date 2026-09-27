import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialMarquee from './components/EditorialMarquee';
import SignatureExperience from './components/SignatureExperience';
import SignatureMenu from './components/SignatureMenu';
import SubscriptionsSection from './components/SubscriptionsSection';
import DedicatedOrderSection from './components/DedicatedOrderSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import MobileOrderBar from './components/MobileOrderBar';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedOrderItem, setSelectedOrderItem] = useState<string | undefined>(undefined);

  const handleOpenOrder = (itemName?: string) => {
    setSelectedOrderItem(itemName);
    setOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setOrderModalOpen(false);
    setSelectedOrderItem(undefined);
  };

  return (
    <div className="relative min-h-screen bg-[#F4F0E6] text-[#172019] selection:bg-[#78956F]/25 selection:text-[#172019]">
      {/* Desktop Custom Interactive Cursor */}
      <CustomCursor />

      {/* Global Top Navbar */}
      <Navbar onOpenOrderModal={() => handleOpenOrder()} />

      {/* Main Continuous Brand Experience */}
      <main>
        {/* 01: Hero Scene */}
        <Hero onOpenOrderModal={() => handleOpenOrder()} />

        {/* 02: Marquee 01 — Core Brand Message */}
        <EditorialMarquee direction="left" duration={40} variant="light">
          EAT FRESH. • FEEL GOOD. • LIVE BETTER. •
        </EditorialMarquee>

        {/* 03: Signature Stack Experience (Circular orbit aligned behind cards) */}
        <SignatureExperience onOpenOrderOptions={(item) => handleOpenOrder(item)} />

        {/* 04: Marquee 02 — Transition */}
        <EditorialMarquee direction="right" duration={45} variant="dark">
          FRESH • CLEAN • FULL OF FLAVOUR • MADE FRESH •
        </EditorialMarquee>

        {/* 05: Signature Menu with Filters & Table Rows */}
        <SignatureMenu onOpenOrderModal={(item) => handleOpenOrder(item)} />

        {/* 06: Healthy Meal Subscriptions (Immediately after Signature Menu) */}
        <SubscriptionsSection />

        {/* 07: Dedicated 3-Route Ordering Section */}
        <DedicatedOrderSection />

        {/* 08: Location & Space in Saligramam */}
        <LocationSection onOpenOrderModal={() => handleOpenOrder()} />
      </main>

      {/* 09: Editorial Footer */}
      <Footer onOpenOrderModal={() => handleOpenOrder()} />

      {/* Mobile Floating Order Bar */}
      <MobileOrderBar onOpenOrderModal={() => handleOpenOrder()} />

      {/* Universal Multi-Channel Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrder}
        itemName={selectedOrderItem}
      />
    </div>
  );
}
