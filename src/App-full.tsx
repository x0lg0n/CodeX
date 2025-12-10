import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Code, 
  Brain, 
  Rocket, 
  Calendar, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Users, 
  Zap,
  Target,
  Award,
  ChevronRight,
  Star,
  Globe,
  Database,
  Smartphone,
  Bot,
  Moon,
  Sun,
  LogIn,
  LogOut,
  User,
  FileText,
  TrendingUp,
  Code2,
  GitBranch,
  Menu,
  X,
  StickyNote
} from "lucide-react";
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { UserProvider, useUser } from './contexts/UserContext';
import { AuthModal } from './components/AuthModal';
import { NotesEditor } from './components/NotesEditor';
import { dsaProgram } from './data/dsaProgram';

const trainingData = {
  overview: {
    duration: "3 Months",
    totalHours: "360+ Hours",
    projects: "12 Projects",
    certifications: "3 Certificates"
  },
  months: [
    {
      id: 1,
      title: "Foundation & Frontend Mastery",
      description: "Build solid fundamentals in HTML, CSS, JavaScript, and React with AI-powered development tools",
      weeks: [
        {
          week: 1,
          title: "Web Development Fundamentals + AI Tools Setup",
          topics: [
            "HTML5 semantic structure and accessibility",
            "CSS3 fundamentals, Flexbox, and Grid",
            "Setting up GitHub Copilot and ChatGPT for development",
            "Introduction to AI-powered code completion",
            "Version control with Git and GitHub"
          ],
          project: "AI-Enhanced Personal Portfolio Website",
          aiIntegration: "Using GitHub Copilot for HTML/CSS generation and code suggestions"
        },
        {
          week: 2,
          title: "JavaScript Fundamentals + AI-Assisted Coding",
          topics: [
            "ES6+ JavaScript syntax and features",
            "DOM manipulation and event handling",
            "Async/await and API integration",
            "Using AI to debug JavaScript code",
            "Code review with AI assistance"
          ],
          project: "Interactive Weather App with AI-powered features",
          aiIntegration: "AI-generated weather insights and smart notifications"
        },
        {
          week: 3,
          title: "React Basics + AI Component Generation",
          topics: [
            "React components and JSX",
            "State management with hooks",
            "Props and component communication",
            "AI-powered component generation",
            "Testing React components with AI assistance"
          ],
          project: "AI-Enhanced Task Management App",
          aiIntegration: "Smart task categorization and priority suggestions using AI"
        },
        {
          week: 4,
          title: "Advanced React + AI Integration Patterns",
          topics: [
            "React Router and navigation",
            "Context API and global state",
            "Custom hooks development",
            "Integrating AI APIs into React apps",
            "Performance optimization with AI insights"
          ],
          project: "AI-Powered Social Media Dashboard",
          aiIntegration: "Content analysis, sentiment detection, and automated posting suggestions"
        }
      ]
    },
    {
      id: 2,
      title: "Backend Development & AI Services",
      description: "Master server-side development, databases, and AI service integration",
      weeks: [
        {
          week: 5,
          title: "Node.js & Express + AI-Powered Backend",
          topics: [
            "Node.js fundamentals and npm ecosystem",
            "Express.js server setup and middleware",
            "RESTful API design principles",
            "Integrating OpenAI API and other AI services",
            "Error handling and logging with AI insights"
          ],
          project: "AI-Enhanced E-commerce API",
          aiIntegration: "Product recommendations, price optimization, and inventory predictions"
        },
        {
          week: 6,
          title: "Database Design + AI Data Processing",
          topics: [
            "MongoDB fundamentals and Mongoose ODM",
            "Database schema design and relationships",
            "SQL basics with PostgreSQL",
            "AI-powered data analysis and insights",
            "Database optimization using AI recommendations"
          ],
          project: "Intelligent CRM System",
          aiIntegration: "Customer behavior analysis, lead scoring, and automated follow-ups"
        },
        {
          week: 7,
          title: "Authentication & Security + AI Threat Detection",
          topics: [
            "JWT authentication and authorization",
            "Password hashing and security best practices",
            "OAuth integration (Google, GitHub)",
            "AI-powered security monitoring",
            "Implementing rate limiting and DDOS protection"
          ],
          project: "Secure AI Chat Application",
          aiIntegration: "Content moderation, spam detection, and user behavior analysis"
        },
        {
          week: 8,
          title: "API Integration & Microservices + AI Orchestration",
          topics: [
            "Third-party API integration patterns",
            "Microservices architecture basics",
            "Docker containerization",
            "AI service orchestration and chaining",
            "API testing and documentation"
          ],
          project: "AI-Powered News Aggregator",
          aiIntegration: "Content summarization, topic clustering, and personalized recommendations"
        }
      ]
    },
    {
      id: 3,
      title: "Full-Stack AI Applications & Deployment",
      description: "Build complete AI-powered applications and deploy them to production",
      weeks: [
        {
          week: 9,
          title: "Advanced AI Integration + Machine Learning",
          topics: [
            "Working with machine learning models",
            "TensorFlow.js for client-side AI",
            "Natural language processing integration",
            "Computer vision APIs and implementation",
            "Real-time AI processing with WebSockets"
          ],
          project: "AI-Powered Content Creation Platform",
          aiIntegration: "Text generation, image creation, and multi-modal AI interactions"
        },
        {
          week: 10,
          title: "Mobile Development + AI on Mobile",
          topics: [
            "React Native fundamentals",
            "Progressive Web Apps (PWAs)",
            "Mobile-first design principles",
            "Implementing AI features on mobile",
            "Offline AI capabilities and caching"
          ],
          project: "AI-Enhanced Fitness Tracking Mobile App",
          aiIntegration: "Workout recommendations, form analysis, and personalized coaching"
        },
        {
          week: 11,
          title: "DevOps & Deployment + AI-Powered Monitoring",
          topics: [
            "Cloud deployment (AWS, Vercel, Netlify)",
            "CI/CD pipelines with GitHub Actions",
            "Environment configuration and secrets",
            "AI-powered monitoring and alerting",
            "Performance optimization and scaling"
          ],
          project: "Deploy All Previous Projects with AI Monitoring",
          aiIntegration: "Automated deployment decisions and performance optimization"
        },
        {
          week: 12,
          title: "Capstone Project + AI Innovation",
          topics: [
            "Project planning and architecture design",
            "Advanced AI integration techniques",
            "User experience optimization with AI",
            "Code review and best practices",
            "Presentation and portfolio development"
          ],
          project: "Full-Stack AI-Powered SaaS Application",
          aiIntegration: "Complete AI-driven platform with multiple intelligent features"
        }
      ]
    }
  ],
  resources: [
    {
      category: "AI Development Tools",
      items: [
        "GitHub Copilot - AI-powered code completion",
        "ChatGPT/Claude - AI development assistant",
        "Cursor IDE - AI-first code editor",
        "OpenAI API - GPT integration",
        "Anthropic Claude API - Advanced AI reasoning"
      ]
    },
    {
      category: "Core Technologies",
      items: [
        "HTML5, CSS3, JavaScript ES6+",
        "React.js with TypeScript",
        "Node.js and Express.js",
        "MongoDB and PostgreSQL",
        "Git and GitHub"
      ]
    },
    {
      category: "AI/ML Libraries",
      items: [
        "TensorFlow.js - Machine learning in browser",
        "OpenAI JavaScript SDK",
        "Langchain - AI application framework",
        "Hugging Face Transformers",
        "Replicate API - AI model hosting"
      ]
    },
    {
      category: "Deployment & DevOps",
      items: [
        "Docker and containerization",
        "AWS/Google Cloud Platform",
        "Vercel and Netlify",
        "GitHub Actions CI/CD",
        "Monitoring and analytics tools"
      ]
    }
  ],
  certifications: [
    {
      title: "Frontend AI Developer",
      description: "Master React development with AI-powered features",
      projects: 4,
      skills: ["React", "JavaScript", "AI APIs", "UI/UX"]
    },
    {
      title: "Backend AI Engineer",
      description: "Build scalable backends with intelligent services",
      projects: 4,
      skills: ["Node.js", "Databases", "AI Integration", "Security"]
    },
    {
      title: "Full-Stack AI Architect",
      description: "Design and deploy complete AI-powered applications",
      projects: 4,
      skills: ["Full-Stack", "AI/ML", "DevOps", "System Design"]
    }
  ]
};

