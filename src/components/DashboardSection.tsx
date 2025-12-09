import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getMemberGrowthData, getProjectCreationData, getTechnologyData, getCommunityStats } from '../data/mockData';
import { formatPercentage } from '../utils/formatters';
import { Button } from './Button';

export const DashboardSection = () => {
  const memberData = getMemberGrowthData();
  const projectData = getProjectCreationData();
  const techData = getTechnologyData();
  const stats = getCommunityStats();

  return (
    <section className="py-24 px-6 bg-[#0F1419]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Dashboard Charts */}
        <div>
          <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Community Statistics Dashboard</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Community Growth & Impact
          </h2>
          
          <div className="gradient-border rounded-2xl p-6 space-y-6">
            {/* Active Members Chart */}
            <div className="gradient-border-cyan rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Active Members</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={memberData}>
                  <defs>
                    <linearGradient id="memberGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00D4FF" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#00D4FF" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="month" stroke="#ffffff60" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#ffffff60" style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1f2e', 
                      border: '1px solid #ffffff20',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="members" 
                    stroke="#00D4FF" 
                    strokeWidth={3}
                    fill="url(#memberGradient)"
                    dot={{ fill: '#00D4FF', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Projects Created Chart */}
              <div className="gradient-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Projects Created</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={projectData}>
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7B2BE8" stopOpacity={1} />
                        <stop offset="100%" stopColor="#E94B9E" stopOpacity={0.8} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="month" stroke="#ffffff60" style={{ fontSize: '10px' }} />
                    <YAxis stroke="#ffffff60" style={{ fontSize: '10px' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1f2e', 
                        border: '1px solid #ffffff20',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                    <Bar dataKey="projects" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Technologies Used Chart */}
              <div className="gradient-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={techData as any}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {techData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1f2e', 
                        border: '1px solid #ffffff20',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col justify-center">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Call-to-Action</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Join the Movement?
          </h2>
          
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Be part of a thriving community of .NET developers. Share your knowledge, collaborate on projects, and accelerate your career.
          </p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-[#00D4FF] mb-1">
                  {stats.totalMembers.toLocaleString()}
                </div>
                <div className="text-white/60 text-sm">Members</div>
                <div className="text-[#00D4FF] text-xs mt-1">
                  {formatPercentage(stats.memberGrowthPercent)} this month
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-[#FF8C42] mb-1">
                  {stats.totalProjects}
                </div>
                <div className="text-white/60 text-sm">Projects</div>
                <div className="text-[#FF8C42] text-xs mt-1">
                  {formatPercentage(stats.projectGrowthPercent)} this month
                </div>
              </div>
            </div>
            
            <Button variant="primary" className="w-full">
              Sign Up for Free
            </Button>
            
            <p className="text-center text-white/60">
              Already a member?{' '}
              <a href="#login" className="text-[#00D4FF] hover:text-[#7B2BE8] transition-colors border-b border-[#00D4FF] hover:border-[#7B2BE8]">
                Log in.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};