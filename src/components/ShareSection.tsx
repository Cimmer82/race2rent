import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail, Link2 } from 'lucide-react';

export default function ShareSection() {
  const shareUrl = window.location.origin;
  const shareTitle = "Rent2Race - Race Car Rentals";
  const shareText = "Find and rent race cars for your next event at Rent2Race!";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`Check out ${shareUrl}`)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <Share2 className="h-8 w-8 text-orange-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Share Rent2Race</h2>
          <p className="text-gray-600">Help others discover the thrill of racing</p>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>

          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>

          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>

          <a
            href={shareLinks.email}
            className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
            aria-label="Share via Email"
          >
            <Mail className="h-6 w-6" />
          </a>

          <button
            onClick={copyToClipboard}
            className="p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors"
            aria-label="Copy link"
          >
            <Link2 className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}