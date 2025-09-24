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
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 bg-white rounded-xl">
              <Server className="w-10 h-10 text-black" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
                OvertimeHosting
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
            </div>
          </div>
          <Badge variant="outline" className="text-lg px-6 py-3 border-white text-white">
            Domain Management System
          </Badge>
        </header>

        {/* Main Content Card */}
        <Card className="max-w-5xl mx-auto bg-zinc-950 border-zinc-800 shadow-2xl">
          <CardContent className="p-8 md:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-white" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Domain Reserved
                </h2>
              </div>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                This domain is owned and managed by <span className="text-white font-bold">OvertimeHosting</span> — 
                a professional hosting and infrastructure management company.
              </p>
              
              {/* Domain Display */}
              <div className="bg-black rounded-lg p-6 mb-12 border border-zinc-700 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <code className="text-2xl md:text-3xl font-mono text-white break-all">
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
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-black rounded-lg p-8 border border-zinc-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Current Status</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  This domain is currently reserved and not configured for a specific website or application. 
                  It may be intended for future use or held for a client project.
                </p>
              </div>

              <div className="bg-black rounded-lg p-8 border border-zinc-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Security & Management</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Domain security, DNS management, and hosting infrastructure are maintained 
                  by OvertimeHosting's professional systems and monitoring.
                </p>
              </div>
            </div>

            {/* Information Section */}
            <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-700 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                What This Means
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-zinc-300">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-lg mt-1">•</span>
                    <span>Domain is registered and owned by OvertimeHosting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-lg mt-1">•</span>
                    <span>Not available for public registration</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-lg mt-1">•</span>
                    <span>May be reserved for future client projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-lg mt-1">•</span>
                    <span>Managed by professional hosting infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center bg-white text-black rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Domain Inquiries
              </h3>
              <p className="text-lg mb-8 text-zinc-700 max-w-2xl mx-auto">
                Questions about this domain or interested in our hosting services? 
                Contact OvertimeHosting directly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-black text-white hover:bg-zinc-800 min-w-[200px] text-lg"
                  onClick={() => mounted && (window.location.href = 'mailto:contact@overtimehosting.com')}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Email Us
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-black text-white bg-black hover:bg-zinc-800 hover:text-white min-w-[200px] text-lg"
                  onClick={() => mounted && window.open('https://overtimehosting.com', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-3" />
                  Visit Website
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-black text-white bg-black hover:bg-zinc-800 hover:text-white min-w-[200px] text-lg"
                  onClick={() => mounted && window.open('https://www.instagram.com/overtimehosting/', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-3" />
                  Follow Us
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center mt-16 text-zinc-500 space-y-2">
          <div className="h-px w-32 bg-zinc-800 mx-auto mb-8" />
          <p className="text-lg">
            © {currentYear} OvertimeHosting. All rights reserved.
          </p>
          <p className="text-sm">
            Professional hosting, domain management, and infrastructure services.
          </p>
        </footer>
      </div>
    </div>
  );
}
