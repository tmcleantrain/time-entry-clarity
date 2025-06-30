
import React, { useState } from 'react';
import { Clock, Users, DollarSign, Scale, CheckCircle, AlertCircle, Lightbulb, Edit3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [practiceEntry, setPracticeEntry] = useState('');
  const [showTip, setShowTip] = useState(false);

  const keyAspects = [
    {
      icon: Users,
      title: 'Client Trust',
      description: 'Clear narratives help clients understand services rendered',
      details: 'Clients rely on detailed descriptions to see the value in legal services. Transparent time entries build trust and demonstrate professionalism.',
      color: 'bg-blue-500'
    },
    {
      icon: DollarSign,
      title: 'Revenue Management',
      description: 'Accurate entries enable proper financial forecasting',
      details: 'Firms use time entry data to track performance, manage cash flow, and make strategic business decisions.',
      color: 'bg-green-500'
    },
    {
      icon: Scale,
      title: 'Ethical Compliance',
      description: 'Proper timekeeping ensures ethical billing practices',
      details: 'Detailed and accurate time entries help maintain compliance with legal ethics rules and professional standards.',
      color: 'bg-purple-500'
    },
    {
      icon: CheckCircle,
      title: 'Value Demonstration',
      description: 'Showcase legal reasoning and diligence to clients',
      details: 'Well-crafted narratives highlight the skill, thought process, and effort that goes into legal work.',
      color: 'bg-orange-500'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Clock className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              The Importance of Timekeeping in Legal Practice
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Master the art of effective time entries to build client trust, ensure compliance, and demonstrate value
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 backdrop-blur-sm">
              Interactive Guide
            </Badge>
          </div>
        </div>
      </div>

      {/* Key Aspects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Timekeeping Matters</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Time entries form the foundation of the client billing process and reflect the value of legal services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyAspects.map((aspect, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                selectedCard === index ? 'ring-4 ring-blue-500 shadow-xl' : ''
              }`}
              onClick={() => setSelectedCard(selectedCard === index ? null : index)}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${aspect.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <aspect.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{aspect.title}</CardTitle>
                <CardDescription>{aspect.description}</CardDescription>
              </CardHeader>
              {selectedCard === index && (
                <CardContent className="pt-0">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{aspect.details}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Interactive Tip Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-16 border border-yellow-200">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-yellow-400 rounded-full">
              <Lightbulb className="h-6 w-6 text-yellow-900" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-yellow-900 mb-2">✨ Quick Tip</h3>
              <p className="text-lg text-yellow-800 mb-4">
                Use present-tense action verbs to make your narratives clear and effective.
              </p>
              <Button 
                onClick={() => setShowTip(!showTip)}
                variant="outline"
                className="border-yellow-400 text-yellow-700 hover:bg-yellow-100"
              >
                {showTip ? 'Hide Examples' : 'Show Examples'}
              </Button>
              {showTip && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-yellow-200">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-700 font-medium">Good:</span>
                      <span className="text-gray-700">"Review contract terms"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-red-700 font-medium">Avoid:</span>
                      <span className="text-gray-700">"Reviewed contract terms"</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Example Entry Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 bg-blue-500 rounded-full">
              <Edit3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">📝 Example Entry</h3>
              <p className="text-gray-600">Here's a well-crafted time entry that follows best practices:</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <p className="text-lg font-mono text-gray-800 mb-4">
              "Review and draft revisions to settlement agreement with A. Underhill."
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Present tense</Badge>
              <Badge variant="secondary">Action verb</Badge>
              <Badge variant="secondary">Specific details</Badge>
              <Badge variant="secondary">Client reference</Badge>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Practice Your Skills</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Try writing your own time entry using the principles you've learned. Focus on clarity, specificity, and present-tense action verbs.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Textarea
              placeholder="Write your practice time entry here..."
              value={practiceEntry}
              onChange={(e) => setPracticeEntry(e.target.value)}
              className="min-h-[120px] mb-4 text-lg"
            />
            <div className="flex justify-center">
              <Button 
                onClick={handlePracticeSubmit}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2"
              >
                Submit Practice Entry
              </Button>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Effective timekeeping is more than just recording hours—it's about building trust, demonstrating value, 
            and maintaining the highest standards of legal practice. Every entry is an opportunity to show your professionalism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
