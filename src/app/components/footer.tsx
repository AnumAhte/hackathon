import React from 'react';

export default function Footer() {
  return (
    
    <main className="bg-neutral-200">
      <div className="w-full bg-neutral-200 flex justify-center items-center py-10">
        <div className="w-full max-w-screen-xl sm:px-6 lg:px-0 flex flex-col sm:flex-row lg:flex-row justify-evenly text-black">
                    {/* Social Links Section */}
                    <div className="text-center sm:text-left mb-8 sm:mb-0">
  <h1 className="font-black text-2xl pb-4">SHOP.CO</h1>
  <div className="font-neutral-600">
    <p>
      We have clothes that suit your style and <br />
      which you&apos;re proud to wear. From <br />
      women to men.
    </p>
    {/* Twitter Icon */}
    <div className="mt-4 flex justify-center sm:justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" />
      </svg>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#0e0c0c"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#0e0c0c"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M16.5 7.5v.01" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#0e0c0c"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
</svg>


    </div>
  </div>
</div>

          {/* Exclusive Section */}
          <div className="w-full sm:w-[200px] text-center sm:text-left mb-8 sm:mb-0">
            <h1 className="font-bold text-xl">COMPANY</h1>
            <ul className="text-sm ">
              <li className="pt-3 cursor-pointer">About</li>
              <li className="pt-3 cursor-pointer">Features</li>
              <li className="pt-3 cursor-pointer">Works</li>
              <li className="pt-3 cursor-pointer">Career</li>
             
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-[200px] text-center sm:text-left mb-8 sm:mb-0">
            <h1 className="font-bold text-xl">HELP</h1>
            <ul className="text-sm">
              <li className="pt-3 cursor-pointer">Customer Support</li>
              <li className="pt-3 cursor-pointer">Delivery Details</li>
              <li className="pt-3 cursor-pointer">Terms & Conditions</li>
              <li className="pt-3 cursor-pointer">Privacy Policy</li>
             
            </ul>
          </div>

          {/* Account Section */}
          <div className="w-full sm:w-[200px] text-center sm:text-left mb-8 sm:mb-0">
            <h1 className="font-bold text-xl">FAQ</h1>
            <ul className="text-sm">
              <li className="pt-3 cursor-pointer">Account</li>
              <li className="pt-3 cursor-pointer">Manage Deliveries</li>
              <li className="pt-3 cursor-pointer">Orders</li>
              <li className="pt-3 cursor-pointer">Payments</li>
              
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="w-full sm:w-[200px] text-center sm:text-left mb-8 sm:mb-0">
            <h1 className="font-bold text-xl">RESOURCES</h1>
            <ul className="text-sm">
              <li className="pt-3 cursor-pointer">Free eBooks</li>
              <li className="pt-3 cursor-pointer">Development Tutorials</li>
              <li className="pt-3 cursor-pointer">How to-Blog</li>
              <li className="pt-3 cursor-pointer">Youtube Playlist</li>
            </ul>
          </div>


        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-neutral-600 text-sm">
  <div className="flex items-center space-x-1 sm:justify-start">
    <span className="font-bold">SHOP.CO</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9c9696"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-copyright"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
    </svg>
  </div>
  <span className="mt-2 sm:mt-0 sm:ml-2 text-center sm:text-left">
    2000-2023. All Rights Reserved.
  </span>
</div>

    </main>
  );
}
