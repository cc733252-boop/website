import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-12 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        
        {/* Trust Badges or Images */}
        <div className="w-full max-w-sm">
           <img 
             src="https://framerusercontent.com/images/0BhHTjKpz7Eb5ETTfAZEGFEAN8.png" 
             alt="Trust badges" 
             className="w-full h-auto opacity-80"
           />
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-600 text-center max-w-2xl leading-relaxed">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          ©2025 Educate.io. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};
