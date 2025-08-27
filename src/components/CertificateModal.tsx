import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { X, ExternalLink, Download, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: any;
  onViewCertificate: (cert: any) => void;
  onDownloadCertificate: (cert: any) => void;
}

export function CertificateModal({ 
  isOpen, 
  onClose, 
  certificate, 
  onViewCertificate, 
  onDownloadCertificate 
}: CertificateModalProps) {
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-background rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${certificate.gradient} text-white`}>
                      {certificate.icon}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">Certificate Details</h2>
                      <p className="text-sm text-muted-foreground">
                        {certificate.title} from {certificate.issuer}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Credential ID</h4>
                  <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">
                    {certificate.credentialId}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Skills Validated</h4>
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills?.map((skill: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        <CheckCircle className="size-3 mr-1" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Description</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {certificate.description}
                  </p>
                </div>

                <div className="pt-4 space-y-2">
                  <Button 
                    className="w-full"
                    onClick={() => onViewCertificate(certificate)}
                  >
                    <ExternalLink className="size-4 mr-2" />
                    View PDF Certificate
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => onDownloadCertificate(certificate)}
                  >
                    <Download className="size-4 mr-2" />
                    Download Certificate
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}