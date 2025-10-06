import React, { useState } from 'react';
import { Search, User, BookOpen } from 'lucide-react';

const BookHubGridPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 1,
      type: 'article',
      title: 'The Art of Non-Fiction',
      description: 'Loewene clawsidnaned praortet',
      category: 'Writing',
      size: 'small',
      bgColor: 'bg-amber-50',
      textColor: 'text-slate-900',
      tag: 'Bookreview.io'
    },
    {
      id: 2,
      type: 'book',
      title: 'Twelve Pillars',
      author: 'Jim Rohn',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80',
      size: 'small',
      tag: 'Authorinterview'
    },
    {
      id: 3,
      type: 'article',
      title: 'Leading with Emotional Intelligence',
      description: 'Transformative leadership starts with understanding emotions',
      category: 'Leadership',
      size: 'medium',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-900',
      tag: 'Bookreview.io'
    },
    {
      id: 4,
      type: 'article',
      title: 'Flewsinley Clatsule Dotfe',
      description: 'Pounorem tutus locwla culou teu barlesue ducnt men nape',
      category: 'Fiction',
      size: 'small',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-900',
      tag: 'Bookreview.io'
    },
    {
      id: 5,
      type: 'book',
      title: 'Freedom Creating',
      author: 'Various Authors',
      cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
      size: 'small'
    },
    {
      id: 6,
      type: 'feature',
      title: 'Wow Itala Few Flectic',
      description: 'Leneon autory upoureunoitibafited exonitide',
      bgImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80',
      size: 'large',
      tag: 'Essentials'
    },
    {
      id: 7,
      type: 'feature',
      title: 'Unpacking Dune',
      description: 'Supetias us inplerd madesu',
      bgImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80',
      size: 'medium',
      tag: 'Essentials'
    },
    {
      id: 8,
      type: 'feature',
      title: 'Unpacking Dune',
      description: 'Pounorem hiztua mantuiupag optimu preisuze',
      bgImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
      size: 'medium',
      tag: 'Essentials'
    },
    {
      id: 9,
      type: 'book',
      title: 'Mabcine',
      author: 'Shakespeare',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80',
      size: 'large'
    },
    {
      id: 10,
      type: 'article',
      title: 'Habits for Success',
      description: 'Oraotion he amberland tesw presem fideut liareuli',
      category: 'Self-Help',
      size: 'medium',
      bgColor: 'bg-amber-50',
      textColor: 'text-slate-900',
      tag: 'Bookreview.io'
    },
    {
      id: 11,
      type: 'book',
      title: 'A Journey Out of Inclusion',
      author: 'Various Authors',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
      size: 'small'
    },
    {
      id: 12,
      type: 'feature',
      title: 'Unpacking Bole Foils',
      description: 'Eleneon claengetn rabula condiu suiwe',
      bgImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
      size: 'medium',
      bgColor: 'bg-slate-100',
      textColor: 'text-slate-900',
      tag: 'Essentials'
    },
    {
      id: 13,
      type: 'book',
      title: 'Joppe Wong Espitork',
      author: 'William Shakespeare',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80',
      size: 'small'
    },
    {
      id: 14,
      type: 'article',
      title: 'Fornahily Gplentore',
      description: 'Supentas lo arbered madesu lorem fideut liareuli',
      category: 'Philosophy',
      size: 'medium',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-900'
    },
    {
      id: 15,
      type: 'book',
      title: 'Four Corner Fort',
      author: 'Leadership Experts',
      cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80',
      size: 'small'
    },
    {
      id: 16,
      type: 'article',
      title: 'Habits for Success',
      description: 'Aloerations lo annbermland tesa presem fideut liberali',
      category: 'Productivity',
      size: 'medium',
      bgColor: 'bg-amber-50',
      textColor: 'text-slate-900',
      tag: 'Bookreview.io'
    },
    {
      id: 17,
      type: 'book',
      title: 'Red Leadership',
      author: 'Modern Thinkers',
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80',
      size: 'small'
    },
    {
      id: 18,
      type: 'article',
      title: 'Decoding Classic Literature',
      description: 'Timucion tolats intalura loewenis',
      category: 'Literature',
      size: 'medium',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-900',
      tag: 'Essentials'
    }
  ];

  const getSizeClasses = (size) => {
    switch(size) {
      case 'small': return 'col-span-1 row-span-1';
      case 'medium': return 'col-span-1 row-span-2';
      case 'large': return 'col-span-2 row-span-2';
      default: return 'col-span-1 row-span-1';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <BookOpen size={20} className="text-slate-900" />
              </div>
              <div>
                <div className="text-base font-bold">BookHub<span className="text-emerald-400">Blog</span></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              <a href="#books" className="text-amber-400 font-medium">Books</a>
              <a href="#topics" className="hover:text-amber-400 transition-colors">Topics</a>
              <a href="#authors" className="hover:text-amber-400 transition-colors">Authors</a>
              <a href="#community" className="hover:text-amber-400 transition-colors">Community</a>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                <Search size={18} />
              </button>
              <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                <User size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-8 px-4 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Dynamic Grid & Content-Rich</h1>
          <p className="text-slate-600">Discover curated insights from the world's leading thinkers</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">
            {contentItems.map((item) => (
              <div
                key={item.id}
                className={`${getSizeClasses(item.size)} group cursor-pointer`}
              >
                {item.type === 'article' && (
                  <div className={`h-full ${item.bgColor} rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between border border-slate-200`}>
                    <div>
                      <h3 className={`font-bold text-lg mb-2 ${item.textColor} group-hover:text-amber-600 transition-colors`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                    {item.tag && (
                      <div className="mt-auto">
                        <span className="inline-block bg-slate-900 text-white text-xs px-3 py-1 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {item.type === 'book' && (
                  <div className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-200 relative">
                    <img 
                      src={item.cover} 
                      alt={item.title}
                      className="w-full h-3/4 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-3">
                      <h4 className="font-semibold text-sm text-slate-900 truncate">{item.title}</h4>
                      {item.author && (
                        <p className="text-xs text-slate-600 truncate">{item.author}</p>
                      )}
                    </div>
                    {item.tag && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-slate-900 text-white text-xs px-2 py-1 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {item.type === 'feature' && (
                  <div 
                    className="h-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative group"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${item.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="h-full p-6 flex flex-col justify-end text-white">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-200 mb-3">{item.description}</p>
                      {item.tag && (
                        <span className="inline-block bg-white text-slate-900 text-xs px-3 py-1 rounded-full self-start">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-50">
        <div className="relative">
          <BookOpen size={24} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
        </div>
      </button>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold mb-2">BookHub<span className="text-emerald-400">Blog</span></div>
            <p className="text-slate-400 text-sm">Empowering leaders through knowledge</p>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-slate-400 mb-6">
            <a href="#" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms</a>
          </div>
          <p className="text-xs text-slate-500">&copy; 2024 BookHub Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BookHubGridPage;