import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
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
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 text-gray-700">
                Listen to Stories
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white">
                Become a Volunteer
              </button>
            </div>
            <button className="md:hidden"></button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 lg:px-8 gradient-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              A Voice of Hope Built For Those Who Need{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Encouragement
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-50"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              <strong>Over 10,000 lives touched</strong> through our global network of volunteers sending uplifting voicenotes to encourage people before surgery and sharing motivational stories with children around the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Listen to Voicemails
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-20 animate-pulse delay-300"></div>
            <div className="absolute bottom-40 right-1/3 w-18 h-18 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Spreading Hope Through Voice.
                <span className="text-purple-600">One Message at a Time.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whispers of Joy is dedicated to helping underprivileged individuals around the world, with a special focus on children. Our volunteers create personalized voicenotes that provide encouragement to people about to undergo surgery and share motivational stories that inspire hope and resilience.
              </p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:text-accent-foreground h-10 rounded-md px-8 border-purple-200 text-purple-700 hover:bg-purple-50">
                Learn Our Story
              </button>
            </div>
            <div className="relative">
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5 8h-2v1c0 2.2-1.8 4-4 4s-4-1.8-4-4v-1H5c-.6 0-1 .4-1 1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7c0-.6-.4-1-1-1z"/>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Encouragement Voicemails</h3>
                      <p className="text-sm text-gray-600">Supportive messages for those facing medical procedures</p>
                    </div>
                  </div>
                  <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 6c0-1.1.9-2 2-2h3.93l.62-1.5C9.79 2.2 10.1 2 10.45 2h3.1c.35 0 .66.2.9.5L15.07 4H19c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6zm9 11c1.93 0 3.5-1.57 3.5-3.5S13.93 10 12 10s-3.5 1.57-3.5 3.5S10.07 17 12 17z"/>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Story Voicemails</h3>
                      <p className="text-sm text-gray-600">Inspiring tales and motivational stories for children</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 lg:px-8 playful-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How We Create Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our community-driven approach ensures every voice message reaches those who need it most, creating lasting connections across the globe.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-xl text-card-foreground bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Volunteers</h3>
                <p className="text-gray-600">
                  Dedicated volunteers from around the world contribute their time and voice to spread hope.
                </p>
              </div>
            </div>
            <div className="rounded-xl text-card-foreground bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Messages</h3>
                <p className="text-gray-600">
                  Each voicemail is crafted with care, providing personalized encouragement and support.
                </p>
              </div>
            </div>
            <div className="rounded-xl text-card-foreground bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Worldwide Reach</h3>
                <p className="text-gray-600">
                  Our platform connects voices across continents, breaking down barriers of distance.
                </p>
              </div>
            </div>
            <div className="rounded-xl text-card-foreground bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lasting Impact</h3>
                <p className="text-gray-600">
                  Every message creates ripples of positivity that extend far beyond the initial listener.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 purple-gradient">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Share Your Voice?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our community of compassionate volunteers and help us spread hope to those who need it most. Every voice matters, and yours could be the encouragement someone needs today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Start Volunteering
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm h-10 rounded-md border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
