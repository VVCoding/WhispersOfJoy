import Link from 'next/link';

export default function GetInvolved() {
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
              <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 text-gray-700" href="/voicemails#stories">
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

      {/* Get Involved Section */}
      <section className="pt-24 pb-20 px-4 lg:px-8 gradient-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Become a Volunteer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our compassionate community and help us spread hope and encouragement through the power of voice. Every volunteer makes a difference!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Sign Up to Volunteer
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm h-10 rounded-md border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Work Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Volunteers Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our volunteers play a crucial role in spreading hope and encouragement through personalized voicenotes and motivational stories.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-xl text-card-foreground bg-white border shadow-lg">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Encouragement Messages</h3>
                <p className="text-gray-600">
                  Record uplifting voicenotes to support individuals facing medical procedures and surgeries.
                </p>
              </div>
            </div>
            <div className="rounded-xl text-card-foreground bg-white border shadow-lg">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Share Motivational Stories</h3>
                <p className="text-gray-600">
                  Tell inspiring stories that help children develop resilience and hope for the future.
                </p>
              </div>
            </div>
            <div className="rounded-xl text-card-foreground bg-white border shadow-lg">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect Globally</h3>
                <p className="text-gray-600">
                  Reach out to underprivileged individuals worldwide, breaking down barriers of distance and language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-20 px-4 lg:px-8 playful-gradient">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our community of compassionate volunteers and help us spread hope to those who need it most. Every voice matters, and yours could be the encouragement someone needs today.
            </p>
            <form className="bg-white rounded-xl shadow-lg p-8 text-left max-w-xl mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="volunteerName">Full Name</label>
                <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" type="text" id="volunteerName" name="volunteerName" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="volunteerEmail">Email</label>
                <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" type="email" id="volunteerEmail" name="volunteerEmail" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="volunteerPhone">Phone Number</label>
                <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" type="tel" id="volunteerPhone" name="volunteerPhone" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="volunteerType">Volunteer Type</label>
                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" id="volunteerType" name="volunteerType" required>
                  <option value="">Select volunteer type</option>
                  <option value="encouragement">Encouragement Voicemails</option>
                  <option value="stories">Story Voicemails</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="volunteerMessage">Why do you want to volunteer?</label>
                <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" id="volunteerMessage" name="volunteerMessage" rows={4} placeholder="Tell us about your motivation to help others"></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition-colors">Sign Up as Volunteer</button>
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