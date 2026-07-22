/**
 * Utilitário central de rastreamento (Google Analytics 4 + Google Ads).
 *
 * O site já carrega o gtag.js no index.html (GA4: G-LDHNQD78MS).
 * Para medir conversões de campanhas do Google Ads, defina o ID de conversão
 * do Google Ads no index.html (procure por "AW-XXXXXXXXX" nos comentários)
 * e, se quiser, o rótulo (label) de conversão específico de cada evento abaixo.
 *
 * Como obter o ID/label do Google Ads:
 * Google Ads > Ferramentas e configurações > Conversões > sua ação de conversão
 * > "Configuração da tag" > "Usar o Google tag Manager"/"Instalar você mesmo".
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// TODO: troque pelo ID de conversão do Google Ads (formato AW-XXXXXXXXX).
// Enquanto não for preenchido, os eventos de conversão do Ads ficam desativados
// automaticamente (não gera erro), mas o GA4 continua registrando tudo normalmente.
export const GOOGLE_ADS_CONVERSION_ID = ""; // ex: "AW-123456789"

// Mapeie aqui os rótulos de conversão do Google Ads para cada tipo de evento,
// caso queira conversões separadas por origem (WhatsApp, formulário, telefone...).
const ADS_CONVERSION_LABELS: Record<string, string> = {
  // whatsapp_click: "AbCdEfGhIjKlMnOp",
  // generate_lead: "QrStUvWxYz123456",
};

type TrackParams = Record<string, string | number | boolean | undefined>;

/**
 * Dispara um evento para o GA4 e, se configurado, uma conversão para o Google Ads.
 * Chame em cliques de WhatsApp, envio de formulário, clique em telefone/e-mail etc.
 */
export function trackEvent(eventName: string, params: TrackParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  // Evento padrão no GA4 (aparece em Relatórios > Engajamento > Eventos)
  window.gtag("event", eventName, {
    event_category: "lead",
    ...params,
  });

  // Evento de conversão para o Google Ads (só dispara se o ID estiver configurado)
  if (GOOGLE_ADS_CONVERSION_ID) {
    const label = ADS_CONVERSION_LABELS[eventName];
    window.gtag("event", "conversion", {
      send_to: label ? `${GOOGLE_ADS_CONVERSION_ID}/${label}` : GOOGLE_ADS_CONVERSION_ID,
      ...params,
    });
  }
}
