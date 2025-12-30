
import React, { useState, useCallback } from 'react';
import { Page, EnhancementOptions } from './types';
import { enhancePrompt } from './services/promptLogic';
import { AdPlaceholder } from './components/AdPlaceholder';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [options, setOptions] = useState<EnhancementOptions>({
    addRole: true,
    addStructure: true,
    addConstraints: true,
    targetTone: 'professional'
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const handleEnhance = () => {
    const result = enhancePrompt(input, options);
    setOutput(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const renderHome = () => (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Free AI Prompt Enhancer
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Improve your ChatGPT results instantly. Our tool applies professional prompt engineering rules to your simple ideas for better, more accurate AI outputs.
        </p>
      </section>

      <AdPlaceholder slot="top_banner" />

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8 space-y-6">
          {/* Input Area */}
          <div>
            <label htmlFor="promptInput" className="block text-sm font-semibold text-slate-700 mb-2">
              Paste your raw prompt here
            </label>
            <textarea
              id="promptInput"
              className="w-full h-40 p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
              placeholder="Example: Write an article about dogs..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-indigo-600 rounded"
                checked={options.addRole}
                onChange={(e) => setOptions({...options, addRole: e.target.checked})}
              />
              <span className="text-sm text-slate-700">Add Expert Role</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-indigo-600 rounded"
                checked={options.addStructure}
                onChange={(e) => setOptions({...options, addStructure: e.target.checked})}
              />
              <span className="text-sm text-slate-700">Add Structure</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-indigo-600 rounded"
                checked={options.addConstraints}
                onChange={(e) => setOptions({...options, addConstraints: e.target.checked})}
              />
              <span className="text-sm text-slate-700">Add Constraints</span>
            </label>
            <select 
              className="bg-white border border-slate-300 rounded text-sm p-1 outline-none"
              value={options.targetTone}
              onChange={(e) => setOptions({...options, targetTone: e.target.value})}
            >
              <option value="professional">Professional Tone</option>
              <option value="friendly">Friendly Tone</option>
              <option value="academic">Academic Tone</option>
              <option value="neutral">Neutral Tone</option>
            </select>
          </div>

          <button
            onClick={handleEnhance}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Enhance Prompt Now</span>
          </button>

          {/* Output Area */}
          {output && (
            <div className="pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-700">Enhanced Result</label>
                <button
                  onClick={handleCopy}
                  className="text-xs bg-slate-200 hover:bg-slate-300 px-3 py-1 rounded-md transition-all font-medium flex items-center space-x-1"
                >
                  {copySuccess ? (
                    <span className="text-green-600">Copied!</span>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      <span>Copy Result</span>
                    </>
                  )}
                </button>
              </div>
              <textarea
                readOnly
                className="w-full h-64 p-4 bg-slate-50 border border-slate-200 rounded-xl font-mono text-sm text-slate-800 resize-none outline-none"
                value={output}
              />
            </div>
          )}
        </div>
      </div>

      <AdPlaceholder slot="middle_content" />

      {/* SEO Content Section */}
      <section className="mt-16 prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Engineer Better AI Prompts</h2>
        <div className="grid md:grid-cols-3 gap-8 text-slate-600 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Role Prompting</h3>
            <p>Assigning a specific persona to the AI (e.g., "Act as a Senior Developer") focuses its knowledge base and changes the tone of the output significantly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Structured Output</h3>
            <p>Asking for specific sections like "Executive Summary" or "Bullet Points" prevents the AI from giving a wall of unstructured text that is hard to read.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Defining Constraints</h3>
            <p>Explicitly telling the model what NOT to do is often as important as telling it what to do. This reduces "hallucinations" and irrelevant content.</p>
          </div>
        </div>
      </section>

      <AdPlaceholder slot="footer_banner" />
    </div>
  );

  const renderAbout = () => (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">About PromptMaster</h1>
      <p className="text-slate-600 mb-4">PromptMaster was created to bridge the gap between simple user requests and the complex instructions required to get the best out of Large Language Models (LLMs) like ChatGPT, Claude, and Gemini.</p>
      <p className="text-slate-600">Our tool is 100% private. We do not use external APIs or store your data. All enhancement logic runs locally in your browser using expert-crafted prompt engineering templates.</p>
    </div>
  );

  const renderPrivacy = () => (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Effective Date: October 2023</p>
      <p className="mb-4">At PromptMaster, we prioritize your privacy. This policy explains how we handle your information.</p>
      <h2 className="text-xl font-bold mt-6 mb-2">1. Data Collection</h2>
      <p className="mb-4">We do NOT collect, store, or share any prompts you enter into our tool. All processing happens locally on your device.</p>
      <h2 className="text-xl font-bold mt-6 mb-2">2. Cookies & Advertising</h2>
      <p className="mb-4">We use Google AdSense to show advertisements. Google may use cookies to serve ads based on your visits to this and other websites.</p>
      <h2 className="text-xl font-bold mt-6 mb-2">3. Third Party Links</h2>
      <p>Our site may contain links to other websites. We are not responsible for their privacy practices.</p>
    </div>
  );

  const renderDisclaimer = () => (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <p className="mb-4">The information provided by PromptMaster is for general informational purposes only. While our tool helps improve prompts, we do not guarantee specific results from any AI models.</p>
      <p>All AI-generated content should be reviewed for accuracy by a human expert before use in professional or critical contexts.</p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage(Page.HOME)}
          >
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">PromptMaster</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
            <button onClick={() => setCurrentPage(Page.HOME)} className="hover:text-indigo-600 transition-colors">Tool</button>
            <button onClick={() => setCurrentPage(Page.ABOUT)} className="hover:text-indigo-600 transition-colors">About</button>
            <button onClick={() => setCurrentPage(Page.PRIVACY)} className="hover:text-indigo-600 transition-colors">Privacy</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {currentPage === Page.HOME && renderHome()}
        {currentPage === Page.ABOUT && renderAbout()}
        {currentPage === Page.PRIVACY && renderPrivacy()}
        {currentPage === Page.DISCLAIMER && renderDisclaimer()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 text-white mb-4">
              <div className="bg-indigo-600 p-1 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold">PromptMaster</span>
            </div>
            <p className="text-sm">The world's simplest open-source prompt engineering tool. Designed for privacy, speed, and accuracy.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="text-sm space-y-2">
              <li><button onClick={() => setCurrentPage(Page.ABOUT)} className="hover:text-indigo-400">About Us</button></li>
              <li><button onClick={() => setCurrentPage(Page.HOME)} className="hover:text-indigo-400">Enhancer Tool</button></li>
              <li><a href="#" className="hover:text-indigo-400">AI Blog (Coming Soon)</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="text-sm space-y-2">
              <li><button onClick={() => setCurrentPage(Page.PRIVACY)} className="hover:text-indigo-400">Privacy Policy</button></li>
              <li><button onClick={() => setCurrentPage(Page.DISCLAIMER)} className="hover:text-indigo-400">Disclaimer</button></li>
              <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} PromptMaster. Built for SEO and Privacy.
        </div>
      </footer>
    </div>
  );
};

export default App;
