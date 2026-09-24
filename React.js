import React, { useState } from 'react';
import { Users, UserCheck, BarChart2, ShieldCheck, LogOut } from 'lucide-react';

export default function HRSystemDashboard() {
  const [activeTab, setActiveTab] = useState('pooling');
  const userEmail = "ron.sarmenta@imerchmedia.net"; // Mock logged-in user

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation Header */}
      <header className="bg-slate-900 text-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-500 p-2 rounded-lg font-bold text-lg">iMerch</div>
          <div>
            <h1 className="text-xl font-bold tracking-wide">HR Pooling & Hiring System</h1>
            <p className="text-xs text-slate-400">Logged in as: {userEmail} (Admin)</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </header>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="flex space-x-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('pooling')}
            className={`flex items-center space-x-2 py-3 px-6 font-medium text-sm border-b-2 transition ${
              activeTab === 'pooling' ? 'border-indigo-600 text-indigo-600 bg-white rounded-t-lg shadow-sm' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Users size={18} />
            <span>1. Pooling Tab (Target: 30/day)</span>
          </button>
          <button
            onClick={() => setActiveTab('hiring')}
            className={`flex items-center space-x-2 py-3 px-6 font-medium text-sm border-b-2 transition ${
              activeTab === 'hiring' ? 'border-indigo-600 text-indigo-600 bg-white rounded-t-lg shadow-sm' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <UserCheck size={18} />
            <span>2. Hiring Tab</span>
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`flex items-center space-x-2 py-3 px-6 font-medium text-sm border-b-2 transition ${
              activeTab === 'summary' ? 'border-indigo-600 text-indigo-600 bg-white rounded-t-lg shadow-sm' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <BarChart2 size={18} />
            <span>3. Summary & Performance Graph</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="bg-white rounded-b-xl rounded-r-xl shadow-lg p-6 mt-0">
          {activeTab === 'pooling' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-800">Daily Candidate Pooling Entry</h2>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">Standard: 30 Candidates / Day</span>
              </div>
              {/* Table Mockup */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                      <th className="p-3">Full Name</th>
                      <th className="p-3">Address</th>
                      <th className="p-3">Contact Number</th>
                      <th className="p-3">Area</th>
                      <th className="p-3">Date of Pooling</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-600 divide-y divide-gray-100">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Juan Dela Cruz</td>
                      <td className="p-3">Makati City</td>
                      <td className="p-3">09123456789</td>
                      <td className="p-3">NCR</td>
                      <td className="p-3">2026-09-24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'hiring' && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Successful Hires Tracking</h2>
              <p className="text-sm text-gray-500 mb-4">List of candidates who transitioned from the pooling database to hired status.</p>
              {/* Hiring Table goes here */}
            </div>
          )}

          {activeTab === 'summary' && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-6">Recruitment Performance & Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-5 rounded-xl shadow">
                  <p className="text-xs uppercase tracking-wider opacity-80">Total Pooled (This Month)</p>
                  <h3 className="text-3xl font-bold mt-1">1,250</h3>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-5 rounded-xl shadow">
                  <p className="text-xs uppercase tracking-wider opacity-80">Total Hired</p>
                  <h3 className="text-3xl font-bold mt-1">320</h3>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-5 rounded-xl shadow">
                  <p className="text-xs uppercase tracking-wider opacity-80">Target Compliance Rate</p>
                  <h3 className="text-3xl font-bold mt-1">94.2%</h3>
                </div>
              </div>
              <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-12 text-center text-slate-500">
                [ Interactive Chart.js / Recharts Graph for Recruiter Daily Output Appears Here ]
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
