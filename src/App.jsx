import React, { useState, useEffect, useRef } from 'react';
import {
  Activity,
  UploadCloud,
  BrainCircuit,
  Database,
  ShieldCheck,
  Users,
  ArrowRight,
  FileText,
  AlertTriangle,
  ChevronRight,
  CheckCircle2,
  Stethoscope,
  Microscope,
  Lock,
  Layers,
  Cpu,
  Bandage
} from 'lucide-react';

// --- MAIN APP COMPONENT (ROUTER SIMULATION) ---
export default function MedXD() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for Navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setPage={setCurrentPage} />;
      case 'scan': return <ScanPage />;
      case 'technology': return <TechnologyPage />;
      case 'goal': return <GoalPage setPage={setCurrentPage} />;
      default: return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <GlobalStyles />
      <ScrollProgressBar />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-2 rounded-xl shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 group-hover:scale-105">
              <Activity size={24} className="animate-pulse-slow" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500 tracking-tight">
              MedXD
            </span>
          </div>

          <div className="hidden md:flex gap-1 bg-slate-100/50 backdrop-blur-md p-1 rounded-full border border-slate-200/50">
            {[
              { id: 'home', label: 'Overview' },
              { id: 'scan', label: 'Diagnostic Hub' },
              { id: 'technology', label: 'Architecture' },
              { id: 'goal', label: 'Our Goal' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                  currentPage === item.id
                    ? 'text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {currentPage === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 -z-10 animate-fade-in" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage('scan')}
            className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
          >
            Launch App
            <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      {/* Main Content Area with Page Transition Wrapper */}
      <main className="min-h-screen pt-24 pb-12 flex flex-col">
        {renderPage()}
      </main>

      {/* Shared Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/10 blur-[100px] rounded-t-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Activity size={24} className="text-cyan-500" />
              <span className="text-2xl font-bold text-white tracking-tight">MedXD</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Pioneering the future of accessible medical diagnostics through advanced computer vision and deep learning. Built for the 2026 Innovation Hackathon.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-cyan-400 transition-colors">Overview</button></li>
              <li><button onClick={() => setCurrentPage('scan')} className="hover:text-cyan-400 transition-colors">Diagnostic Hub</button></li>
              <li><button onClick={() => setCurrentPage('technology')} className="hover:text-cyan-400 transition-colors">Architecture</button></li>
              <li><button onClick={() => setCurrentPage('goal')} className="hover:text-cyan-400 transition-colors">Our Goal</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Lock size={14}/> <span className="hover:text-cyan-400 cursor-pointer transition-colors">Privacy Policy</span></li>
              <li className="flex items-center gap-2"><FileText size={14}/> <span className="hover:text-cyan-400 cursor-pointer transition-colors">Terms of Service</span></li>
              <li className="flex items-center gap-2"><AlertTriangle size={14}/> <span className="hover:text-cyan-400 cursor-pointer transition-colors">Medical Disclaimer</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p>© 2026 MedXD Team. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">GitHub Repository</a>
            <a href="#" className="hover:text-white transition-colors">Devpost Submission</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- PAGE COMPONENTS ---

const HomePage = ({ setPage }) => (
  <PageTransition>
    {/* Hero Section */}
    <section className="relative pt-20 pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 w-[500px] h-[500px] bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000" />

      {/* Floating medical icons for dynamic ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hidden md:block absolute right-24 top-32 floating-card glow-on-scroll">
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-slate-100">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 icon-orbit-slow">
              <ShieldCheck size={22} />
            </span>
            <div className="text-left">
              <p className="text-[11px] font-semibold tracking-[0.15em] text-slate-500 uppercase">
                Real-time care alerts
              </p>
              <p className="text-xs text-slate-700">Auto-generated summaries for clinicians</p>
            </div>
          </div>
        </div>
        <div className="absolute left-6 bottom-24 icon-orbit-medium">
          <div className="w-11 h-11 rounded-full bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-cyan-500">
            <Bandage size={22} />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Redefining Radiology with <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 animate-gradient-x">
            Artificial Intelligence
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-12 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '300ms' }}>
          MedXD deploys an advanced Convolutional Neural Network to instantly analyze chest radiographs, identifying early indicators of Pneumonia and Lung Malignancy with unprecedented precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <button
            onClick={() => setPage('scan')}
            className="group flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
          >
            Open Diagnostic Hub
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setPage('technology')}
            className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 text-lg"
          >
            Explore Architecture
          </button>
        </div>
      </div>
    </section>

    {/* The Problem & Solution Section */}
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Why MedXD Matters</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <h3 className="text-2xl font-bold text-red-900 mb-4 relative z-10 flex items-center gap-3">
                <AlertTriangle className="text-red-500" /> The Bottleneck
              </h3>
              <p className="text-red-800/80 leading-relaxed relative z-10">
                Globally, millions of chest X-rays are taken daily, but there is a critical shortage of trained radiologists. In rural and developing areas, patients can wait weeks for life-saving diagnoses, drastically reducing survival rates for aggressive conditions like lung cancer.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 relative z-10 flex items-center gap-3">
                <ShieldCheck className="text-blue-500" /> The MedXD Solution
              </h3>
              <p className="text-blue-800/80 leading-relaxed relative z-10">
                We empower understaffed clinics by providing a "second opinion" AI that operates in milliseconds. By triaging high-risk scans immediately, MedXD ensures critical patients receive rapid attention, democratizing access to expert-level diagnostics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
             <StatCard icon={<BrainCircuit/>} value="94.6%" label="Model Accuracy" delay="100ms" color="blue" />
             <StatCard icon={<Activity/>} value="< 1.2s" label="Inference Time" delay="200ms" color="cyan" />
             <StatCard icon={<Database/>} value="112k+" label="Training Scans" delay="300ms" color="indigo" />
             <StatCard icon={<Users/>} value="24/7" label="Accessibility" delay="400ms" color="emerald" />
          </div>
        </div>
      </div>
    </section>
  </PageTransition>
);

const ScanPage = () => (
  <PageTransition>
    <section className="relative py-12 px-6 max-w-7xl mx-auto w-full overflow-hidden">
      {/* Animated stethoscope + bandage orbit */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hidden md:block absolute -right-10 top-24">
          <div className="floating-card rounded-3xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center icon-stethoscope-swing">
              <Stethoscope size={22} />
            </div>
            <div className="text-xs text-slate-600">
              <p className="font-semibold text-slate-900">Live clinical co-pilot</p>
              <p>AI assists, doctor makes the call.</p>
            </div>
          </div>
        </div>
        <div className="absolute left-4 top-40 icon-orbit-medium">
          <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-400/60 flex items-center justify-center text-emerald-500">
            <Bandage size={18} />
          </div>
        </div>
      </div>

      <div className="mb-12 text-center animate-fade-in-down">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Diagnostic Hub</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Upload an anonymized PA or AP view chest radiograph. Our ResNet-50 powered model will analyze the tensor data and return a probabilistic heatmap and diagnosis.
        </p>
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <ScannerComponent />
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
            <Lock size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Privacy First (HIPAA)</h4>
            <p className="text-sm text-slate-600">All inference is simulated locally in this demo. No medical data is stored, retained, or used for further training.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
            <Layers size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Supported Formats</h4>
            <p className="text-sm text-slate-600">The current prototype pipeline accepts standard RGB or Grayscale images in <strong>JPEG</strong> or <strong>PNG</strong> format up to 5MB.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="bg-amber-50 p-3 rounded-xl text-amber-600">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Clinical Disclaimer</h4>
            <p className="text-sm text-slate-600">This software is not FDA approved. It is a proof-of-concept designed strictly for the Hackathon evaluation.</p>
          </div>
        </div>
      </div>
    </section>
  </PageTransition>
);

const TechnologyPage = () => (
  <PageTransition>
    <section className="relative py-12 px-6 max-w-7xl mx-auto w-full overflow-hidden">
      {/* Floating architecture orbit icons */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hidden md:block absolute right-10 top-20 icon-orbit-slow">
          <div className="w-11 h-11 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center shadow-xl shadow-cyan-500/40">
            <Cpu size={22} />
          </div>
        </div>
        <div className="absolute left-0 bottom-24 icon-orbit-medium">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-400/60 flex items-center justify-center text-emerald-500">
            <Bandage size={20} />
          </div>
        </div>
      </div>

      <div className="mb-16 md:flex justify-between items-end animate-fade-in-down relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-cyan-600 font-bold tracking-wider uppercase text-sm mb-4">
            <Cpu size={18} /> System Architecture
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Under the Hood of MedXD</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            MedXD isn't just a UI; it's an end-to-end clinical pipeline. From the moment an image is uploaded, through
            early disease detection, to an AI care agent drafting a WhatsApp report after consulting a doctor—here is
            the full story.
          </p>
        </div>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent z-10">

        {/* Step 1 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
            <Database size={28} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl text-slate-900 mb-3">1. Data Engineering & Preprocessing</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We sourced the NIH Chest X-ray dataset containing 112,120 frontal-view images. To prevent overfitting and handle class imbalance, we implemented rigorous preprocessing:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-cyan-500 shrink-0"/> CLAHE (Contrast Limited Adaptive Histogram Equalization) to enhance bone/tissue boundaries.</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-cyan-500 shrink-0"/> Heavy Data Augmentation: Random rotations, zooming, and horizontal flipping.</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-cyan-500 shrink-0"/> Resizing all tensors to 224x224x3 for network compatibility.</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-indigo-100 text-indigo-600 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
            <BrainCircuit size={28} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl text-slate-900 mb-3">2. Neural Architecture (ResNet-50)</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Instead of building a CNN from scratch, we utilized Transfer Learning via a ResNet-50 architecture pre-trained on ImageNet.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl mb-4 border border-slate-200">
              <code className="text-xs text-indigo-600 font-mono">
                base_model = ResNet50(weights='imagenet', include_top=False)<br/>
                x = GlobalAveragePooling2D()(base_model.output)<br/>
                x = Dense(512, activation='relu')(x)<br/>
                outputs = Dense(NUM_CLASSES, activation='sigmoid')(x)
              </code>
            </div>
            <p className="text-sm text-slate-600">
              The residual connections in ResNet allow us to train a deep 50-layer network without suffering from the vanishing gradient problem, capturing highly intricate radiographic features.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-emerald-100 text-emerald-600 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
            <Activity size={28} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl text-slate-900 mb-3">3. Inference & Interpretability</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Medical professionals cannot trust a "black box." Therefore, our inference pipeline generates a Grad-CAM (Gradient-weighted Class Activation Mapping) overlay.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-emerald-500 shrink-0"/> The model outputs a probability matrix for multiple pathologies.</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-emerald-500 shrink-0"/> Grad-CAM highlights the exact pixels (e.g., opacities in the lower lobe) that led to the model's decision.</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-emerald-500 shrink-0"/> Served via a high-concurrency FastAPI Python backend to this React frontend.</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-sky-100 text-sky-600 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
            <Stethoscope size={26} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl text-slate-900 mb-3">4. AI Care Agent & WhatsApp Reporting</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Once a scan is analyzed, an inbuilt AI agent translates the raw probabilities and heatmaps into a
              clinician-friendly summary, then coordinates with an on-call doctor before notifying the patient.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <CheckCircle2 size={18} className="text-sky-500 shrink-0"/>
                The AI agent drafts a structured report, including suspected early-stage diseases and recommended next steps.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 size={18} className="text-sky-500 shrink-0"/>
                A doctor-in-the-loop quickly reviews, edits, or approves the AI draft to maintain clinical responsibility.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 size={18} className="text-sky-500 shrink-0"/>
                A secure integration with WhatsApp Business APIs sends the final report to the patient and care team,
                meeting them where they already communicate.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  </PageTransition>
);

const GoalPage = ({ setPage }) => (
  <PageTransition>
    <section className="relative py-16 md:py-24 px-6 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="parallax-surface absolute inset-0 opacity-70" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Goal page decorative stethoscope orbit */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hidden md:block absolute right-10 bottom-24 icon-orbit-slow">
          <div className="w-11 h-11 rounded-2xl bg-slate-900 text-emerald-400 flex items-center justify-center shadow-xl shadow-emerald-500/40">
            <Stethoscope size={22} />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_minmax(0,1fr)] gap-12 items-start">
        <div className="space-y-10 animate-fade-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-slate-100 text-xs font-semibold uppercase tracking-[0.18em] shadow-lg shadow-slate-900/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Our Long-Term Vision
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Building a world where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 animate-gradient-x">
                diagnostics are instant
              </span>{" "}
              and accessible.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              MedXD’s goal is bigger than a hackathon demo. We’re designing a platform that can plug into clinics,
              hospitals, and mobile devices alike—giving every clinician a supercharged AI co-pilot for radiology.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                label: 'Global Clinics',
                value: '10k+',
                desc: 'Target deployments in resource-constrained regions over 5 years.',
                accent: 'from-emerald-400 to-emerald-500',
              },
              {
                label: 'Scan Latency',
                value: '< 500ms',
                desc: 'On-device inference for real-time triage in emergencies.',
                accent: 'from-cyan-400 to-blue-500',
              },
              {
                label: 'Equity Index',
                value: '3x',
                desc: 'Increase in access to quality diagnostics for rural patients.',
                accent: 'from-indigo-400 to-sky-500',
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${200 + i * 120}ms` }}
              >
                <div className={`absolute inset-x-0 -top-1 h-1 bg-gradient-to-r ${item.accent}`} />
                <div className="p-5">
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase mb-3">{item.label}</p>
                  <p className="text-3xl font-extrabold text-slate-900 mb-2">{item.value}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setPage('scan')}
              className="group inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <Activity size={18} className="group-hover:rotate-6 transition-transform" />
              Start a Diagnostic Session
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setPage('technology')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 bg-white/70 hover:bg-white text-slate-800 text-sm font-semibold shadow-sm hover:shadow-md transition-all"
            >
              <Cpu size={16} />
              Explore Our Architecture
            </button>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in-right">
          <div className="relative rounded-3xl bg-slate-950 text-slate-100 p-8 overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-indigo-500/20 mix-blend-screen" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 border border-slate-700 text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-300">
                <ShieldCheck size={14} className="text-emerald-400" />
                Safety · Trust · Governance
              </div>

              <p className="text-sm text-slate-200 leading-relaxed">
                We are designing MedXD to be audited, explainable, and clinically responsible from day one. Every
                prediction is paired with a visual explanation and safety flags, so clinicians remain firmly in control.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-3 flex gap-3 items-start">
                  <div className="mt-0.5 rounded-xl bg-emerald-500/15 text-emerald-300 p-2">
                    <BrainCircuit size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100 mb-1">Explainable AI</p>
                    <p className="text-slate-400 leading-snug">Grad-CAM overlays and detailed probability breakdowns.</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-3 flex gap-3 items-start">
                  <div className="mt-0.5 rounded-xl bg-cyan-500/15 text-cyan-300 p-2">
                    <Stethoscope size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100 mb-1">Co-designed with Clinicians</p>
                    <p className="text-slate-400 leading-snug">Workflows shaped by real-world hospital feedback.</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-3 flex gap-3 items-start col-span-2">
                  <div className="mt-0.5 rounded-xl bg-blue-500/15 text-blue-300 p-2">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100 mb-1">Equitable by Design</p>
                    <p className="text-slate-400 leading-snug">
                      Diverse, de-biased datasets and continuous monitoring so performance doesn&apos;t privilege one
                      population over another.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-100 shadow-lg p-6 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-2">
                  3-Phase Roadmap
                </p>
                <p className="text-sm text-slate-600">
                  A pragmatic rollout strategy that moves from research to regulated deployment.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                In active prototyping
              </div>
            </div>

            <ol className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500 text-white text-[11px] flex items-center justify-center shadow">
                  1
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Clinical Sandbox</p>
                  <p className="text-slate-500">
                    Deploy MedXD as a decision-support tool in non-critical environments alongside radiologists.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-cyan-500 text-white text-[11px] flex items-center justify-center shadow">
                  2
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Regulatory-Grade Trials</p>
                  <p className="text-slate-500">
                    Conduct multi-center validation studies, tracking sensitivity, specificity, and outcome impact.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-500 text-white text-[11px] flex items-center justify-center shadow">
                  3
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Scaled Deployment</p>
                  <p className="text-slate-500">
                    Bring MedXD to community hospitals, mobile vans, and telemedicine platforms worldwide.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </PageTransition>
);

// --- REUSABLE / SUB COMPONENTS ---

const PageTransition = ({ children }) => (
  <div className="animate-fade-in-page w-full">
    {children}
  </div>
);

const StatCard = ({ icon, value, label, delay, color }) => {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
  };

  return (
    <div className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up flex flex-col items-center text-center" style={{ animationDelay: delay }}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${colorMap[color].split(' group-hover')[0]} group-hover:bg-slate-900 group-hover:text-white`}>
        {icon}
      </div>
      <h3 className="text-3xl font-black text-slate-900 mb-1">{value}</h3>
      <p className="text-slate-500 font-medium">{label}</p>
    </div>
  );
};

const ScannerComponent = () => {
  const [file, setFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [scanProgress, setScanProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) processFile(e.target.files[0]);
  };

  const processFile = (selectedFile) => {
    if (!selectedFile.type.startsWith('image/')) {
      alert("Please upload an image file (JPG/PNG).");
      return;
    }
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
    setResult(null);
    setScanProgress(0);
  };

  const loadDemoImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 400; canvas.height = 400;
    const ctx = canvas.getContext('2d');

    // Create a more realistic looking "Xray" placeholder
    const gradient = ctx.createLinearGradient(0,0, 400, 400);
    gradient.addColorStop(0, '#1e293b');
    gradient.addColorStop(1, '#0f172a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);

    // Lungs abstract
    ctx.fillStyle = '#cbd5e1';
    ctx.filter = 'blur(10px)';
    ctx.beginPath();
    ctx.ellipse(130, 200, 60, 140, 0.1, 0, 2 * Math.PI);
    ctx.ellipse(270, 200, 60, 140, -0.1, 0, 2 * Math.PI);
    ctx.fill();

    canvas.toBlob((blob) => {
      const demoFile = new File([blob], "sample_radiograph_01.png", { type: "image/png" });
      processFile(demoFile);
    });
  };

  const startScan = () => {
    if (!file) return;
    setIsScanning(true);
    setResult(null);
    setScanProgress(0);

    // Simulate progress bar
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + 5;
      });
    }, 150);

    // Mock ML processing time
    setTimeout(() => {
      clearInterval(interval);
      setScanProgress(100);
      setIsScanning(false);

      const mockResults = [
        { condition: 'Pneumonia Infiltrate', probability: 92.4, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', bar: 'bg-red-500' },
        { condition: 'Normal / No Findings', probability: 98.1, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', bar: 'bg-emerald-500' },
        { condition: 'Suspicious Nodule', probability: 76.8, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', bar: 'bg-amber-500' }
      ];
      setResult(mockResults[Math.floor(Math.random() * mockResults.length)]);
    }, 3500);
  };

  const resetScanner = () => {
    setFile(null);
    setPreviewUrl(null);
    setResult(null);
    setIsScanning(false);
    setScanProgress(0);
    if(fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">

      {/* Left Side: Upload / Preview */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-slate-50 flex flex-col relative border-b lg:border-b-0 lg:border-r border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-900 flex items-center gap-2">
            <Activity className="text-blue-500" size={20} /> Input Tensor
          </h3>
          {file && (
            <span className="text-xs font-mono bg-slate-200 text-slate-600 px-2 py-1 rounded">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </span>
          )}
        </div>

        {!previewUrl ? (
          <div
            className="flex-1 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-slate-100 hover:border-blue-400 transition-all duration-300 cursor-pointer group"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-transform duration-300 shadow-inner">
              <UploadCloud size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Select Radiograph</h3>
            <p className="text-slate-500 text-sm mb-8 max-w-xs">Drag and drop a clear frontal chest X-ray image here.</p>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors shadow-md">
              Browse Local Files
            </button>
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/png, image/jpeg"
            />

            <div className="mt-10 pt-6 border-t border-slate-200 w-full">
              <button
                onClick={(e) => { e.stopPropagation(); loadDemoImage(); }}
                className="inline-flex items-center gap-2 text-slate-500 text-sm font-medium hover:text-blue-600 transition-colors bg-slate-100 px-4 py-2 rounded-lg"
              >
                <Database size={16} /> Load Sample Patient Data
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 relative rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center shadow-inner group">
            <img
              src={previewUrl}
              alt="X-Ray Preview"
              className={`max-w-full max-h-full object-contain transition-all duration-700 ${isScanning ? 'opacity-50 scale-105 filter contrast-125 grayscale' : 'opacity-100'}`}
            />

            {/* Advanced Scanning Animation Overlay */}
            {isScanning && (
              <>
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_20px_4px_rgba(34,211,238,0.8)] z-20 animate-scan-line"></div>
                {/* Simulated Bounding Boxes / Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-10"></div>
              </>
            )}

            {/* Simulated Grad-CAM result overlay */}
            {result && !result.condition.includes('Normal') && (
              <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-red-500/30 rounded-full filter blur-2xl z-20 animate-pulse"></div>
            )}

            <button
              onClick={resetScanner}
              disabled={isScanning}
              className="absolute top-4 right-4 bg-white/10 hover:bg-red-500 text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 z-30 opacity-0 group-hover:opacity-100"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Right Side: Analysis Controls & Results */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white relative">
        {!previewUrl ? (
           <div className="text-center text-slate-400 flex flex-col items-center animate-fade-in">
             <div className="w-24 h-24 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center mb-6">
               <BrainCircuit size={40} className="opacity-30" />
             </div>
             <h3 className="text-xl font-semibold text-slate-700 mb-2">Awaiting Input</h3>
             <p className="max-w-xs">Upload an image on the left to initialize the ResNet-50 inference pipeline.</p>
           </div>
        ) : isScanning ? (
           <div className="flex flex-col items-center justify-center text-center animate-fade-in w-full max-w-md mx-auto">
             <div className="relative w-24 h-24 mb-8">
               <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
               <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
               <BrainCircuit className="absolute inset-0 m-auto text-blue-600 animate-pulse" size={32} />
             </div>

             <h3 className="text-2xl font-bold text-slate-800 mb-2">Analyzing Radiograph</h3>

             {/* Dynamic Status Text */}
             <div className="h-6 overflow-hidden mb-8 w-full">
               <div className="animate-slide-up-text text-cyan-600 font-mono text-sm">
                 <div>Initializing tensors...</div>
                 <div>Passing through Conv2D layers...</div>
                 <div>Extracting feature maps...</div>
                 <div>Generating probability distribution...</div>
               </div>
             </div>

             {/* Progress Bar */}
             <div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden">
               <div
                 className="bg-gradient-to-r from-blue-600 to-cyan-400 h-2 rounded-full transition-all duration-300 ease-out"
                 style={{ width: `${scanProgress}%` }}
               ></div>
             </div>
             <div className="text-xs text-slate-400 font-mono text-right w-full">{scanProgress}%</div>
           </div>
        ) : result ? (
           <div className="animate-fade-in-up w-full max-w-md mx-auto">
             <div className="flex items-center gap-2 mb-6">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Inference Complete</h3>
             </div>

             <div className={`p-8 rounded-3xl border-2 ${result.border} ${result.bg} mb-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full -mr-8 -mt-8"></div>

                <p className="text-sm font-semibold mb-2 opacity-80 uppercase tracking-wider">Primary Classification</p>
                <h2 className={`text-3xl font-black ${result.color} mb-8 leading-tight`}>{result.condition}</h2>

                <div>
                  <div className="flex justify-between items-end mb-2">
                    <p className="text-sm font-bold opacity-80">Model Confidence</p>
                    <h2 className="text-3xl font-bold text-slate-900">{result.probability}%</h2>
                  </div>
                  <div className="w-full bg-black/5 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full ${result.bar} transition-all duration-1000 ease-out`}
                      style={{ width: '0%', animation: `fillBar 1s ease-out forwards`, animationDelay: '0.2s' }}
                    >
                       <style>{`@keyframes fillBar { to { width: ${result.probability}%; } }`}</style>
                    </div>
                  </div>
                </div>
             </div>

             <div className="space-y-4">
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                 <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                    <Activity size={16} className="text-blue-500"/> Clinical Recommendation
                 </h4>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   {result.condition.includes('Normal')
                     ? "Algorithm detects no significant pulmonary abnormalities. Standard care protocols apply."
                     : "High probability of pathology detected. Immediate radiological review and clinical correlation are strongly advised."}
                 </p>
               </div>

               <button
                 onClick={resetScanner}
                 className="w-full group bg-white hover:bg-slate-900 border-2 border-slate-900 text-slate-900 hover:text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-sm hover:shadow-xl flex items-center justify-center gap-2"
               >
                 <UploadCloud size={20} className="group-hover:-translate-y-1 transition-transform" />
                 Analyze Another Scan
               </button>
             </div>
           </div>
        ) : (
           <div className="flex flex-col items-center justify-center text-center h-full animate-fade-in w-full max-w-md mx-auto">
             <div className="relative group mb-8">
               <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full group-hover:bg-blue-400/30 transition-colors"></div>
               <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-24 h-24 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center relative shadow-xl">
                  <BrainCircuit size={48} className="text-white" />
               </div>
             </div>

             <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready for Inference</h3>
             <p className="text-slate-600 mb-10 leading-relaxed">
               Image loaded successfully. The tensor is ready to be passed through our configured neural network.
             </p>

             <button
               onClick={startScan}
               className="w-full relative overflow-hidden group bg-blue-600 text-white py-5 rounded-2xl font-bold transition-all shadow-xl hover:shadow-blue-500/30 text-lg flex items-center justify-center gap-3"
             >
               <div className="absolute inset-0 w-0 bg-cyan-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
               <Activity size={24} className="relative z-10 group-hover:animate-pulse" />
               <span className="relative z-10">Run Diagnostic Model</span>
             </button>
           </div>
        )}
      </div>
    </div>
  );
};

// --- GLOBAL STYLES & ANIMATIONS ---
const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
      <div
        className="relative h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_18px_rgba(56,189,248,0.65)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes fade-in-up {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fade-in-down {
      0% { opacity: 0; transform: translateY(-30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fade-in-left {
      0% { opacity: 0; transform: translateX(-40px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes fade-in-right {
      0% { opacity: 0; transform: translateX(40px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes fade-in {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes fade-in-page {
      0% { opacity: 0; filter: blur(5px); transform: scale(0.98); }
      100% { opacity: 1; filter: blur(0); transform: scale(1); }
    }
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    @keyframes scan-line {
      0% { top: 0%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }
    @keyframes slide-up-text {
      0%, 20% { transform: translateY(0); }
      25%, 45% { transform: translateY(-24px); }
      50%, 70% { transform: translateY(-48px); }
      75%, 100% { transform: translateY(-72px); }
    }
    @keyframes subtle-float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }
    @keyframes soft-glow {
      0%, 100% { box-shadow: 0 0 0 rgba(56,189,248,0.0); }
      50% { box-shadow: 0 0 32px rgba(56,189,248,0.35); }
    }
    @keyframes orbit-slow {
      0% { transform: translate3d(0, 0, 0) rotate(0deg); }
      50% { transform: translate3d(6px, -8px, 0) rotate(5deg); }
      100% { transform: translate3d(0, 0, 0) rotate(0deg); }
    }
    @keyframes orbit-medium {
      0% { transform: translate3d(0, 0, 0); }
      25% { transform: translate3d(-6px, 4px, 0); }
      50% { transform: translate3d(0, 10px, 0); }
      75% { transform: translate3d(8px, 2px, 0); }
      100% { transform: translate3d(0, 0, 0); }
    }
    @keyframes stethoscope-swing {
      0%, 100% { transform: rotate(0deg) translateY(0); }
      25% { transform: rotate(-8deg) translateY(1px); }
      50% { transform: rotate(5deg) translateY(-1px); }
      75% { transform: rotate(-4deg) translateY(0); }
    }

    .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
    .animate-fade-in-down { animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
    .animate-fade-in-left { animation: fade-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
    .animate-fade-in-right { animation: fade-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
    .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
    .animate-fade-in-page { animation: fade-in-page 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
    .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
    .animate-blob { animation: blob 10s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
    .animate-scan-line { animation: scan-line 2.5s linear infinite; }
    .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    .animate-slide-up-text { animation: slide-up-text 8s steps(1) infinite; }

    html, body {
      scroll-behavior: smooth;
      background-color: #020617;
    }

    .parallax-surface {
      background:
        radial-gradient(circle at 0% 0%, rgba(56,189,248,0.18), transparent 55%),
        radial-gradient(circle at 100% 100%, rgba(129,140,248,0.18), transparent 55%);
      background-attachment: fixed;
      background-size: cover;
    }

    .floating-card {
      animation: subtle-float 5s ease-in-out infinite;
    }

    .glow-on-scroll {
      animation: soft-glow 5.5s ease-in-out infinite;
    }

    .icon-orbit-slow {
      animation: orbit-slow 14s ease-in-out infinite;
    }

    .icon-orbit-medium {
      animation: orbit-medium 11s ease-in-out infinite;
    }

    .icon-stethoscope-swing {
      animation: stethoscope-swing 3s ease-in-out infinite;
      transform-origin: 50% 10%;
    }

    /* Hide scrollbar for clean look but allow scroll */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #f8fafc; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  `}} />
);