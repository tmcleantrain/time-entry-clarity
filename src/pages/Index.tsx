import React, { useState } from 'react';
import { Clock, Users, DollarSign, Scale, CheckCircle, Edit3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [practiceEntry, setPracticeEntry] = useState('');

  const keyAspects = [
    {
      icon: Users,
      title: 'Client Trust',
      description: 'Clear narratives help clients understand services rendered',
      details: 'Clients rely on detailed descriptions to see the value in legal services. Transparent time entries build trust and demonstrate professionalism.',
      color: 'bg-[#4682B4]'
    },
    {
      icon: DollarSign,
      title: 'Revenue Management',
      description: 'Accurate entries enable proper financial forecasting',
      details: 'Firms use time entry data to track performance, manage cash flow, and make strategic business decisions.',
      color: 'bg-[#D4A017]'
    },
    {
      icon: Scale,
      title: 'Ethical Compliance',
      description: 'Proper timekeeping ensures ethical billing practices',
      details: 'Detailed and accurate time entries help maintain compliance with legal ethics rules and professional standards.',
      color: 'bg-[#1b263B]'
    },
    {
      icon: CheckCircle,
      title: 'Value Demonstration',
      description: 'Showcase legal reasoning and diligence to clients',
      details: 'Well-crafted narratives highlight the skill, thought process, and effort that goes into legal work.',
      color: 'bg-[#4A5568]'
    }
  ];

  const handlePracticeSubmit = () => {
    if (practiceEntry.trim()) {
      toast.success('Great practice entry! Keep refining your timekeeping skills.');
      setPracticeEntry('');
    } else {
      toast.error('Please enter a time entry to practice with.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7FAFc] to-[#B0C4De]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1b263B] to-[#4A5568] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Clock className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B0C4De]">
              The Importance of Timekeeping in Legal Practice
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#B0C4De]">
              Master the art of effective time entries to build client trust, ensure compliance, and demonstrate value
            </p>
          </div>
        </div>
      </div>

      {/* Key Aspects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1b263B] mb-4">Why Timekeeping Matters</h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Time entries form the foundation of the client billing process and reflect the value of legal services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyAspects.map((aspect, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                selectedCard === index ? 'ring-4 ring-[#4682B4] shadow-xl' : ''
              }`}
              onClick={() => setSelectedCard(selectedCard === index ? null : index)}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${aspect.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <aspect.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1b263B]">{aspect.title}</CardTitle>
                <CardDescription className="text-[#4A5568]">{aspect.description}</CardDescription>
              </CardHeader>
              {selectedCard === index && (
                <CardContent className="pt-0">
                  <div className="p-4 bg-[#F7FAFc] rounded-lg">
                    <p className="text-sm text-[#4A5568]">{aspect.details}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-[#F7FAFc] to-[#B0C4De] rounded-2xl p-8 border border-[#B0C4De]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1b263B] mb-4">Practice Your Skills</h3>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              Try writing your own time entry using the principles you've learned. Focus on clarity, specificity, and present-tense action verbs.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Textarea
              placeholder="Write your practice time entry here..."
              value={practiceEntry}
              onChange={(e) => setPracticeEntry(e.target.value)}
              className="min-h-[120px] mb-4 text-lg border-[#B0C4De] focus:border-[#4682B4]"
            />
            <div className="flex justify-center">
              <Button 
                onClick={handlePracticeSubmit}
                className="bg-gradient-to-r from-[#1b263B] to-[#4A5568] hover:from-[#4A5568] hover:to-[#1b263B] text-white px-8 py-2"
              >
                Submit Practice Entry
              </Button>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-[#1b263B] mb-4">The Bottom Line</h3>
          <p className="text-lg text-[#4A5568] max-w-3xl mx-auto">
            Effective timekeeping is more than just recording hours—it's about building trust, demonstrating value, 
            and maintaining the highest standards of legal practice. Every entry is an opportunity to show your professionalism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
