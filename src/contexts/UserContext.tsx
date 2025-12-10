import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface UserProgress {
  webDevWeeks: number[];
  dsaWeeks: number[];
  completedProblems: string[];
  notes: { [key: string]: string };
  mockInterviews: number;
  practiceHours: number;
}

interface UserContextType {
  user: User | null;
  progress: UserProgress;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateProgress: (updates: Partial<UserProgress>) => void;
  toggleWeekCompletion: (type: 'webDev' | 'dsa', weekNumber: number) => void;
  addNote: (key: string, content: string) => void;
  getNote: (key: string) => string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<UserProgress>({
    webDevWeeks: [],
    dsaWeeks: [],
    completedProblems: [],
    notes: {},
    mockInterviews: 0,
    practiceHours: 0,
  });

  // Load user data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('trainingUser');
    const savedProgress = localStorage.getItem('trainingProgress');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('trainingProgress', JSON.stringify(progress));
    }
  }, [progress, user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simple demo authentication - in production, use real auth service
    if (email && password.length >= 6) {
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: email.split('@')[0],
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${email}`,
      };
      
      setUser(newUser);
      localStorage.setItem('trainingUser', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simple demo authentication - in production, use real auth service
    if (email && password.length >= 6 && name) {
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${name}`,
      };
      
      setUser(newUser);
      localStorage.setItem('trainingUser', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setProgress({
      webDevWeeks: [],
      dsaWeeks: [],
      completedProblems: [],
      notes: {},
      mockInterviews: 0,
      practiceHours: 0,
    });
    localStorage.removeItem('trainingUser');
    localStorage.removeItem('trainingProgress');
  };

  const updateProgress = (updates: Partial<UserProgress>) => {
    setProgress(prev => ({ ...prev, ...updates }));
  };

  const toggleWeekCompletion = (type: 'webDev' | 'dsa', weekNumber: number) => {
    setProgress(prev => {
      const key = type === 'webDev' ? 'webDevWeeks' : 'dsaWeeks';
      const weeks = prev[key];
      
      if (weeks.includes(weekNumber)) {
        return {
          ...prev,
          [key]: weeks.filter(w => w !== weekNumber)
        };
      } else {
        return {
          ...prev,
          [key]: [...weeks, weekNumber]
        };
      }
    });
  };

  const addNote = (key: string, content: string) => {
    setProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [key]: content
      }
    }));
  };

  const getNote = (key: string): string => {
    return progress.notes[key] || '';
  };

  return (
    <UserContext.Provider
      value={{
        user,
        progress,
        login,
        signup,
        logout,
        updateProgress,
        toggleWeekCompletion,
        addNote,
        getNote,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};