// Header Component
function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">AI Training Hub</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 ml-8">
                <a href="#webdev" className="text-sm font-medium hover:text-primary transition-colors">
                  Web Development
                </a>
                <a href="#dsa" className="text-sm font-medium hover:text-primary transition-colors">
                  DSA & Interviews
                </a>
                <a href="#progress" className="text-sm font-medium hover:text-primary transition-colors">
                  Progress
                </a>
                <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors">
                  Resources
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="h-8 w-8 px-0"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* User Section */}
              {user ? (
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {user.name.charAt(0).toUpperCase()}

                  </div>
                  <span className="text-sm font-medium hidden sm:inline">{user.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={logout}
                    className="hidden sm:flex items-center gap-1"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setShowAuthModal(true)}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden h-8 w-8 px-0"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {showMobileMenu && (
            <div className="md:hidden border-t bg-background py-4">
              <nav className="flex flex-col gap-4">
                <a href="#webdev" className="text-sm font-medium hover:text-primary transition-colors">
                  Web Development
                </a>
                <a href="#dsa" className="text-sm font-medium hover:text-primary transition-colors">
                  DSA & Interviews
                </a>
                <a href="#progress" className="text-sm font-medium hover:text-primary transition-colors">
                  Progress
                </a>
                <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors">
                  Resources
                </a>
                {user && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={logout}
                    className="justify-start p-0"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}

// Program Component
function ProgramSection({ type }: { type: 'webdev' | 'dsa' }) {
  const { user, progress, toggleWeekCompletion } = useUser();
  const [activeMonth, setActiveMonth] = useState("1");
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [currentNoteKey, setCurrentNoteKey] = useState('');
  const [currentNoteTitle, setCurrentNoteTitle] = useState('');

  const data = type === 'webdev' ? trainingData : dsaProgram;
  const completedWeeks = type === 'webdev' ? progress.webDevWeeks : progress.dsaWeeks;

  const getProgressPercentage = () => {
    const totalWeeks = data.months.reduce((acc, month) => acc + month.weeks.length, 0);
    return (completedWeeks.length / totalWeeks) * 100;
  };

  const openNotes = (weekNumber: number, title: string) => {
    const noteKey = `${type}-week-${weekNumber}`;
    setCurrentNoteKey(noteKey);
    setCurrentNoteTitle(title);
    setShowNotesModal(true);
  };

  return (
    <div className="space-y-8">
      {/* Progress Section */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              <CardTitle className="text-green-800 dark:text-green-200">
                {type === 'webdev' ? 'Web Development Progress' : 'DSA Progress'}
              </CardTitle>
            </div>
            <Badge variant="outline" className="border-green-600 text-green-600">
              {completedWeeks.length}/{data.months.reduce((acc, month) => acc + month.weeks.length, 0)} Weeks
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={getProgressPercentage()} className="h-3 mb-2" />
          <p className="text-sm text-green-700 dark:text-green-300">
            {Math.round(getProgressPercentage())}% Complete - Keep up the great work!
          </p>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs value={activeMonth} onValueChange={setActiveMonth} className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
          {data.months.map((month) => (
            <TabsTrigger 
              key={month.id} 
              value={month.id.toString()}
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700"
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="font-semibold">Month {month.id}</span>
              </div>
              <span className="text-xs text-center text-muted-foreground">
                {month.title}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {data.months.map((month) => (
          <TabsContent key={month.id} value={month.id.toString()} className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                Month {month.id}: {month.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {month.description}
              </p>
            </div>

            <div className="grid gap-6">
              {month.weeks.map((week) => {
                const weekNumber = (month.id - 1) * 4 + week.week;
                const isCompleted = completedWeeks.includes(weekNumber);
                
                return (
                  <Card 
                    key={week.week} 
                    className={`transition-all duration-300 hover:shadow-lg ${
                      isCompleted ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : 'hover:shadow-md'
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                            isCompleted ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                          }`}>
                            {isCompleted ? <CheckCircle className="h-4 w-4" /> : weekNumber}
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              Week {weekNumber}: {week.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-1">
                              <Clock className="h-4 w-4" />
                              {type === 'dsa' && week.dailySchedule ? week.dailySchedule : '30+ hours of learning'}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openNotes(weekNumber, week.title)}
                            className="flex items-center gap-2"
                          >
                            <StickyNote className="h-4 w-4" />
                            Notes
                          </Button>
                          {user && (
                            <Button
                              variant={isCompleted ? "default" : "outline"}
                              size="sm"
                              onClick={() => toggleWeekCompletion(type, weekNumber)}
                              className={isCompleted ? "bg-green-600 hover:bg-green-700" : ""}
                            >
                              {isCompleted ? "Completed" : "Mark Complete"}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="topics">
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              Learning Topics
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2">
                              {week.topics.map((topic, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <ChevronRight className="h-4 w-4 text-blue-500" />
                                  <span className="text-sm">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="grid md:grid-cols-2 gap-4">
                        {type === 'webdev' && (
                          <>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Rocket className="h-4 w-4 text-purple-500" />
                                <span className="font-semibold text-sm">Project</span>
                              </div>
                              <p className="text-sm text-slate-600 dark:text-slate-400 pl-6">
                                {week.project}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Bot className="h-4 w-4 text-amber-500" />
                                <span className="font-semibold text-sm">AI Integration</span>
                              </div>
                              <p className="text-sm text-slate-600 dark:text-slate-400 pl-6">
                                {week.aiIntegration}
                              </p>
                            </div>
                          </>
                        )}
                        
                        {type === 'dsa' && (
                          <>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Code2 className="h-4 w-4 text-purple-500" />
                                <span className="font-semibold text-sm">Key Problems</span>
                              </div>
                              <div className="pl-6 space-y-1">
                                {week.keyProblems?.map((problem, index) => (
                                  <p key={index} className="text-sm text-slate-600 dark:text-slate-400">
                                    • {problem}
                                  </p>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-amber-500" />
                                <span className="font-semibold text-sm">Practice Count</span>
                              </div>
                              <div className="pl-6 flex gap-4">
                                {week.practiceCount && (
                                  <>
                                    <Badge variant="outline" className="text-green-600">
                                      Easy: {week.practiceCount.easy}
                                    </Badge>
                                    <Badge variant="outline" className="text-yellow-600">
                                      Medium: {week.practiceCount.medium}
                                    </Badge>
                                    <Badge variant="outline" className="text-red-600">
                                      Hard: {week.practiceCount.hard}
                                    </Badge>
                                  </>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <NotesEditor
        isOpen={showNotesModal}
        onClose={() => setShowNotesModal(false)}
        noteKey={currentNoteKey}
        title={currentNoteTitle}
      />
    </div>
  );
}

// Main App Component
function App() {
  const [activeProgram, setActiveProgram] = useState<'webdev' | 'dsa'>('webdev');

  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <Header />
          
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative container mx-auto px-4 py-20">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Brain className="h-8 w-8" />
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    AI-Powered Learning
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Master Coding with
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {" "}AI Training
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                  Complete training programs for Web Development and Data Structures & Algorithms. 
                  Track your progress, take notes, and build your coding career.
                </p>
                
                {/* Program Selection */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <Button
                    onClick={() => setActiveProgram('webdev')}
                    size="lg"
                    variant={activeProgram === 'webdev' ? "default" : "outline"}
                    className={`flex items-center gap-2 ${
                      activeProgram === 'webdev' 
                        ? 'bg-white text-blue-600 hover:bg-blue-50' 
                        : 'border-white text-white hover:bg-white/10'
                    }`}
                  >
                    <Globe className="h-5 w-5" />
                    Web Development
                  </Button>
                  <Button
                    onClick={() => setActiveProgram('dsa')}
                    size="lg"
                    variant={activeProgram === 'dsa' ? "default" : "outline"}
                    className={`flex items-center gap-2 ${
                      activeProgram === 'dsa' 
                        ? 'bg-white text-blue-600 hover:bg-blue-50' 
                        : 'border-white text-white hover:bg-white/10'
                    }`}
                  >
                    <Code className="h-5 w-5" />
                    DSA & Interviews
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mt-12">
                  {Object.entries(activeProgram === 'webdev' ? trainingData.overview : dsaProgram.overview).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">{value}</div>
                      <div className="text-blue-100 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <ProgramSection type={activeProgram} />
          </div>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;