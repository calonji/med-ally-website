import { type FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, Rocket, Zap, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import WaitlistForm from './WaitlistForm';
import { Badge } from '@/components/ui/badge';

interface WaitlistDialogProps {
  trigger?: React.ReactNode;
  className?: string;
}

const WaitlistDialog: FC<WaitlistDialogProps> = ({ trigger, className }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            className={`bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-extrabold text-base sm:text-lg tracking-wide ${className}`}
          >
            Join Waitlist
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-[90vh] sm:h-auto overflow-y-auto">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 stroke-blue-600" />
            Join MedAlly Early Access
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-gray-600">
            <div className="text-center mb-4">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block mr-2"
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                  Limited spots available!
                </Badge>
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Rocket className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-blue-600 group-hover:text-blue-700">
                    Exclusive first access
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    to cutting-edge AI features before public release
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20">
                  <Zap className="w-5 h-5 text-orange-500 group-hover:text-orange-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-orange-500 group-hover:text-orange-600">
                    Early bird pricing
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    secure special launch pricing before public release
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Lightbulb className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-purple-600 group-hover:text-purple-700">
                    Shape the future
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    your feedback directly influences product development
                  </div>
                </div>
              </motion.div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <WaitlistForm />
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
