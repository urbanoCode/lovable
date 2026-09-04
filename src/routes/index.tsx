import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="max-w-5xl w-full space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Sala de Monitoramento
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Central de segurança, gestão de risco e zeladoria em tempo real.
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
          <div className="aspect-video w-full flex items-center justify-center bg-muted">
            <img
              src="/uploads/WhatsApp_Image_2026-09-04_at_15.50.54.jpeg"
              alt="Sala de Monitoramento da Safe System"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
