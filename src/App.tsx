import React, { useState, useEffect } from 'react';
import MercuryGuide from './components/MercuryGuide';
import { 
  Sparkles, 
  Atom, 
  HelpCircle,
  Clock,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [healthStatus, setHealthStatus] = useState<boolean | null>(null);

  // Poll server for quick health status check on load
  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        if (data && data.status === 'ok') {
          setHealthStatus(true);
        } else {
          setHealthStatus(false);
        }
      })
      .catch(() => {
        setHealthStatus(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col antialiased">
      
      {/* Main Single-Screen Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8" id="sandbox-main">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <MercuryGuide />
        </motion.div>
      </main>

      {/* Elegant, humble Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-6 mt-12 text-center text-[10px] text-slate-500 font-mono tracking-wider space-y-1">
        <div>© {new Date().getFullYear()} MERCÚRIO RETRÓGRADO DESVENDADO</div>
        <div className="font-sans font-light">Central de Inteligência Astrológica — Sabedoria e Estudos Tradicionais.</div>
      </footer>

    </div>
  );
}
