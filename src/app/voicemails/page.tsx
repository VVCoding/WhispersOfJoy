"use client";

import Link from 'next/link';
import { useState } from 'react';

type Voicemail = {
  name: string;
  email: string;
  voicemailType: 'encouragement' | 'story';
  description: string;
  url: string;
  filename: string;
};

export default function Voicemails() {
  const [voicemails, setVoicemails] = useState<Voicemail[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const elements = form.elements as typeof form.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      voicemailType: HTMLSelectElement;
      description: HTMLTextAreaElement;
      audioFile: HTMLInputElement;
    };
    const name = elements.name.value;
    const email = elements.email.value;
    const voicemailType = elements.voicemailType.value as 'encouragement' | 'story';
    const description = elements.description.value;
    const file = elements.audioFile.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setVoicemails(prev => [
      ...prev,
      { name, email, voicemailType, description, url, filename: file.name }
    ]);
    form.reset();
  }

  return (
    <div className="min-h-screen">
      {/* Navigation - same as Home */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">WJ</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Whispers of Joy</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-gray-700 hover:text-purple-600 font-medium" href="/">About</Link>
              <Link className="text-gray-700 hover:text-purple-600 font-medium" href="/voicemails">Voicemails</Link>
              <Link className="text-gray-700 hover:text-purple-600 font-medium" href="/get-involved">Get Involved</Link>
              <Link className="text-gray-700 hover:text-purple-600 font-medium" href="/contact">Contact Us</Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 text-gray-700" href="#stories">
                Listen to Stories
              </Link>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white">
                Become a Volunteer
              </button>
            </div>
            <button className="md:hidden"></button>
          </div>
        </div>
      </nav>

      {/* Voicemails Section */}
      <section className="pt-24 pb-20 px-4 lg:px-8 gradient-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Listen to Uplifting Voicemails
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore a collection of encouraging and motivational voicenotes sent by our global volunteers. Every message is crafted to inspire hope and positivity.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="rounded-xl border bg-card text-card-foreground shadow p-8">
                <h3 className="font-semibold text-gray-900 mb-2">Encouragement Voicemails</h3>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* Cute encouragement SVG */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="16" cy="24" rx="12" ry="5" fill="#C7D2FE"/>
                    <circle cx="16" cy="14" r="10" fill="#A5B4FC"/>
                    <ellipse cx="16" cy="18" rx="6" ry="3" fill="#FFF"/>
                    <ellipse cx="13" cy="16" rx="1.5" ry="2" fill="#000"/>
                    <ellipse cx="19" cy="16" rx="1.5" ry="2" fill="#000"/>
                    <ellipse cx="16" cy="20" rx="3" ry="1.5" fill="#818CF8"/>
                    <ellipse cx="16" cy="20" rx="2" ry="0.7" fill="#FFF"/>
                  </svg>
                </div>
                <audio controls className="w-full mb-2">
                  <source src="/audio/encouragement1.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-sm text-gray-600">A message of hope for those facing surgery.</p>
                {/* Uploaded encouragement voicemails */}
                {voicemails.filter(v => v.voicemailType === 'encouragement').map((v, i) => (
                  <div key={i} className="mt-4 p-3 rounded bg-purple-50">
                    <div className="font-semibold text-purple-700">{v.name}</div>
                    <audio controls className="w-full my-2">
                      <source src={v.url} />
                    </audio>
                    <div className="text-xs text-gray-500">{v.description}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow p-8" id="stories">
                <h3 className="font-semibold text-gray-900 mb-2">Story Voicemails</h3>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* Cute story SVG */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="16" cy="24" rx="12" ry="5" fill="#BBF7D0"/>
                    <circle cx="16" cy="14" r="10" fill="#6EE7B7"/>
                    <ellipse cx="16" cy="18" rx="6" ry="3" fill="#FFF"/>
                    <ellipse cx="13" cy="16" rx="1.5" ry="2" fill="#000"/>
                    <ellipse cx="19" cy="16" rx="1.5" ry="2" fill="#000"/>
                    <ellipse cx="16" cy="20" rx="3" ry="1.5" fill="#34D399"/>
                    <ellipse cx="16" cy="20" rx="2" ry="0.7" fill="#FFF"/>
                    {/* Smiling mouth */}
                    <path d="M14 18c.5 1 3.5 1 4 0" stroke="#059669" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <audio controls className="w-full mb-2">
                  <source src="/audio/story1.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-sm text-gray-600">An inspiring story for children.</p>
                {/* Uploaded story voicemails */}
                {voicemails.filter(v => v.voicemailType === 'story').map((v, i) => (
                  <div key={i} className="mt-4 p-3 rounded bg-green-50">
                    <div className="font-semibold text-green-700">{v.name}</div>
                    <audio controls className="w-full my-2">
                      <source src={v.url} />
                    </audio>
                    <div className="text-xs text-gray-500">{v.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Voicemail Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Submit Your Voicemail
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Share your voice and inspire others. Submit an encouraging message or motivational story to help spread hope and positivity.
            </p>
            <form className="bg-white rounded-xl shadow-lg p-8 text-left max-w-xl mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" type="text" id="name" name="name" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" type="email" id="email" name="email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="voicemailType">Voicemail Type</label>
                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" id="voicemailType" name="voicemailType" required>
                  <option value="">Select a type</option>
                  <option value="encouragement">Encouragement Voicemail</option>
                  <option value="story">Story Voicemail</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="audioFile">Upload Audio File</label>
                <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" type="file" id="audioFile" name="audioFile" accept="audio/*" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">Description</label>
                <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" id="description" name="description" rows={3} placeholder="Brief description of your voicemail"></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition-colors">Submit Voicemail</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - same as Home */}
      <footer className="bg-gray-900 text-white py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WJ</span>
                </div>
                <span className="font-bold text-xl">Whispers of Joy</span>
              </div>
              <p className="text-gray-400 mb-4">
                Spreading hope and encouragement through the power of voice, one message at a time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link className="text-gray-400 hover:text-white" href="/">About Us</Link></li>
                <li><Link className="text-gray-400 hover:text-white" href="/voicemails">Voicemails</Link></li>
                <li><Link className="text-gray-400 hover:text-white" href="/get-involved">Get Involved</Link></li>
                <li><Link className="text-gray-400 hover:text-white" href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Voicemails</h3>
              <ul className="space-y-2">
                <li><Link className="text-gray-400 hover:text-white" href="/voicemails/encouragement">Encouragement</Link></li>
                <li><Link className="text-gray-400 hover:text-white" href="/voicemails/stories">Stories</Link></li>
                <li><Link className="text-gray-400 hover:text-white" href="/submit">Submit a Voicemail</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: hello@whispersofjoy.org</li>
                <li>Phone: +1 (555) 123-HOPE</li>
                <li>Discord: WhispersOfJoy#1234</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Whispers of Joy. All rights reserved. Made with 💜 for spreading hope worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 