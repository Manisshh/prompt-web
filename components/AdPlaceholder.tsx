
import React from 'react';

interface AdPlaceholderProps {
  slot: string;
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ slot, className }) => {
  return (
    <div className={`w-full bg-slate-100 border border-dashed border-slate-300 rounded flex items-center justify-center min-h-[100px] text-slate-400 text-xs uppercase tracking-widest my-4 ${className}`}>
      Advertisement Slot: {slot}
      {/* 
        In production, replace this with:
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-YOUR_ID"
             data-ad-slot={slot}
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      */}
    </div>
  );
};
