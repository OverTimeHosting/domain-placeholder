'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Mail, Phone, Clock, Shield, Server, ExternalLink, Copy, Check, Instagram } from 'lucide-react';

export default function OTHDomainPlaceholder() {
  const [currentYear] = useState(new Date().getFullYear());
  const [domainName, setDomainName] = useState('this-domain.com');
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setDomainName(window.location.hostname);
    }
  }, []);

  const copyDomain = async () => {
    if (!mounted) return;
    try {
      await navigator.clipboard.writeText(domainName);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy domain:', err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16 fade-in">
        {/* Header */}
        <header className="text-center mb-12 px-2">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
              <div className="p-2 sm:p-3 bg-white rounded-lg shadow-lg">
                <Server className="w-8 h-8 sm:w-12 sm:h-12 text-black" />
              </div>
              <div className="text-left">
                <h1 className="text-xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                  OvertimeHosting
                </h1>
                <div className="h-0.5 w-full bg-white opacity-60 mt-1 sm:mt-2" />
              </div>
            </div>
            <Badge variant="outline" className="text-xs sm:text-base px-3 py-1 sm:px-6 sm:py-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors">
              Domain Management System
            </Badge>
          </div>
        </header>

        {/* Main Content Card */}
        <Card className="max-w-4xl mx-auto bg-zinc-950 border-zinc-800 shadow-2xl">
          <CardContent className="p-4 md:p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <Globe className="w-6 h-6 text-white" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Domain Reserved
                </h2>
              </div>
              <p className="text-lg text-zinc-300 mb-6 max-w-xl mx-auto">
                This domain is owned and managed by <span className="text-white font-bold">OvertimeHosting</span> — 
                a professional hosting and infrastructure management company.
              </p>
              
              {/* Domain Display */}
              <div className="bg-black rounded-lg p-4 mb-8 border border-zinc-700 max-w-xl mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <code className="text-lg md:text-2xl font-mono text-white break-all">
                    {domainName}
                  </code>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={copyDomain}
                    className="shrink-0"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>

            {/* Status Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black rounded-lg p-6 border border-zinc-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Current Status</h3>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  This domain is currently reserved and not configured for a specific website or application. 
                  It may be intended for future use or held for a client project.
                </p>
              </div>

              <div className="bg-black rounded-lg p-6 border border-zinc-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg">
                    <Shield className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Security & Management</h3>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Domain security, DNS management, and hosting infrastructure are maintained 
                  by OvertimeHosting's professional systems and monitoring.
                </p>
              </div>
            </div>

            {/* Information Section */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                What This Means
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-zinc-300 text-sm">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-base mt-0.5">•</span>
                    <span>Domain is registered and owned by OvertimeHosting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-base mt-0.5">•</span>
                    <span>Not available for public registration</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-base mt-0.5">•</span>
                    <span>May be reserved for future client projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-base mt-0.5">•</span>
                    <span>Managed by professional hosting infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center bg-white text-black rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                Domain Inquiries
              </h3>
              <p className="text-base mb-6 text-zinc-700 max-w-xl mx-auto">
                Questions about this domain or interested in our hosting services? 
                Contact OvertimeHosting directly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
                <Button 
                  size="default" 
                  className="bg-black text-white hover:bg-zinc-800 min-w-[180px] text-base"
                  onClick={() => mounted && (window.location.href = 'mailto:contact@overtimehosting.com')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
                
                <Button 
                  variant="outline" 
                  size="default"
                  className="border-black text-white bg-black hover:bg-zinc-800 hover:text-white min-w-[180px] text-base"
                  onClick={() => mounted && window.open('https://overtimehosting.com', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>

                <Button 
                  variant="outline" 
                  size="default"
                  className="border-black text-white bg-black hover:bg-zinc-800 hover:text-white min-w-[180px] text-base"
                  onClick={() => mounted && window.open('https://www.instagram.com/overtimehosting/', '_blank')}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow Us
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center mt-12 text-zinc-500 space-y-1">
          <div className="h-px w-24 bg-zinc-800 mx-auto mb-6" />
          <p className="text-base">
            © {currentYear} OvertimeHosting. All rights reserved.
          </p>
          <p className="text-xs">
            Professional hosting, domain management, and infrastructure services.
          </p>
        </footer>
      </div>
    </div>
  );
}
