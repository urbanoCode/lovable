import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
          Sala de Monitoramento
        </h1>
        <p className="text-xl text-muted-foreground">
          Visão geral da central de segurança e gestão de risco
        </p>
      </div>

      <div className="w-full max-w-5xl rounded-2xl overflow-hidden border-4 border-muted shadow-2xl">
        <img
          src="/uploads/WhatsApp_Image_2026-09-04_at_15.50.54.jpeg"
          alt="Central de Monitoramento operando com múltiplas câmeras de segurança"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
