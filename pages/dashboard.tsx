import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface ChecklistItem {
  id: string;
  title: string;
  description?: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'SKIPPED';
  category: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

interface Progress {
  phase: number;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'BLOCKED';
  startDate?: string;
  completedDate?: string;
  checklists: ChecklistItem[];
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [progress, setProgress] = useState<Progress[]>([]);
  const [currentPhase, setCurrentPhase] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      router.push('/auth/signin');
      return;
    }

    fetchProgress();
  }, [session, status, router]);

  const fetchProgress = async () => {
    try {
      const response = await fetch('/api/progress');
      if (response.ok) {
        const data = await response.json();
        setProgress(data.progress);
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateChecklistStatus = async (checklistId: string, status: string) => {
    try {
      const response = await fetch(`/api/checklist/${checklistId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchProgress(); // Refresh data
      }
    } catch (error) {
      console.error('Error updating checklist:', error);
    }
  };

  const getPersonaDisplayName = (persona: string) => {
    switch (persona) {
      case 'DIY_FOUNDER': return 'Do It Yourself Founder';
      case 'FRACTIONAL_SUPPORT': return 'Fractional Support';
      default: return persona;
    }
  };

  const getStageDisplayName = (stage: string) => {
    switch (stage) {
      case 'IDEA_STAGE': return 'Idea Stage';
      case 'MVP_STAGE': return 'MVP Stage';
      case 'GROWTH_STAGE': return 'Growth Stage';
      default: return stage;
    }
  };

  const getIndustryDisplayName = (industry: string) => {
    switch (industry) {
      case 'EDUCATION': return 'Education';
      case 'OTHERS': return 'Others';
      default: return industry;
    }
  };

  const getLocationDisplayName = (location: string) => {
    switch (location) {
      case 'HSR_ONLY': return 'HSR Layout, Bangalore';
      case 'BANGALORE_ONLY': return 'Other parts of Bangalore';
      default: return location;
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const currentProgress = progress.find(p => p.phase === currentPhase);
  const completedPhases = progress.filter(p => p.status === 'COMPLETED').length;
  const totalProgress = (completedPhases / 12) * 100;

  return (
    <>
      <Head>
        <title>Dashboard - Vision Infinity Ventures</title>
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome back, {(session.user as any)?.name}!
                </h1>
                <p className="text-gray-600">
                  {getPersonaDisplayName((session.user as any)?.persona)} • {getStageDisplayName((session.user as any)?.stage)} • {getIndustryDisplayName((session.user as any)?.industry)} • {getLocationDisplayName((session.user as any)?.location)}
                </p>
              </div>
              <button
                onClick={() => signOut()}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Progress Overview */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Journey Progress</h2>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-indigo-600 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${totalProgress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-600">
                {completedPhases}/10 phases completed
              </span>
            </div>
          </div>

          {/* Phase Navigation */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Phase Navigation</h2>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((phase) => {
                const phaseProgress = progress.find(p => p.phase === phase);
                const isActive = phase === currentPhase;
                const isCompleted = phaseProgress?.status === 'COMPLETED';
                const isInProgress = phaseProgress?.status === 'IN_PROGRESS';

                return (
                  <button
                    key={phase}
                    onClick={() => setCurrentPhase(phase)}
                    className={`p-4 rounded-lg text-center transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : isCompleted
                        ? 'bg-green-100 text-green-800 border-2 border-green-300'
                        : isInProgress
                        ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-300'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-lg font-bold">{phase}</div>
                    <div className="text-xs">
                      {isCompleted ? '✓' : isInProgress ? '→' : '○'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Phase Checklist */}
          {currentProgress && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Phase {currentPhase} Checklist
              </h2>
              <div className="space-y-4">
                {currentProgress.checklists.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={item.status === 'COMPLETED'}
                            onChange={(e) =>
                              updateChecklistStatus(
                                item.id,
                                e.target.checked ? 'COMPLETED' : 'PENDING'
                              )
                            }
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <h3 className="text-lg font-medium">{item.title}</h3>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              item.priority === 'CRITICAL'
                                ? 'bg-red-100 text-red-800'
                                : item.priority === 'HIGH'
                                ? 'bg-orange-100 text-orange-800'
                                : item.priority === 'MEDIUM'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {item.priority}
                          </span>
                        </div>
                        {item.description && (
                          <p className="mt-2 text-gray-600">{item.description}</p>
                        )}
                        <div className="mt-2">
                          <span className="text-sm text-gray-500">
                            Category: {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <select
                          value={item.status}
                          onChange={(e) =>
                            updateChecklistStatus(item.id, e.target.value)
                          }
                          className="text-sm border rounded px-2 py-1"
                        >
                          <option value="PENDING">Pending</option>
                          <option value="IN_PROGRESS">In Progress</option>
                          <option value="COMPLETED">Completed</option>
                          <option value="SKIPPED">Skipped</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 