import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-zinc-900 border-2 border-yellow-500/40 rounded-2xl p-8 space-y-4 shadow-2xl">
            <div className="w-14 h-14 bg-yellow-400/20 text-yellow-400 rounded-2xl flex items-center justify-center mx-auto text-2xl border border-yellow-400/40">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-black text-white">
              Onde Mande! Ado Saketek Gangguan
            </h1>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Halaman toko GadgetKini Padang mangalami kendala saat memuat. Sanak bisa klik tombol di bawah untuak memuat ulang halaman.
            </p>
            {this.state.error && (
              <div className="bg-black/60 p-3 rounded-lg text-left overflow-auto max-h-32 text-[11px] font-mono text-zinc-400 border border-zinc-800">
                {this.state.error.message}
              </div>
            )}
            <button
              onClick={this.handleReload}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition active:scale-95 shadow-lg shadow-yellow-500/20"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Muat Ulang Halaman</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
