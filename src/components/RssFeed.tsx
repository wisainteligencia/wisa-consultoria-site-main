import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RssItem {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;
  contentSnippet?: string;
  categories?: string[];
}

interface RssFeedProps {
  feedUrl?: string;
  maxItems?: number;
  title?: string;
}

const RssFeed: React.FC<RssFeedProps> = ({ 
  feedUrl = 'https://www.contabeis.com.br/rss/noticias/',
  maxItems = 5,
  title = 'Notícias Contábeis'
}) => {
  const [items, setItems] = useState<RssItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Tentar usar um proxy CORS público para evitar problemas de cross-origin
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const encodedUrl = encodeURIComponent(feedUrl);
        
        const response = await fetch(`${proxyUrl}${encodedUrl}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.contents) {
          throw new Error('Resposta vazia do proxy');
        }
        
        const parser = new Parser();
        const feed = await parser.parseString(data.contents);
        
        const processedItems = feed.items
          .slice(0, maxItems)
          .map(item => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            content: item.content,
            contentSnippet: item.contentSnippet,
            categories: item.categories
          }));

        setItems(processedItems);
      } catch (err) {
        console.error('Erro ao carregar RSS:', err);
        
        // Fallback: tentar carregar dados mockados se o feed falhar
        const mockItems: RssItem[] = [
          {
            title: "IRPF 2026: veja como importar declaração anterior",
            link: "https://www.contabeis.com.br/noticias/76085/irpf-2026-veja-como-importar-declaracao-anterior/",
            pubDate: "Fri, 10 Apr 2026 14:00:02 -0300",
            contentSnippet: "Ferramenta oficial da Receita permite recuperar dados já enviados e agilizar o preenchimento do Imposto de Renda.",
            categories: ["Tributário"]
          },
          {
            title: "CNAE, Código de Tributação e NBS ganham peso na NFS-e nacional",
            link: "https://www.contabeis.com.br/noticias/76043/cnae-codigo-de-tributacao-e-nbs-ganham-peso-na-nfs-e-nacional/",
            pubDate: "Fri, 10 Apr 2026 12:00:01 -0300",
            contentSnippet: "A NFS-e nacional exige atenção à correlação entre CNAE, Código de Tributação Nacional e NBS para evitar erros fiscais.",
            categories: ["Tributário"]
          },
          {
            title: "MEIs devem redobrar atenção: golpes reaparecem perto do prazo da DASN-SIMEI",
            link: "https://www.contabeis.com.br/noticias/76047/meis-devem-redobrar-atencao-golpes-reaparecem-perto-do-prazo-da-dasn-simei/",
            pubDate: "Fri, 10 Apr 2026 10:00:01 -0300",
            contentSnippet: "Golpistas estão se aproveitando da proximidade do prazo para entrega da declaração para aplicar fraudes.",
            categories: ["Empresarial"]
          }
        ];
        
        setItems(mockItems.slice(0, maxItems));
        setError('Usando dados em cache devido a problemas de conexão com o feed RSS.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [feedUrl, maxItems]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(maxItems)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error && items.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-400">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>
          Últimas notícias do portal Contábeis
          {error && (
            <span className="text-yellow-400 ml-2 text-xs">
              (Dados em cache)
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2 line-clamp-3">
                    {item.contentSnippet}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatDate(item.pubDate)}
                    </span>
                    {item.categories && item.categories.length > 0 && (
                      <div className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        <span>{item.categories[0]}</span>
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-shrink-0"
                  style={{ 
                    backgroundColor: "hsl(38 55% 50%)",
                    color: "hsl(345 48% 12%)",
                    borderColor: "hsl(38 55% 50%)"
                  }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Ler
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t">
          <Button
            variant="outline"
            asChild
            className="w-full text-center"
            style={{ 
              backgroundColor: "hsl(38 55% 50%)",
              color: "hsl(345 48% 12%)",
              borderColor: "hsl(38 55% 50%)"
            }}
          >
            <a
              href="https://www.contabeis.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity py-2"
            >
              Ver mais notícias no portal Contábeis
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RssFeed;
