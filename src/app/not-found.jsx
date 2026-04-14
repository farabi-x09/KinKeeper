'use client'
import React from 'react';
import { Home, ArrowLeft, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center">
                {/* Illustration/Icon Area */}
                <div className="relative mb-8">
                    <h1 className="text-9xl font-black text-slate-200 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-2xl shadow-xl rotate-3">
                            <span className="text-4xl">🚀</span>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Lost in space?
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    The page your looking for has drifted into deep space. 
                    It might have been moved, or it never existed in this dimension.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button 
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        <RefreshCcw size={18} />
                        Retry
                    </button>
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                    >
                        <Home size={18} />
                        Back Home
                  </Link>
                </div>

                {/* Footer Link */}
                <button 
                    onClick={() => window.history.back()}
                    className="mt-8 text-sm text-slate-400 hover:text-indigo-600 flex items-center justify-center gap-1 mx-auto transition-colors"
                >
                    <ArrowLeft size={14} />
                    Go back to previous page
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;