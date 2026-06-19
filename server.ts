import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

// API endpoint para verificação rápida de integridade
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Configuração do express para servir o frontend Vite (SPA)
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[SERVER] Central de Inteligência Astrológica iniciada na porta ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Erro ao inicializar o servidor de produção:', err);
});
