import { Navigation } from '../components/Navigation';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ExternalLink } from 'lucide-react';
import { DotNetReleasePartySVG, BlazorWorkshopSVG, MicroservicesTalkSVG } from '../components/EventSVGs';
import React from 'react';

const eventImages: Record<number, () => React.JSX.Element> = {
  1: DotNetReleasePartySVG,
  2: BlazorWorkshopSVG,
  3: MicroservicesTalkSVG
};

const upcomingEvents = [
  {
    id: 1,
    title: '.NET 9 Release Party',
    description: 'Join us to celebrate the launch of .NET 9 with live demos, presentations, and networking.',
    date: 'December 15, 2025',
    time: '7:00 PM - 10:00 PM',
    location: 'Virtual Event',
    attendees: 234,
    type: 'Meetup',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Blazor Workshop',
    description: 'Hands-on workshop covering Blazor fundamentals and advanced patterns.',
    date: 'December 20, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Online',
    attendees: 156,
    type: 'Workshop',
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'Microservices Architecture Talk',
    description: 'Deep dive into building scalable microservices with .NET and Docker.',
    date: 'January 5, 2026',
    time: '6:00 PM - 8:00 PM',
    location: 'Hybrid - São Paulo & Online',
    attendees: 89,
    type: 'Conference',
    status: 'upcoming'
  }
];

const pastEvents = [
  {
    id: 4,
    title: 'MAUI Mobile Development',
    description: 'Building cross-platform mobile apps with .NET MAUI.',
    date: 'November 28, 2025',
    attendees: 178,
    type: 'Workshop',
    recording: true
  },
  {
    id: 5,
    title: 'Clean Architecture in .NET',
    description: 'Best practices for organizing and structuring .NET applications.',
    date: 'November 15, 2025',
    attendees: 245,
    type: 'Meetup',
    recording: true
  }
];

export const EventsPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0E14]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-[#0F1419] border-b border-[#00D4FF]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Community <span className="text-[#00D4FF]">Events</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl mb-8">
              Join workshops, meetups, and conferences. Learn from experts and connect with the .NET community.
            </p>
            <button className="px-8 py-4 rounded-lg font-bold bg-[#00D4FF] text-[#0A0E14] hover:bg-[#00B8E6] border-2 border-[#00D4FF] hover:border-[#00B8E6] transition-all duration-300">
              Submit Event Proposal
            </button>
          </motion.div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-12 px-6 bg-[#0F1419] border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00D4FF] mb-2">50+</div>
            <div className="text-white/60">Events This Year</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00D4FF] mb-2">5,000+</div>
            <div className="text-white/60">Total Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00D4FF] mb-2">3</div>
            <div className="text-white/60">Upcoming Events</div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Upcoming Events</h2>
          
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="solid-border-subtle rounded-lg overflow-hidden hover:border-[#00D4FF] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1">
                    {(() => {
                      const ImageComponent = eventImages[event.id];
                      return <ImageComponent />;
                    })()}
                  </div>
                  
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-bold rounded">
                        {event.type}
                      </span>
                      <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm font-bold rounded">
                        OPEN FOR REGISTRATION
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{event.title}</h3>
                    <p className="text-white/70 text-lg mb-6">{event.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-white/60">
                        <Calendar size={20} className="text-[#00D4FF]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <Clock size={20} className="text-[#00D4FF]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <MapPin size={20} className="text-[#00D4FF]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/60">
                        <Users size={20} />
                        <span>{event.attendees} registered</span>
                      </div>
                      
                      <button className="px-6 py-3 rounded-lg font-bold bg-[#00D4FF] text-[#0A0E14] hover:bg-[#00B8E6] border-2 border-[#00D4FF] hover:border-[#00B8E6] transition-all duration-300 flex items-center gap-2">
                        Register Now
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-6 bg-[#0F1419]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Past Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="solid-border-subtle rounded-lg p-6 hover:border-[#00D4FF] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-white/60 text-sm font-bold rounded">
                    {event.type}
                  </span>
                  {event.recording && (
                    <span className="px-3 py-1 bg-red-400/20 text-red-400 text-sm font-bold rounded">
                      RECORDING AVAILABLE
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-white/70 mb-4">{event.description}</p>
                
                <div className="flex items-center gap-6 text-sm text-white/60 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{event.attendees} attended</span>
                  </div>
                </div>
                
                {event.recording && (
                  <button className="w-full px-6 py-3 rounded-lg font-bold text-[#00D4FF] border-2 border-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#0A0E14] transition-all duration-300">
                    Watch Recording
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
